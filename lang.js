// 3cors i18n - browser language detection + toggle
(function() {
  var t = {
    // Nav
    'nav.mission': { en: 'Mission', de: 'Leitbild' },
    'nav.cores': { en: 'Three Cores', de: 'Drei Kerne' },
    'nav.solutions': { en: 'Solutions', de: 'Loesungen' },
    'nav.platform': { en: 'Platform', de: 'Plattform' },
    'nav.principles': { en: 'Principles', de: 'Prinzipien' },
    'nav.contact': { en: 'Contact', de: 'Kontakt' },

    // Hero
    'hero.badge': { en: 'Built on Open Source \u00b7 Self-Hosted \u00b7 GDPR-Ready', de: 'Basiert auf Open Source \u00b7 Self-Hosted \u00b7 DSGVO-konform' },
    'hero.title': { en: 'You Own It.', de: 'Du bestimmst.' },
    'hero.sub': {
      en: 'An AI platform built entirely on open-source technology.<br>Three Cores. Full sovereignty. Zero lock-in.',
      de: 'Eine KI-Plattform, vollstaendig auf Open-Source-Technologie gebaut.<br>Drei Kerne. Volle Souveraenitaet. Kein Lock-in.'
    },
    'hero.cta1': { en: 'Explore the Framework', de: 'Framework entdecken' },
    'hero.cta2': { en: 'Get in Touch', de: 'Kontakt aufnehmen' },

    // Mission / Leitbild
    'mission.title': { en: 'Our Mission', de: 'Unser Leitbild' },
    'mission.lead': {
      en: '<strong>You Own It.</strong> We build AI software that belongs to the people who use it. Not to us, not to a cloud provider, not to a model.',
      de: '<strong>Du bestimmst.</strong> Wir bauen KI-Software, die den Menschen gehoert, die sie nutzen. Nicht uns, keinem Cloud-Anbieter, keinem Modell.'
    },
    'mission.mandate': { en: 'Our Mandate', de: 'Unser Auftrag' },
    'mission.mandate.desc': {
      en: 'We give organisations back control over their AI. Software they can own, understand, and leave at any time. Data sovereignty is the foundation, not an add-on.',
      de: 'Wir geben Unternehmen die Kontrolle ueber ihre KI zurueck. Software, die sie besitzen, verstehen und jederzeit verlassen koennen. Datensouveraenitaet ist das Fundament, kein Zusatz.'
    },
    'mission.vision': { en: 'Our Vision', de: 'Unsere Vision' },
    'mission.vision.desc': {
      en: 'A future where organisations use AI without making themselves dependent. We are the proof that powerful AI and full sovereignty are not a contradiction.',
      de: 'Eine Zukunft, in der Unternehmen KI nutzen, ohne sich abhaengig zu machen. Wir sind der Beweis, dass leistungsfaehige KI und volle Souveraenitaet kein Widerspruch sind.'
    },
    'mission.measure': {
      en: '<strong>Our measure:</strong> has the organisation that uses our software gained more control, more clarity, and more time for what matters? If yes, we have done our job well.',
      de: '<strong>Unser Massstab:</strong> Hat das Unternehmen, das unsere Software nutzt, mehr Kontrolle, mehr Klarheit und mehr Zeit fuer das Wesentliche gewonnen? Wenn ja, haben wir unsere Arbeit gut gemacht.'
    },

    // Three Cores
    'cores.title': { en: 'Three Cores', de: 'Drei Kerne' },
    'cores.sub': {
      en: 'Every AI application needs three things done right. We made them first-class citizens.',
      de: 'Jede KI-Anwendung braucht drei Dinge richtig umgesetzt. Wir haben sie zu zentralen Bausteinen gemacht.'
    },
    'cores.intelligence': { en: 'Intelligence', de: 'Intelligenz' },
    'cores.intelligence.desc': {
      en: 'Swap LLM providers freely via LiteLLM. 100+ providers supported. No vendor lock-in. Use the model that fits your task and budget.',
      de: 'LLM-Anbieter frei wechseln via LiteLLM. 100+ Anbieter unterstuetzt. Kein Vendor Lock-in. Nutzen Sie das Modell, das zu Aufgabe und Budget passt.'
    },
    'cores.memory': { en: 'Memory', de: 'Memory' },
    'cores.memory.desc': {
      en: 'Your data, your rules. Full CRUD, one-click export, real deletion. Event-sourced history. Runs on your infrastructure with complete data sovereignty.',
      de: 'Ihre Daten, Ihre Regeln. Volles CRUD, Ein-Klick-Export, echtes Loeschen. Event-Sourced History. Laeuft auf Ihrer Infrastruktur mit vollstaendiger Datensouveraenitaet.'
    },
    'cores.billing': { en: 'Billing', de: 'Billing' },
    'cores.billing.desc': {
      en: 'Hard budget limits. Pre-debit token reservation. No surprise costs. Complete audit trail per agent, workflow, and user.',
      de: 'Harte Budgetgrenzen. Pre-Debit Token-Reservierung. Keine ueberraschenden Kosten. Vollstaendiger Audit-Trail pro Agent, Workflow und Benutzer.'
    },

    // Platform
    'platform.title': { en: 'The Platform', de: 'Die Plattform' },
    'platform.sub': {
      en: 'A deterministic foundation with AI as a managed tenant, not the other way around.',
      de: 'Ein deterministisches Fundament mit KI als gemanagtem Tenant, nicht umgekehrt.'
    },
    'platform.architecture': { en: 'Architecture', de: 'Architektur' },
    'platform.architecture.desc': {
      en: 'Microservice-based. Each service is independently deployable. Schema-validated inputs and outputs. Event-sourced state. ACID guarantees.',
      de: 'Microservice-basiert. Jeder Service ist unabhaengig deploybar. Schema-validierte Ein- und Ausgaben. Event-Sourced State. ACID-Garantien.'
    },
    'platform.deployment': { en: 'Deployment', de: 'Deployment' },
    'platform.deployment.desc': {
      en: 'Self-hosted via Docker Compose. Runs on any Linux VPS. 30+ containers orchestrated. Cloudflare Tunnel for secure access.',
      de: 'Self-Hosted via Docker Compose. Laeuft auf jedem Linux VPS. 30+ Container orchestriert. Cloudflare Tunnel fuer sicheren Zugriff.'
    },
    'platform.auth': { en: 'Auth & Security', de: 'Auth & Sicherheit' },
    'platform.auth.desc': {
      en: 'Keycloak OIDC, SSO Portal, Row-Level Security on all tables. JWT tokens, httpOnly cookies. 100% audit coverage for admin actions.',
      de: 'Keycloak OIDC, SSO-Portal, Row-Level Security auf allen Tabellen. JWT-Tokens, httpOnly-Cookies. 100% Audit-Abdeckung fuer Admin-Aktionen.'
    },
    'platform.tech': { en: 'Tech Stack', de: 'Tech Stack' },
    'platform.services': { en: 'Services', de: 'Services' },
    'platform.services.desc': {
      en: 'Foundation (Billing & LLM Gateway), Interviewer (AI Conversations), CorIM Builder (Spec Wizard), Auth Gateway (SSO Portal).',
      de: 'Foundation (Billing & LLM-Gateway), Interviewer (KI-Konversationen), CorIM Builder (Spec Wizard), Auth Gateway (SSO-Portal).'
    },
    'platform.oss': { en: 'Open-Source-Based', de: 'Open-Source-basiert' },
    'platform.oss.desc': {
      en: 'Built entirely on proven open-source technology. No proprietary black boxes in the stack. Vendor-independent by design.',
      de: 'Vollstaendig auf bewaehrter Open-Source-Technologie gebaut. Keine proprietaeren Black Boxes im Stack. Herstellerunabhaengig by Design.'
    },

    // Principles
    'principles.title': { en: 'Principles', de: 'Prinzipien' },
    'principles.sovereignty': { en: 'Data Sovereignty', de: 'Datensouveraenitaet' },
    'principles.sovereignty.desc': {
      en: 'Full export, real deletion, audit trails. Your data never leaves your control. GDPR-compliant by design, not by afterthought.',
      de: 'Vollstaendiger Export, echtes Loeschen, Audit-Trails. Ihre Daten verlassen nie Ihre Kontrolle. DSGVO-konform by Design, nicht nachtraeglich.'
    },
    'principles.cost': { en: 'Cost Transparency', de: 'Kostentransparenz' },
    'principles.cost.desc': {
      en: 'Every token is accounted for. Pre-debit ensures you never exceed your budget. Exact cost attribution per operation.',
      de: 'Jeder Token wird erfasst. Pre-Debit stellt sicher, dass Sie Ihr Budget nie ueberschreiten. Exakte Kostenzuordnung pro Operation.'
    },
    'principles.vendor': { en: 'Vendor Independence', de: 'Herstellerunabhaengigkeit' },
    'principles.vendor.desc': {
      en: 'LLM, storage, auth: all swappable. No single provider dependency. Your application survives any vendor decision.',
      de: 'LLM, Storage, Auth: alles austauschbar. Keine Abhaengigkeit von einem Anbieter. Ihre Anwendung ueberlebt jede Anbieter-Entscheidung.'
    },
    'principles.deterministic': { en: 'Deterministic Foundation', de: 'Deterministisches Fundament' },
    'principles.deterministic.desc': {
      en: 'AI operates within deterministic rules. Schema-validated, event-sourced, ACID-backed. Predictable behavior, auditable outcomes.',
      de: 'KI arbeitet innerhalb deterministischer Regeln. Schema-validiert, Event-Sourced, ACID-gestuetzt. Vorhersagbares Verhalten, auditierbare Ergebnisse.'
    },

    // Solutions
    'solutions.title': { en: 'Solutions', de: 'Loesungen' },
    'solutions.sub': {
      en: 'How organisations can use 3cors to bring AI into their business. Safely and on their own terms.',
      de: 'Wie Unternehmen mit 3cors KI in ihr Geschaeft bringen koennen. Sicher und zu ihren eigenen Bedingungen.'
    },
    'solutions.1.title': { en: 'Intelligent Document Processing', de: 'Intelligente Dokumentenverarbeitung' },
    'solutions.1.desc': {
      en: 'Turn unstructured information (contracts, manuals, reports) into structured, searchable knowledge. Ask questions in natural language and get relevant answers from your own data.',
      de: 'Verwandeln Sie unstrukturierte Informationen (Vertraege, Handbuecher, Reports) in strukturiertes, durchsuchbares Wissen. Stellen Sie Fragen in natuerlicher Sprache und erhalten Sie relevante Antworten aus Ihren eigenen Daten.'
    },
    'solutions.1.benefit': {
      en: '<strong>Key benefit:</strong> Sensitive documents can remain on your own servers. No data needs to leave your organisation.',
      de: '<strong>Kernvorteil:</strong> Sensible Dokumente koennen auf Ihren eigenen Servern bleiben. Keine Daten muessen Ihr Unternehmen verlassen.'
    },
    'solutions.2.title': { en: 'AI for Regulated Industries', de: 'KI fuer regulierte Branchen' },
    'solutions.2.desc': {
      en: 'Finance, insurance, healthcare, and public sector organisations often cannot use cloud-based AI services. 3cors is designed to run on your own infrastructure, helping you meet regulatory requirements.',
      de: 'Finanz-, Versicherungs-, Gesundheits- und oeffentliche Organisationen koennen oft keine cloudbasierten KI-Dienste nutzen. 3cors ist fuer den Betrieb auf Ihrer eigenen Infrastruktur konzipiert und hilft Ihnen, regulatorische Anforderungen zu erfuellen.'
    },
    'solutions.2.benefit': {
      en: '<strong>Key benefit:</strong> Designed with European data protection regulations in mind. Full audit trails for every operation.',
      de: '<strong>Kernvorteil:</strong> Entwickelt mit europaeischen Datenschutzvorschriften im Blick. Vollstaendige Audit-Trails fuer jede Operation.'
    },
    'solutions.3.title': { en: 'AI Cost Management', de: 'KI-Kostenmanagement' },
    'solutions.3.desc': {
      en: 'Many organisations struggle with unpredictable AI costs. 3cors provides built-in budget controls that help prevent unexpected charges, with clear reporting on what each task costs.',
      de: 'Viele Unternehmen kaempfen mit unvorhersehbaren KI-Kosten. 3cors bietet eingebaute Budgetkontrollen, die unerwartete Kosten verhindern, mit klarem Reporting ueber die Kosten jeder Aufgabe.'
    },
    'solutions.3.benefit': {
      en: '<strong>Key benefit:</strong> Set budget limits per team or project. Costs are reserved before each operation runs.',
      de: '<strong>Kernvorteil:</strong> Budgetlimits pro Team oder Projekt setzen. Kosten werden vor jeder Operation reserviert.'
    },
    'solutions.4.title': { en: 'AI Evaluation & Prototyping', de: 'KI-Evaluation & Prototyping' },
    'solutions.4.desc': {
      en: 'Explore different AI approaches without committing to a single provider. Compare results, switch between providers at any time, and find the right fit for your use case.',
      de: 'Erkunden Sie verschiedene KI-Ansaetze, ohne sich an einen Anbieter zu binden. Vergleichen Sie Ergebnisse, wechseln Sie jederzeit zwischen Anbietern und finden Sie die passende Loesung fuer Ihren Anwendungsfall.'
    },
    'solutions.4.benefit': {
      en: '<strong>Key benefit:</strong> No long-term commitments. Switch or combine AI providers as your needs evolve.',
      de: '<strong>Kernvorteil:</strong> Keine langfristigen Bindungen. Wechseln oder kombinieren Sie KI-Anbieter, wenn sich Ihre Anforderungen aendern.'
    },
    'solutions.5.title': { en: 'AI Backend for Software Providers', de: 'KI-Backend fuer Softwareanbieter' },
    'solutions.5.desc': {
      en: 'Software companies looking to add AI capabilities to their products can use 3cors as a backend layer. It handles user management, billing, and AI integration so they can focus on their core product.',
      de: 'Softwareunternehmen, die KI-Faehigkeiten in ihre Produkte integrieren moechten, koennen 3cors als Backend nutzen. Es uebernimmt Benutzerverwaltung, Billing und KI-Integration, damit sie sich auf ihr Kernprodukt konzentrieren koennen.'
    },
    'solutions.5.benefit': {
      en: '<strong>Key benefit:</strong> Core infrastructure is ready to use, allowing faster time to market for AI-powered features.',
      de: '<strong>Kernvorteil:</strong> Die Kerninfrastruktur ist einsatzbereit und ermoeglichst eine schnellere Time-to-Market fuer KI-gestuetzte Features.'
    },
    'solutions.cta': {
      en: 'Every organisation has different needs. <a href="#contact">Get in touch</a> to discuss how 3cors can support your specific requirements.',
      de: 'Jedes Unternehmen hat andere Anforderungen. <a href="#contact">Kontaktieren Sie uns</a>, um zu besprechen, wie 3cors Ihre spezifischen Anforderungen unterstuetzen kann.'
    },

    // Contact
    'contact.title': { en: 'Get in Touch', de: 'Kontakt aufnehmen' },
    'contact.sub': {
      en: "Interested in 3cors? We're looking for early adopters and partners.",
      de: 'Interesse an 3cors? Wir suchen Early Adopters und Partner.'
    },

    // Footer
    'footer.copy': { en: '\u00a9 2026 HCAI42. All rights reserved.', de: '\u00a9 2026 HCAI42. Alle Rechte vorbehalten.' }
  };

  function getLang() {
    var stored = localStorage.getItem('3cors-lang');
    if (stored) return stored;
    var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return nav.startsWith('de') ? 'de' : 'en';
  }

  function setLang(lang) {
    localStorage.setItem('3cors-lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] && t[key][lang]) {
        el.innerHTML = t[key][lang];
      }
    });
    // Update toggle button text
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'de' ? 'EN' : 'DE';
  }

  // Init on DOM ready
  function init() {
    setLang(getLang());
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function() {
        var current = localStorage.getItem('3cors-lang') || getLang();
        setLang(current === 'de' ? 'en' : 'de');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.setLang = setLang;
})();
