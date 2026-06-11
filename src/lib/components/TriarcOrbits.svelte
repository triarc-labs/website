<script lang="ts">
  import { onMount } from 'svelte'
  import type { TriarcColor } from '$lib/components/TypeDefinitions'

  /** Pillar color to highlight; the other two families dim down. */
  export let activeColor: TriarcColor | null = null
  /** Particle density multiplier. */
  export let density = 1
  /** Orbit center, relative to canvas size. */
  export let focusX = 0.5
  export let focusY = 0.5
  /** Overall brightness, e.g. for use behind text-heavy sections. */
  export let opacity = 1
  /** Arch size multiplier, for short and wide hero sections. */
  export let scale = 1

  interface Particle {
    t: number
    speed: number
    size: number
    alpha: number
    wobblePhase: number
    wobbleAmp: number
    dx: number
    dy: number
  }

  interface Family {
    key: TriarcColor
    color: string
    /** 0 = outer arc (red), 2 = inner arc (blue) – matches the logo rainbow. */
    ring: number
    particles: Particle[]
    alphaMult: number
    speedMult: number
  }

  interface Pulse {
    x: number
    y: number
    age: number
  }

  const FAMILY_COLORS: Record<TriarcColor, string> = {
    red: '#ff4d68',
    green: '#1fd06c',
    blue: '#3fa9f5',
  }

  const PULSE_LIFE = 0.9
  const POINTER_RADIUS = 180
  const POINTER_STRENGTH = 46

  let canvas: HTMLCanvasElement
  let families: Family[] = []
  let pulses: Pulse[] = []
  let width = 0
  let height = 0
  let dpr = 1
  let rafId = 0
  let lastTime = 0
  let inView = true
  let pageVisible = true
  let reducedMotion = false
  let pointerX = 0
  let pointerY = 0
  let pointerActive = false

  $: activeTarget = activeColor

  // Concentric rings around a shared centre, nested like the arcs of the triarc rainbow.
  function orbitGeometry(family: Family) {
    const r = Math.min(width, height) * 0.52 * scale * (1 - family.ring * 0.19)
    return { r, cx: width * focusX, cy: height * focusY }
  }

  // Particles are only visible along the top arch (the rainbow); below the horizon they
  // keep moving invisibly until they re-enter on the other side.
  function archVisibility(angle: number) {
    return Math.pow(Math.max(0, -Math.sin(angle)), 0.65)
  }

  function createFamilies() {
    const area = width * height
    // Only the top half of each ring is visible, so density is roughly doubled
    const count = Math.round(Math.min(110, Math.max(36, area / 10000)) * density)
    families = (['red', 'green', 'blue'] as TriarcColor[]).map((key, ring) => ({
      key,
      color: FAMILY_COLORS[key],
      ring,
      alphaMult: 1,
      speedMult: 1,
      particles: Array.from({ length: Math.round(count * (1 - ring * 0.15)) }, () => ({
        t: Math.random() * Math.PI * 2,
        speed: 0.12 + Math.random() * 0.16,
        size: 0.9 + Math.random() * 1.5,
        alpha: 0.35 + Math.random() * 0.55,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleAmp: 0.01 + Math.random() * 0.03,
        dx: 0,
        dy: 0,
      })),
    }))
  }

  function particlePosition(family: Family, p: Particle, angle: number) {
    const { r, cx, cy } = orbitGeometry(family)
    const wobble = 1 + Math.sin(angle * 2.3 + p.wobblePhase) * p.wobbleAmp
    return { x: cx + Math.cos(angle) * r * wobble, y: cy + Math.sin(angle) * r * wobble }
  }

  function drawComet(ctx: CanvasRenderingContext2D, family: Family, p: Particle) {
    const visibility = archVisibility(p.t)
    const tailStep = 0.045 + p.speed * 0.09
    const points = [0, 1, 2, 3].map((k) => {
      const pos = particlePosition(family, p, p.t - k * tailStep)
      return { x: pos.x + p.dx, y: pos.y + p.dy }
    })
    ctx.strokeStyle = family.color
    ctx.globalAlpha = p.alpha * family.alphaMult * 0.12 * visibility * opacity
    ctx.lineWidth = p.size * 3
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)
    for (let k = 1; k < points.length; k++) {
      ctx.lineTo(points[k].x, points[k].y)
    }
    ctx.stroke()
    for (let k = 0; k < points.length - 1; k++) {
      ctx.globalAlpha = Math.min(1, p.alpha * family.alphaMult) * (1 - k / 3) * visibility * opacity
      ctx.lineWidth = Math.max(0.4, p.size * (1.5 - k * 0.35))
      ctx.beginPath()
      ctx.moveTo(points[k].x, points[k].y)
      ctx.lineTo(points[k + 1].x, points[k + 1].y)
      ctx.stroke()
    }
    ctx.globalAlpha = Math.min(1, p.alpha * family.alphaMult * 1.2) * visibility * opacity
    ctx.fillStyle = family.color
    ctx.beginPath()
    ctx.arc(points[0].x, points[0].y, p.size * 0.9, 0, Math.PI * 2)
    ctx.fill()
  }

  // Faint full arcs tracing the rainbow arch of the logo
  function drawGuides(ctx: CanvasRenderingContext2D) {
    for (const family of families) {
      const { r, cx, cy } = orbitGeometry(family)
      ctx.beginPath()
      ctx.arc(cx, cy, r, Math.PI * 1.02, Math.PI * 1.98)
      ctx.strokeStyle = family.color
      ctx.globalAlpha = 0.1 * family.alphaMult * opacity
      ctx.lineWidth = 1.5
      ctx.stroke()
    }
  }

  function step(time: number) {
    rafId = 0
    if (!canvas) {
      return
    }
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }
    const dt = Math.min((time - lastTime) / 1000 || 0, 0.05)
    lastTime = time

    ctx.clearRect(0, 0, width, height)
    drawGuides(ctx)
    ctx.lineCap = 'round'

    pulses = pulses.filter((pulse) => pulse.age < PULSE_LIFE)
    for (const pulse of pulses) {
      pulse.age += dt
    }

    for (const family of families) {
      const alphaTarget = activeTarget == null ? 1 : family.key === activeTarget ? 1.45 : 0.3
      const speedTarget = activeTarget == null ? 1 : family.key === activeTarget ? 1.7 : 0.7
      family.alphaMult += (alphaTarget - family.alphaMult) * Math.min(1, dt * 6)
      family.speedMult += (speedTarget - family.speedMult) * Math.min(1, dt * 6)

      for (const p of family.particles) {
        p.t += p.speed * family.speedMult * dt
        const pos = particlePosition(family, p, p.t)

        let targetDx = 0
        let targetDy = 0
        if (pointerActive) {
          const ox = pos.x - pointerX
          const oy = pos.y - pointerY
          const dist = Math.hypot(ox, oy)
          if (dist > 0.5 && dist < POINTER_RADIUS) {
            const force = Math.pow(1 - dist / POINTER_RADIUS, 2) * POINTER_STRENGTH
            targetDx += (ox / dist) * force
            targetDy += (oy / dist) * force
          }
        }
        for (const pulse of pulses) {
          const ox = pos.x - pulse.x
          const oy = pos.y - pulse.y
          const dist = Math.hypot(ox, oy)
          if (dist > 0.5) {
            const ring = pulse.age * 520
            const band = Math.exp(-Math.pow((dist - ring) / 90, 2))
            const force = band * 60 * (1 - pulse.age / PULSE_LIFE)
            targetDx += (ox / dist) * force
            targetDy += (oy / dist) * force
          }
        }
        p.dx += (targetDx - p.dx) * Math.min(1, dt * 7)
        p.dy += (targetDy - p.dy) * Math.min(1, dt * 7)

        drawComet(ctx, family, p)
      }
    }
    ctx.globalAlpha = 1
    scheduleFrame()
  }

  function drawStatic() {
    const ctx = canvas?.getContext('2d')
    if (!ctx) {
      return
    }
    ctx.clearRect(0, 0, width, height)
    drawGuides(ctx)
    ctx.lineCap = 'round'
    for (const family of families) {
      for (const p of family.particles) {
        drawComet(ctx, family, p)
      }
    }
    ctx.globalAlpha = 1
  }

  function scheduleFrame() {
    if (reducedMotion || !inView || !pageVisible || rafId) {
      return
    }
    rafId = requestAnimationFrame(step)
  }

  function stopFrames() {
    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = 0
    }
    lastTime = 0
  }

  function resize() {
    const parent = canvas?.parentElement
    if (!parent) {
      return
    }
    width = parent.clientWidth
    height = parent.clientHeight
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    const ctx = canvas.getContext('2d')
    ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
    createFamilies()
    if (reducedMotion) {
      drawStatic()
    }
  }

  onMount(() => {
    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    resize()

    const resizeObserver = new ResizeObserver(() => resize())
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        inView = entries.some((entry) => entry.isIntersecting)
        if (inView) {
          lastTime = 0
          scheduleFrame()
        } else {
          stopFrames()
        }
      },
      { threshold: 0 }
    )
    intersectionObserver.observe(canvas)

    const onVisibility = () => {
      pageVisible = document.visibilityState === 'visible'
      if (pageVisible) {
        lastTime = 0
        scheduleFrame()
      } else {
        stopFrames()
      }
    }
    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointerX = event.clientX - rect.left
      pointerY = event.clientY - rect.top
      pointerActive = pointerX >= 0 && pointerY >= 0 && pointerX <= rect.width && pointerY <= rect.height
    }
    const onPointerDown = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        pulses.push({ x, y, age: 0 })
      }
    }
    const onPointerLeave = () => {
      pointerActive = false
    }

    document.addEventListener('visibilitychange', onVisibility)
    if (!reducedMotion) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      window.addEventListener('pointerdown', onPointerDown, { passive: true })
      window.addEventListener('blur', onPointerLeave)
      scheduleFrame()
    }

    return () => {
      stopFrames()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('blur', onPointerLeave)
    }
  })
</script>

<canvas bind:this={canvas} class="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true"></canvas>
