import waloLogo from '$lib/assets/img/customer/walo-logo.svg'
import kibagLogo from '$lib/assets/img/customer/kibag-logo.svg'
import riwaxLogo from '$lib/assets/img/customer/riwax-logo.svg'
import sersaLogo from '$lib/assets/img/customer/sersa-logo.svg'
import enzlerLogo from '$lib/assets/img/customer/enzler-logo.png'
import orthoTeamLogo from '$lib/assets/img/customer/ortho-team-logo.svg'
import tanneLogo4sprachig from '$lib/assets/img/customer/Tanne_Logo_4sprachig.png'
import ideeSportLogoWebp from '$lib/assets/img/customer/idee-sport-logo.webp'
import svmbLogo from '$lib/assets/img/customer/svmb-logo.svg'
import srfLogo from '$lib/assets/img/customer/srf-logo.svg'
import helsanaLogo from '$lib/assets/img/customer/helsana-logo.svg'
import wettsteinLogo from '$lib/assets/img/customer/wettstein-logo.png'
import glbLogo from '$lib/assets/img/customer/glb-logo.svg'
import eblLogo from '$lib/assets/img/customer/ebl-logo.svg'
import doreanLogo from '$lib/assets/img/customer/dorean-logo.svg'
import christenLogo from '$lib/assets/img/customer/christen.svg'
import burkhalterLogo from '$lib/assets/img/customer/burkhalter_holding_logo.svg'
import renggliLogo from '$lib/assets/img/customer/renggli-logo.svg'
import volvoLogo from '$lib/assets/img/customer/volvo-logo.png'
import espaceLogo from '$lib/assets/img/customer/espace-logo.svg'
import schindlerLogo from '$lib/assets/img/customer/schindler-logo.png'
import sutterLogo from '$lib/assets/img/customer/sutter.svg'
import helvetasLogo from '$lib/assets/img/customer/helvetas.gif'
import fidigitLogo from '$lib/assets/img/customer/fidigit.jpeg'
import helfensteinLogo from '$lib/assets/img/customer/Header.svg'
import iwbLogo from '$lib/assets/img/customer/iwbLogo.svg'
import analyticaLogo from '$lib/assets/img/customer/analytica-logo-main.svg'

export interface CustomerLogo {
  name: string
  /** Customer website; logos without href render as plain images */
  href?: string
  src: string
  /** Size classes for the customer grid on /references */
  gridClass?: string
  /** Extra classes for the logo bar on the home page (e.g. invert) */
  barClass?: string
  /** Optical size correction for the logo bar, multiplies the logo area (default 1) */
  barScale?: number
}

// Shared by the customer grid (/references) and the logo carousel (home page)
export const customerLogos: CustomerLogo[] = [
  { name: 'Walo', href: 'https://walo.ch', src: waloLogo, gridClass: 'max-h-20' },
  { name: 'KIBAG', href: 'https://www.kibag.ch', src: kibagLogo, gridClass: 'max-h-20' },
  { name: 'Riwax', href: 'https://riwax.ch/', src: riwaxLogo, gridClass: 'max-h-12' },
  { name: 'Rhomberg Sersa', href: 'https://switzerland.rhomberg-sersa.com', src: sersaLogo, gridClass: 'max-h-14' },
  { name: 'Enzler', href: 'https://www.enzler.com/', src: enzlerLogo, gridClass: 'max-h-10' },
  { name: 'Ortho-Team', href: 'https://www.ortho-team.ch/', src: orthoTeamLogo, gridClass: 'max-h-10' },
  { name: 'Tanne', href: 'https://www.tanne.ch/', src: tanneLogo4sprachig, gridClass: 'max-h-20' },
  { name: 'IdéeSport', href: 'https://www.ideesport.ch/', src: ideeSportLogoWebp, gridClass: 'max-h-14' },
  { name: 'SVMB', href: 'https://www.bechterew.ch/', src: svmbLogo, gridClass: 'max-h-10' },
  { name: 'SRF', href: 'https://www.srf.ch/', src: srfLogo, gridClass: 'max-h-10' },
  { name: 'Helsana', href: 'https://www.helsana.ch/', src: helsanaLogo, gridClass: 'max-h-6' },
  {
    name: 'Wettstein',
    href: 'http://www.wwag.ch/',
    src: wettsteinLogo,
    gridClass: 'max-h-16 invert',
    barClass: 'invert',
  },
  { name: 'GLB', href: 'http://www.glb.ch/', src: glbLogo, gridClass: 'max-h-16' },
  { name: 'EBL', href: 'http://www.ebl.ch/', src: eblLogo, gridClass: 'max-h-16' },
  { name: 'Dorean', href: 'https://www.dorean.ch/', src: doreanLogo, gridClass: 'max-h-10' },
  { name: 'Christen AG', href: 'https://www.christen-ag.ch/', src: christenLogo, gridClass: 'max-h-12' },
  {
    name: 'Burkhalter Holding',
    href: 'https://www.burkhalter.ch/',
    src: burkhalterLogo,
    gridClass: 'max-h-12',
  },
  { name: 'Renggli', href: 'https://www.renggli.swiss', src: renggliLogo, gridClass: 'max-h-24' },
  { name: 'Volvo', href: 'https://www.volvocars.com/de-ch/', src: volvoLogo, gridClass: 'max-h-24' },
  { name: 'Espace Real Estate', href: 'https://espacereal.ch/', src: espaceLogo, gridClass: 'max-h-10' },
  { name: 'Schindler', href: 'https://www.schindler.com/', src: schindlerLogo, gridClass: 'max-h-28' },
  { name: 'Sutter Bau', href: 'https://www.sutterbau.ch/', src: sutterLogo, gridClass: 'max-h-24' },
  { name: 'Helvetas', href: 'https://www.helvetas.org/en/switzerland', src: helvetasLogo, gridClass: 'max-h-10' },
  { name: 'Fidinam', href: 'https://www.fidinam.com/', src: fidigitLogo, gridClass: 'max-h-28' },
  {
    name: 'Helfenstein + Bucher',
    href: 'https://www.helfensteinbucher.ch/',
    src: helfensteinLogo,
    gridClass: 'max-h-13',
  },
  { name: 'IWB', href: 'https://www.iwb.ch/', src: iwbLogo, gridClass: 'max-h-12' },
  { name: 'Analytica', href: 'https://www.analytica.ch/', src: analyticaLogo, gridClass: 'max-h-12' },
]
