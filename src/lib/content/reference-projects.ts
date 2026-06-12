import type { Picture } from 'imagetools-core'

import CAL from '$lib/assets/references/cal.png?format=webp;png&enhanced'
import OrthoClient from '$lib/assets/references/wunder-app.png?format=webp;png&enhanced'
import OrthoOrder from '$lib/assets/references/ortho-order.png?format=webp;png&enhanced'
import Riwaxique from '$lib/assets/references/riwax.png?format=webp;png&enhanced'
import Chauffeur from '$lib/assets/references/chauffeur.png?format=webp;png&enhanced'
import Fastspace from '$lib/assets/references/fastspace.png?format=webp;png&enhanced'
import M3Express from '$lib/assets/references/m3express.png?format=webp;png&enhanced'

import Sutter1 from '$lib/assets/references/sutter1.png?format=webp;png&enhanced'
import Sutter2 from '$lib/assets/references/sutter2.png?format=webp;png&enhanced'
import Sutter3 from '$lib/assets/references/sutter3.png?format=webp;png&enhanced'

import GLB1 from '$lib/assets/references/glb1.png?format=webp;png&enhanced'
import GLB2 from '$lib/assets/references/glb2.png?format=webp;png&enhanced'
import GLB3 from '$lib/assets/references/glb3.png?format=webp;png&enhanced'
import GLB4 from '$lib/assets/references/glb4.png?format=webp;png&enhanced'
import GLB5 from '$lib/assets/references/glb5.png?format=webp;png&enhanced'
import GLB6 from '$lib/assets/references/glb6.png?format=webp;png&enhanced'
import GLB7 from '$lib/assets/references/glb7.png?format=webp;png&enhanced'

import Porta1 from '$lib/assets/references/porta1.png?format=webp;png&enhanced'
import Porta2 from '$lib/assets/references/porta2.png?format=webp;png&enhanced'
import Porta3 from '$lib/assets/references/porta3.png?format=webp;png&enhanced'
import Porta4 from '$lib/assets/references/porta4.png?format=webp;png&enhanced'
import Porta5 from '$lib/assets/references/porta5.png?format=webp;png&enhanced'
import Porta6 from '$lib/assets/references/porta6.png?format=webp;png&enhanced'
import Porta7 from '$lib/assets/references/porta7.png?format=webp;png&enhanced'

import CondAct1 from '$lib/assets/references/cond-act1.png?format=webp;png&enhanced'
import CondAct2 from '$lib/assets/references/cond-act2.png?format=webp;png&enhanced'
import CondAct3 from '$lib/assets/references/cond-act3.png?format=webp;png&enhanced'
import CondAct4 from '$lib/assets/references/cond-act4.png?format=webp;png&enhanced'
import CondAct5 from '$lib/assets/references/cond-act5.png?format=webp;png&enhanced'
import CondAct6 from '$lib/assets/references/cond-act6.png?format=webp;png&enhanced'
import CondAct7 from '$lib/assets/references/cond-act7.png?format=webp;png&enhanced'
import CondAct8 from '$lib/assets/references/cond-act8.png?format=webp;png&enhanced'
import CondAct9 from '$lib/assets/references/cond-act9.png?format=webp;png&enhanced'
import CondAct10 from '$lib/assets/references/cond-act10.png?format=webp;png&enhanced'
import CondAct11 from '$lib/assets/references/cond-act11.png?format=webp;png&enhanced'
import CondAct12 from '$lib/assets/references/cond-act12.png?format=webp;png&enhanced'

import Bienvenu1 from '$lib/assets/references/bienvenu1.png?format=webp;png&enhanced'
import Bienvenu2 from '$lib/assets/references/bienvenu2.png?format=webp;png&enhanced'
import Bienvenu3 from '$lib/assets/references/bienvenu3.png?format=webp;png&enhanced'
import Bienvenu4 from '$lib/assets/references/bienvenu4.png?format=webp;png&enhanced'
import Bienvenu5 from '$lib/assets/references/bienvenu5.png?format=webp;png&enhanced'
import Bienvenu6 from '$lib/assets/references/bienvenu6.png?format=webp;png&enhanced'

import MyWalo1 from '$lib/assets/references/my-walo1.png?format=webp;png&enhanced'
import MyWalo2 from '$lib/assets/references/my-walo2.png?format=webp;png&enhanced'
import MyWalo3 from '$lib/assets/references/my-walo3.png?format=webp;png&enhanced'
import MyWalo4 from '$lib/assets/references/my-walo4.png?format=webp;png&enhanced'

import Vademecum1 from '$lib/assets/references/vademecum1.png?format=webp;png&enhanced'
import Vademecum2 from '$lib/assets/references/vademecum2.png?format=webp;png&enhanced'
import Vademecum3 from '$lib/assets/references/vademecum3.png?format=webp;png&enhanced'
import Vademecum4 from '$lib/assets/references/vademecum4.png?format=webp;png&enhanced'
import Vademecum5 from '$lib/assets/references/vademecum5.png?format=webp;png&enhanced'
import Vademecum6 from '$lib/assets/references/vademecum6.png?format=webp;png&enhanced'
import Vademecum7 from '$lib/assets/references/vademecum7.png?format=webp;png&enhanced'
import Vademecum8 from '$lib/assets/references/vademecum8.png?format=webp;png&enhanced'
import Vademecum9 from '$lib/assets/references/vademecum9.png?format=webp;png&enhanced'
import Vademecum10 from '$lib/assets/references/vademecum10.png?format=webp;png&enhanced'
import Vademecum11 from '$lib/assets/references/vademecum11.png?format=webp;png&enhanced'

import sutterLogo from '$lib/assets/img/customer/sutter.svg'
import glbLogo from '$lib/assets/img/customer/glb-logo.svg'
import tanneLogo from '$lib/assets/img/customer/tanne-logo.webp'
import ideeSportLogo from '$lib/assets/img/customer/idee-sport-logo.webp'
import waloLogo from '$lib/assets/img/customer/walo-logo.svg'

export interface ReferenceProject {
  /** URL slug under /references/ */
  slug: string
  appName: string
  customer: string
  /** One-liner for overview cards and meta description. */
  teaser: string
  tags: string[]
  companyDescription: string
  situation: string
  challenges: string
  solutions: string
  /** Cover image for overview cards and single-screenshot detail pages. */
  image: Picture
  /** Screenshot gallery; rendered as carousel on the detail page when present. */
  images?: Picture[]
  /** Customer logo, shown instead of the (portrait) screenshot on overview cards. */
  logo?: string
}

export const referenceProjects: ReferenceProject[] = [
  {
    slug: 'cal',
    appName: 'CAL',
    customer: 'Christen Holding AG',
    teaser: 'End-to-End-Logistiklösung von der Disposition über TomTom bis zur automatischen Rapportierung ins ERP.',
    tags: ['Logistik & Dispo', 'Web App'],
    companyDescription:
      'Die Christen Holding AG wird heute noch von der Gründerfamilie geführt. Als einer der grössten Arbeitgeber' +
      ' im Kanton Schwyz ist sie die erfolgreiche Baupartnerin für private und öffentliche Bauherrschaften.',
    situation:
      'Die alte Logistiklösung für Dispositionen der Fahrzeuge, wurde vom bevorstehenden Anbieter nicht mehr unterstützt sprich weiterentwickelt. Dies veranlasste die Christen AG eine eigene Custom Lösung zu bauen, damit der gesamte End to End Prozess von der Logistik, zum Chauffeur bis zum Endkunden digital abgebildet werden kann.',
    challenges:
      'Der gesamte Fahrzeugpark musste integriert werden. Der sehr komplexe analoge Prozess umfasste viele verschiedene Ausnahmen im Bereich der Anforderungen und Wünsche auf der Userseite.  Ausserdem wurde eine Schnittstelle zwischen ABACUS und der Applikation benötigt, um Daten wie Kundenstamm, Abrechnungsprozess, Auftragsverwaltungen in der Applikation anzubieten.',
    solutions:
      'Verbesserte und transparentere Kommunikation zwischen Dispo und Chauffeuren. Auftragserteilung erfolgt nun direkt von CAL aus nach TomTom. Eine Echtzeit-Routenberechnung wurde ebenfalls integriert, dies hilft der Dispo die Planung effizienter zu gestalten und Leerfahrten zu vermeiden. Die automatische Rapportierung und Verrechnung erbrachten Leistungen, minimiert den Administrationsaufwand und beugt Missverständnissen vor.',
    image: CAL,
  },
  {
    slug: 'ortho-client',
    appName: 'Ortho-Client',
    customer: 'ORTHO-TEAM Gruppe',
    teaser:
      'Work-Management-Plattform, die den papierbasierten Kernprozess von der Anamnese bis zur Produktion ersetzt.',
    tags: ['Gesundheitswesen', 'Digital Work'],
    companyDescription:
      'Die ORTHO-TEAM Gruppe ist ein Schweizer Unternehmen, welches ein ganzheitliches Versorgungskonzept in der Orthopädie- und Rehatechnik bietet. Hochspezialisiert auf der ganzen Bandbreite der Branche entwickelt der Technologiedienstleister höchst innovative Produkte, um Menschen zu mehr Unabhängigkeit und Lebensqualität zu verhelfen. 23 Standorte in der Schweiz.',
    situation:
      'Alle Prozesse der Kundenauftragsbearbeitung wurden noch manuell auf Papier durchgeführt. Das Ziel bestand darin, gemeinsam eine Work Managment Plattform zu schaffen, um den papierbasierten Kernprozess von der Anamnese bis zur Produktion zu ersetzen.',
    challenges:
      'Die Vielfalt der Prozesse und Prozessvarianten in verschiedenen Bereichen wie Rollstühle, Schuhe, Orthesen, Prothesen, und in verschiedenen Regionen, ergab ein hohes Mass an Komplexität. Die Abstimmung der Auftragsabwicklung mit der Einreichung von Kostenvoranschlägen bei Krankenkassen oder der IV war ebenfalls herausfordernd.',
    solutions:
      'OrthoClient deckt den gesamten Prozess von der Anamnese bis zur interdisziplinären Kommunikation ab. Diese App ermöglicht eine effiziente Auftragsabwicklung und gewährleistet exzellenten Kundenservice. Nach erfolgreicher Einführung wurden weitere Funktionen implementiert, darunter eine zentrale Ansicht aller Informationen und Kommunikation, ein Statusmodell in Abstimmung mit der ERP Lösung ABACUS, ein Chatmodul mit Mentions- und Notifikationen, ein Formulargenerator für die flexible Erstellung von Formularen, sowie die Integration von Trello für die Kommunikation mit der Produktion. Die Kundenerfassung ist direkt ins ERP integriert. Die Bestellung von Artikeln erfolgt nun direkt über die Order App. Diese Massnahmen führen zu verkürzten Durchlaufzeiten bei der Leistungsverrechnung und einer erheblichen Reduzierung des Aufwands in Backoffice und Administration',
    image: OrthoClient,
  },
  {
    slug: 'ortho-order',
    appName: 'Ortho-Order',
    customer: 'ORTHO-TEAM Gruppe',
    teaser: 'Mobile App für ein preis- und zeitoptimiertes Bestellwesen über 23 Standorte.',
    tags: ['Gesundheitswesen', 'Digital Work'],
    companyDescription:
      'Die ORTHO-TEAM Gruppe ist ein national tätiges Schweizer Unternehmen, welches ein ganzheitliches Versorgungskonzept in der Orthopädie- und Rehatechnik bietet.' +
      ' Hochspezialisiert auf der ganzen Bandbreite der Branche entwickeln der Technologiedienstleister höchst innovative Produkte,' +
      ' um Menschen zu mehr Unabhängigkeit und Lebensqualität zu verhelfen.',
    situation:
      'Die ORTHO-TEAM Geschäftsführung strebte an, das Bestellwesen zu revolutionieren, um eine einfache und schnelle Lieferantenbestellung ' +
      'für alle Mitarbeiter an den 23 Standorten zu ermöglichen. Ziel war es, den gesamtschweizerischen Wareneinkauf zu koordinieren, ' +
      'dabei jedoch jeder TechnikerIn die eigenständige Materialbeschaffung transparent und benutzerfreundlich zu ermöglichen, ohne ' +
      'die Kontrolle zu verlieren. In weiteren Schritten wurden zusätzliche Herausforderungen identifiziert. Eine davon war, dass ' +
      'Bestellungen pro Standort von einer Person koordiniert wurden, was zu manuellen Aufwänden und Unklarheiten führte. Eine andere' +
      ' war, dass bei komplexen Bestellungen, wie z.B. für Rollstühle, Teile von verschiedensten Lieferanten bestellt werden müssen, ' +
      'und es schwer nachvollziehbar war, für welchen Auftrag welche Teile bestellt wurden.',
    challenges:
      'Die Herausforderungen bestanden darin, die Lieferantenbestellungen an allen Standorten sicherzustellen und die Transparenz sowie Benutzerfreundlichkeit' +
      ' für die TechnikerIn zu gewährleisten. Der Prozess sollte in nachvollziehbare Schritte aufgeteilt werden,' +
      ' und es galt, Spezialfälle abzubilden. Es war wichtig dabei die Interessen der ORTHO-TEAM Gruppe zu wahren.',
    solutions:
      'OrthoOrder ist eine mobile Applikation für ein preis- und zeitoptimiertes Bestellwesen. Diese ermöglicht einen effizienten Bestellprozess' +
      ' ohne detaillierte Kenntnisse zu den Lieferanten. Der gesamte Bestellprozess ist nun deutlich einfacher, schneller und nachvollziehbarer,' +
      ' wobei die Interessen des Einkaufs gewahrt sind. Das System teilt die Bestellungen auf die Lieferanten auf, ermöglicht die präzise' +
      ' Dokumentation des Wareneingangs und die direkte Erfassung von Retouren. Die Möglichkeit, Bestellung und Rechnung des Lieferanten' +
      ' side-by-side zu prüfen und freizugeben, trägt weiter zur Effizienzsteigerung bei.',
    image: OrthoOrder,
  },
  {
    slug: 'riwaxique',
    appName: 'Riwaxique',
    customer: 'RIWAX Chemie AG',
    teaser: 'Digitale Kundenapplikation, die den Aussendienst in Echtzeit datenbasiert anleitet.',
    tags: ['Aussendienst', 'CRM'],
    companyDescription:
      'Produktionsanlagen und eine flächendeckende und kompetente Kundenbetreuung zeichnen die RIWAX Chemie AG seit Jahren als führenden Schweizer Hersteller und Anbieter von Produkten für die Fahrzeugpflege aus.',
    situation:
      'Die Geschäftsleitung hatte die Vision, die RIWAX Aussendienst-Mitarbeitenden mit einer digitalen Kundenapplikation optimal und in Echtzeit zu unterstützen und datenbasiert anzuleiten.',
    challenges:
      'Die Herausforderung bestand darin, den Aussendienst effizient zu leiten, um sicherzustellen, dass die richtigen Kunden zum optimalen Zeitpunkt besucht werden. Dies erforderte die Bereitstellung aktueller und relevanter Daten über Kunden sowie die Stärkung der Selbstorganisation der Mitarbeiter.',
    solutions:
      'Die intergierte Kontakt- und Routenplanung schlägt dem Mitarbeiter automatisch Kunden vor, die sie lange nicht mehr besucht haben, in ihrem Bestellverhalten abweichen oder welche sich ebenfalls auf der jeweiligen Arbeitsroute befinden. Ausserdem können Bestellungen direkt via der App mittels integriertem Bestellwesen und Produktekatalog aufgenommen und ausgelöst werden. Alle benötigten Kundendaten (CRM) sind ebenfalls jederzeit verfügbar. Der Aussendienst setzt seine Zeit nun strategisch im Sinne der Unternehmung ein.',
    image: Riwaxique,
  },
  {
    slug: 'chauffeur-app',
    appName: 'Chauffeur App',
    customer: 'RIWAX Chemie AG',
    teaser: 'Digitale Touren, Lieferscheine und Gefahrengut-Dokumente für Chauffeure – direkt ins ERP.',
    tags: ['Logistik & Dispo', 'Mobile App'],
    companyDescription:
      'Produktionsanlagen und eine flächendeckende und kompetente Kundenbetreuung zeichnen die RIWAX Chemie AG seit Jahren als führenden Schweizer Hersteller und Anbieter von Produkten für die Fahrzeugpflege aus.',
    situation:
      'Sämtliche Prozesse in der Logistik fanden auf Papier statt. Die nötigen Informationen zu den Aufträgen wurden im ERP System Abacus ausgedruckt. Logistik wurden manuell organisiert. Mitarbeiter ohne grossen Erfahrungsschatz brauchten lange Einarbeitungszeit.',
    challenges:
      'Die analogen Prozesse in der Logistik/Disposition wurden soweit wie möglich digitalisiert, optimiert und standardisiert, gleichzeitig müssen sie aber einen hohen Grad an Flexibilität offen lassen, der den LKW-Chauffeuren erlaubt, manuelle Anpassungen vorzunehmen: Dazu gehören u.a. Punkte wie individuelle Routengestaltung, Anpassung der Routen, Zusammenfassen und Abändern von Lieferpunkten. Im Hinterkopf steht die Wirtschaftlichkeit der Lösung punkto Komplexität und Lizenzkosten. Die Digitalisierung einer Logistiklösung verlangt zudem, dass die (Gefahrengut)-Dokumente nach gesetzlichen Vorgaben digital im Feld zur Verfügung stehen.',
    solutions:
      'Effizienz im Ablauf, umfassende Rückverfolgbarkeit des gesamten Prozesses (einschliesslich sofortiger Integration von unterzeichneten Lieferscheinen durch Kunden in das ERP), digitale Verfügbarkeit von Transportpapieren und ADR-Papieren, jeweils angepasst an die spezifische Tour. Die Ladeliste für Lastwagen wird automatisch für den Fahrer generiert, und die Tourenoptimierung basiert auf automatisierten Fahrzeiten. Neue Mitarbeiter in der Disposition und Fahrer können ohne umfassende Kenntnisse der Anwendung direkt mit ihrer Arbeit beginnen.',
    image: Chauffeur,
  },
  {
    slug: 'fastspace',
    appName: 'Fastspace',
    customer: 'Espace Real Estate Holding AG',
    teaser: 'Komplett digitale Vermietung: papierlos, schnell und unkompliziert für Mieter und Verwaltung.',
    tags: ['Immobilien', 'Self-Service'],
    companyDescription:
      'Die Espace Real Estate Holding AG (Espace) ist eine Immobilienanlagegesellschaft mit Sitz in Solothurn. Die Gesellschaft investiert in Immobilien in den Kantonen Bern, Solothurn, Aargau, Luzern und Schaffhausen.',
    situation:
      'Der Wunsch war die Immobilienbewirtschaftung ins digitale Zeitalter zu bewegen. Ihre Mieter sollen ganz unkompliziert ohne grosse administrative Hürden eine Wohnung, Lagerräume, Parkplatz, Hobbyraum mieten. Papierlos, schnell, unkompliziert und komplett digital.',
    challenges:
      'Auf Mieterseite: Einbindung in den neuen Prozess, die Zahlungsabwicklungen via  Stripe' +
      ' (nur Zahlungen mit Kreditkarten sind möglich) dies führte zu Einschränken.\n' +
      'Auf Verwaltungsseite: die gesamte Abwicklung (Mietprozess) digital zu lösen, Konzeptionell Prozesse darstellen' +
      ' ohne grosse Erfahrungswerte.',
    solutions:
      'Mehr Flexibilität auf beiden Seiten (Mieter wie auch Vermieter) und schnellere Abwicklungen der Mietprozesse. Die Lösung bietet ausserdem die Möglichkeit kurzfristige Mietverhältnisse abschliessen zu können.',
    image: Fastspace,
  },
  {
    slug: 'm3express',
    appName: 'M3 Express',
    customer: 'Liver IT AG',
    teaser: 'Transparenter Zugang zu Schüttgut, Transport und Mulden – von der Baustelle bis zum Lieferanten.',
    tags: ['Bau', 'Logistik & Dispo', 'Plattform'],
    companyDescription:
      'Liver IT AG – möchte die Digitalisierung im Bauwesen vorantreiben. Transparent und' +
      ' zugänglich Schüttgut, Transport und Mulden anbieten.',
    situation:
      'Ivan – Gründer und  leidenschaftlicher Gartenbauer, war ein frustrierter Jungunternehmer' +
      ' – viele Prozesse waren analog und mussten via Telefon koordiniert werden. Es gab diverse Probleme mit vielen Fehlerquellen, keine Transparenz. ',
    challenges:
      'Auf Lieferantenseite:\n Kies- und Muldentransportunternehmen zu überzeugen mitzumachen.\n' +
      'Auf Kundenseite:\n Für die Nutzer, einen effizienten Prozess abzubilden (von der Baustelle bis zum Lieferanten) diverse Zielgruppen' +
      ' (Gartenbauer, Polier, etc.) mit sämtlichen Bedürfnissen abholen zu können – alle sollen Digital arbeiten. Für einen' +
      ' verbesserten Kommunikations- und Informationsfluss.',
    solutions:
      'Auf Lieferantenseite:\n Flexible Planung von Fahrer und Fahrzeuge, Kommunikationsfluss vom Kunden bis zum eigentlichen' +
      ' Lieferanten zu gewährleisten. Mehr Transparenz. \n' +
      'Auf Kundenseite:\n Digital und in Echtzeit alle Information zur Bestellung überwachen können und alle Informationen zugänglich zu haben.' +
      'M3 Express vereinfacht den digitalen Zugang zu Schüttgut, Transport und Mulden auch für kleine Unternehmungen.',
    image: M3Express,
  },
  {
    slug: 'sutter-app',
    appName: 'Sutter App',
    customer: 'Sutter Bauunternehmung AG',
    teaser: 'Präsenz- und Projektzeiterfassung mit Tagesrapporten, unterstützt durch Plandaten aus dem ERP.',
    tags: ['Bau', 'Rapportierung'],
    companyDescription:
      'Das Leistungsspektrum der Sutter Bauunternehmung AG erstreckt sich über das ganze Bauhauptgewerbe. Sie haben spezialisierte Teams und Maschinen für unterschiedlichste Aufgaben' +
      ' - Sie bieten ein breites Angebot im Hoch- und Tiefbau und sind dabei in vielen Bau-Disziplinen wie zum Beispiel dem Trassebau hochspezialisiert.',
    situation:
      'Die Sutter Bauunternehmung AG wünschte sich eine auf ihr Arbeitsumfeld und Anforderungen optimierte Lösung zur Präsenz- und Projektzeiterfassung für Mitarbeiter und Material. Zusätzlich sollen Tages/Regie-Rapporte erstellt und verteilt werden können.',
    challenges:
      'Die Mitarbeiter im Feld, sollen eine möglichst einfach bedienbare Lösung erhalten. Die Applikation soll durchlässig sein, um einen flexiblen Einsatz zu ermöglichen. Die Auswahl der Projekte, Mitarbeiter, Maschinen und Produkte soll aufgrund der Planung oder Konfiguration vereinfacht resp. unterstützt werden. Keine Maschinenstunden sollen mehr vergessen gehen!',
    solutions:
      'Die Erfassung von Tagesrapporten auf den Baustellen wurde durch die gemeinsam entwickelte Applikation «SutterApp» um ein Vielfaches übersichtlicher und effizienter. Mitarbeiter werden im Rapportierungsprozess unterstützt, da die SutterApp Plandaten aus dem ERP-System ABACUS für Rollen, Inventar, Material und Fremdleistungen vorschlägt. Zusätzlich können Schnellbausteine und die Historie-Funktion genutzt werden.',
    image: Sutter1,
    logo: sutterLogo,
    images: [Sutter1, Sutter2, Sutter3],
  },
  {
    slug: 'my-business',
    appName: 'My Business',
    customer: 'GLB',
    teaser: 'Modulare Work-Management-Plattform mit digitaler Zeiterfassung für über 900 Mitarbeitende.',
    tags: ['Bau', 'Digital Work'],
    companyDescription:
      'Planen, Bauen, Einrichten - das Portfolio der GLB ist vielfältig.' +
      ' Mit Standorten in den Kantonen Bern und Zürich und den rund 900 Mitarbeitenden ist die GLB seit über' +
      ' 50 Jahren die kompetente Partnerin für Lebensräume.\n',
    situation:
      'Bis vor Kurzem erfassten alle Berufsgruppen innerhalb der GLB-Gruppe ihre Daten, sei es Arbeitszeit, Spesen, Absenzen oder Material,' +
      ' auf Papier. Die Überprüfung der Berichte erfolgte zunächst durch den Auftraggeber oder den zuständigen Vorgesetzten,' +
      ' und anschliessend mussten die Daten mühsam manuell im Büro erfasst werden. Für eine zukunftsfähige Lösung,' +
      ' mussten diese Prozesse neu definiert werden.',
    challenges:
      'Die Ansprüche waren umfangreich. Die Intuitive sowie effiziente Bedienung bei möglichst minimalem Schulungsaufwand' +
      ' zählten zu den zentralen Anforderungen. Nur so konnte die Lösung zu einem positiven Nutzererlebnis führen,' +
      ' schliesslich gab es Bedenken bezüglich der Akzeptanz einer digitalen Lösung seitens der Mitarbeitenden.' +
      ' Die Herausforderung bestand darin, dass neue Funktionen nahtlos miteinander funktionieren und optimal auf einem Mobilgerät' +
      ' nutzbar sein müssen.',
    solutions:
      'Die modulare Work Management Plattform «MyBusiness» mit der integrierten digitalen Zeiterfassung «digiZeit» ermöglicht' +
      ' nun für über 900 Mitarbeitende aller Berufsgruppen, eine einfache und bedienerfreundliche Rapportierung,' +
      ' reduziert damit erheblich den Administrativaufwand und schafft zeitnah aktuelle Projektdaten. Neu ' +
      ' sich alle Mitarbeitenden kontextspezifisch miteinander austauschen, alle nötigen Informationen sind' +
      ' an einem Ort für alle Mitglieder verfügbar. Zudem können alle Arbeiten digital dokumentiert und geplant werden.' +
      ' Es ist jederzeit ersichtlich, wer, was bis wann zu erledigen hat. In der zweiten Phase wurde die Kommunikationsplattform' +
      ' um Funktionen wie Kontexträume, Todos und den Ressourcenplaner erweitert.',
    image: GLB1,
    logo: glbLogo,
    images: [GLB1, GLB2, GLB3, GLB4, GLB5, GLB6, GLB7],
  },
  {
    slug: 'porta',
    appName: 'Porta',
    customer: 'Stiftung Tanne',
    teaser: 'Lernsoftware für den Porta Gebärden-Katalog – einfach, spielerisch und barrierearm.',
    tags: ['Soziales', 'Mobile App'],
    companyDescription:
      'Die Tanne, Schweizerische Stiftung für Taubblinde, ist das Kompetenz-Zentrum bei angeborener Hörseh-Behinderung und verwandter mehrfacher ' +
      'Sinnes-Behinderung. Sie begleitet Betroffene in jedem Lebens-Alter',
    situation:
      'Die PORTA App sollte die digitale Abbildung des Porta Gebärden-Katalogs mit Spiel und der Möglichkeit zur Erfassung eigener Gebärden bieten. Eine einfache und intuitive Bedienung stand dabei im Fokus, um auch Personen mit leichten Behinderungen zu erreichen.',
    challenges:
      'Die Usergruppe erstreckt sich von Bezugspersonen bis in die Betreuung. Die Herausforderungen umfassten die Umsetzung einer möglichst einfachen Bedienung und die Realisierung der App zu kostengünstigen Konditionen.',
    solutions:
      'Die PORTA App wurde als umfangreiche Lernsoftware konzipiert, die nicht nur das Erlernen der Portagebärden ermöglicht, sondern auch das Erfassen und Teilen bedürfnisspezifischer Gebärden, benutzerdefinierter Kataloge und Arbeitsblätter. Die App bietet eine einfache Navigation im Gebärdenkatalog, die Möglichkeit zur Erfassung eigener Gebärden mit Video und die Zusammenstellung eigener Kataloge, die mit anderen geteilt werden können. Spielerisch kann das erworbene Wissen mit einem Lernspiel getestet und vertieft werden, und die Gamifikation trägt dazu bei, dass das Lernen Spass macht. Das Ziel war eine kostenbewusste Lösung mit einer intuitiven App, die von jeder Person, idealerweise auch von Menschen mit leichten Behinderungen, bedient werden kann. Die Applikation findet weiter Verbreitung in betreuenden Institutionen, wie auch in heilpädagogischen Schulen.',
    image: Porta1,
    logo: tanneLogo,
    images: [Porta1, Porta2, Porta3, Porta4, Porta5, Porta6, Porta7],
  },
  {
    slug: 'condact',
    appName: 'CondAct',
    customer: 'Stiftung IdéeSport',
    teaser: 'Lern-App, die Coaches den Verhaltenskodex spielerisch vermittelt – in drei Landessprachen.',
    tags: ['Soziales', 'Gamification'],
    companyDescription:
      'Die Stiftung IdéeSport engagiert sich im Bereich der Kinder- und Jugendförderung. Sie nutzt Sport als Mittel der Suchtprävention, der Gesundheitsförderung und der gesellschaftlichen Integration.',
    situation:
      'Die Hallenteams, die mit den Kindern im direkten Kontakt sind, brauchten ein Instrument, um den Verhaltenskodex unkompliziert und konsequent während der Veranstaltungen anzuwenden und die Coaches für das Thema zu schulen und zu sensibilisieren. In allen drei Landessprachen.',
    challenges:
      'Präventive Lerninhalte spielerisch der digital anspruchsvollen Usergruppe (Jugendliche) zu vermitteln.',
    solutions:
      'Die App bietet eine Vielzahl von Lernvideos zum Thema Verhaltenskodex und Risikosituationen für Coaches (Jugendliche) die mit Kindern arbeiten. Nach der Wissensvermittlung gibt es Kontrollfragen. Um das Ganze spielerischer zu gestalten, stehen verschiedene Level zur Verfügung, ein persönlicher Avatar kann erstellt werden, und ein Buddy steht mit hilfreichen Tipps und Tricks zur Seite.',
    image: CondAct1,
    logo: ideeSportLogo,
    images: [
      CondAct1,
      CondAct2,
      CondAct3,
      CondAct4,
      CondAct5,
      CondAct6,
      CondAct7,
      CondAct8,
      CondAct9,
      CondAct10,
      CondAct11,
      CondAct12,
    ],
  },
  {
    slug: 'bienvenu',
    appName: 'Bienvenu',
    customer: 'Stiftung IdéeSport',
    teaser: 'Event-App mit Teilnehmerdaten in Echtzeit und schneller Eingangskontrolle – auch offline.',
    tags: ['Soziales', 'NPO'],
    companyDescription:
      'Die Stiftung IdéeSport engagiert sich im Bereich der Kinder- und Jugendförderung. Sie nutzt Sport als Mittel der Suchtprävention, der Gesundheitsförderung und der gesellschaftlichen Integration.',
    situation:
      'Die manuelle Eingangskontrolle bei Events, die auf Excel basiert, ist fehleranfällig und zeitaufwändig. Dies führt oft zu langen Warteschlangen beim Check-In der Teilnehmer.',
    challenges:
      'Die Übermittlung der Eventdaten an die ERP-Lösung von ABACUS. Offlinenutzung in den Eventhallen mit unzureichender Netzverbindung.',
    solutions:
      'Einfach, bedienbare, intuitive Event-App. Wichtige Teilnehmerdaten in Echtzeit verfügbar. Zb Notfallkontakt, Alter, Schulhaus, usw. Verbesserte Teilnehmer Eingangskontrolle. (Lange Warteschlange werden verhindert Teilnehmer müssen nur noch einmalig erfasst werden, Stammdaten sind hinterlegt und können für zukünftige Events schnell und einfach gesucht werden.',
    image: Bienvenu1,
    logo: ideeSportLogo,
    images: [Bienvenu1, Bienvenu2, Bienvenu3, Bienvenu4, Bienvenu5, Bienvenu6],
  },
  {
    slug: 'my-walo',
    appName: 'myWalo',
    customer: 'WALO Bertschinger AG',
    teaser: 'Anlagen, Dokumente und Prozesse aus diversen Systemen – digital im Feld verfügbar dank μLink.',
    tags: ['Bau', 'Datenintegration'],
    companyDescription:
      'Verankert in der Schweiz und international tätig wird WALO Bertschinger AG als Familienunternehmen in 4. und 5. Generation geführt.' +
      ' Seit über 100 Jahren setzt WALO Bertschinger AG auf die Verbindung von Beständigkeit und Innovation.',
    situation:
      'Die Walo Bertschinger AG Anlagen waren geografisch verstreut, ohne eine klare Übersicht über genaue GPS-Daten,' +
      ' um ihren Standort zu bestimmen. Dokumentationen in den Anlagen gingen verloren, und Zertifikate für' +
      ' Baustellenprüfungen waren schwer zugänglich. Der Prozess zur Eröffnung von Baustellen über die ERP' +
      ' Lösung ABACUS gestaltete sich mühsam und es gab Probleme bei der sachgemässen Verwendung der Maschinen' +
      ' sowie Unklarheiten im Wartungsserviceprozess. Daten aus diversen Umsystemen waren im Feld teils nicht' +
      ' verfügbar und Informationen mussten vom Werkhof eingeholt werden.',
    challenges:
      'Die Herausforderungen bestanden darin, Daten aus diversen Umsystemen zu kombinieren und dort verfügbar zu machen, wo sie gebraucht wurden.' +
      ' Zusätzlich sollte eine klare und kompakte Anzeige von Anlageinformationen im Mobileformat gewährleistet werden.',
    solutions:
      'myWalo kann dank unserem Datahub „mLink“ verschiedene Prozesse digital im Feld anbieten und Daten aus diversen Systemen wie: ABACUS,' +
      ' Digital Bauakte, Visual Planning, Baubit, Kyberna, BLP (Kreditorenworkflow), Sharepoint, DMS und Fleetmanagment' +
      ' zur Verfügung stellen. Die App-Funktionen umfassen die Suche und das Finden von Anlagen, Indexierung, Verfügbarkeit' +
      ' von Dokumenten und Bedienungsanleitungen in verschiedenen Sprachen, Angabe von Maschinenstunden und mehr. Baustellen' +
      ' können direkt eröffnet werden und die Mitarbeitenden haben Zugriff auf persönliche HR-Daten. Jeder Walo Mitarbeiter' +
      ' kann den gesamten Inventarstamm der Walo Bertschinger AG einsehen, wichtige Dokumente jeder Anlage sind jederzeit verfügbar,' +
      ' und bei Anlagen mit Kyburz GPS kann die aktuelle Position sowie die Nutzung bestimmt werden.',
    image: MyWalo1,
    logo: waloLogo,
    images: [MyWalo1, MyWalo2, MyWalo3, MyWalo4],
  },
  {
    slug: 'vademecum',
    appName: 'Vademecum',
    customer: 'Dr. Ines Schlienger',
    teaser: 'Digitale Entwicklungsbegleitung, die Eltern und Fachpersonen verbindet – in über 40 Sprachen.',
    tags: ['Soziales', 'Mobile & Web'],
    companyDescription: 'Dr. Ines Schlienger, Psychologin und Sonderpädagogin, Zürich',
    situation:
      'Die Digitalisierung des VADEMECUM, finanziert durch ein Crowdfunding, war die Antwort auf die wachsende Nachfrage nach einer modernen Anwendung. Ursprünglich als Papier-Version bekannt und beliebt, bestand der Wunsch, VADEMECUM zu digitalisieren, um die Erfassung von Beobachtungen durch Eltern zu vereinfachen. Dies ermöglichte eine direkte Erfassung von Handlungen inklusive Bildmaterial. Die VADEMECUM App und Webapplikation hat das Ziel, das Zusammenwirken von Fachpersonen und Eltern im Bereich der frühen Diagnostik oder Entwicklungsbegleitung bis zu einem Alter von vier Jahren zu unterstützen und zu vereinfachen.',
    challenges:
      'Die Herausforderungen beinhalteten die Notwendigkeit, den Prozess der Papierversion beizubehalten, ihn jedoch gleichzeitig zu digitalisieren. Der Prozess zwischen Administration, Therapeuten und Eltern sollte möglichst einfach gestaltet werden, ebenso wie die Bedienung. Die Lösung sollte kostengünstig sein. Zusätzlich bestand die Schwierigkeit, die Applikation in über 40 Sprachen anbieten zu können.',
    solutions:
      'Die VADEMECUM Mobilapplikation bietet eine einfache Erfassung des Beobachtungskatalogs zu einem bestimmten Zeitpunkt, einschliesslich der Möglichkeit zur Zusatzdokumentation durch Kommentare und Bilder. Die Webapplikation ermöglicht eine umfassende Übersicht über alle Klienten und Beobachtungszeitpunkte. Die einfache Vergleichbarkeit mit verschiedenen Verhaltensmatrizen erleichtert Therapeuten die Identifikation möglicher Entwicklungsschwächen. Insgesamt bietet die Digitalisierung von VADEMECUM eine zeitgemässe Lösung, die den Informationsaustausch zwischen allen Beteiligten verbessert und den Diagnoseprozess bis zum Alter von vier Jahren unterstützt. Aktuell kommt VADEMECUM weltweit, wie beispielsweise in der Mongolei, zum Einsatz.',
    image: Vademecum1,
    images: [
      Vademecum1,
      Vademecum2,
      Vademecum3,
      Vademecum4,
      Vademecum5,
      Vademecum6,
      Vademecum7,
      Vademecum8,
      Vademecum9,
      Vademecum10,
      Vademecum11,
    ],
  },
]

export function getReferenceProject(slug: string): ReferenceProject | undefined {
  return referenceProjects.find((project) => project.slug === slug)
}
