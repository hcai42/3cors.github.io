// 3cors i18n - browser language detection + toggle
(function() {
  var t = {
    // Nav
    'nav.cores': { en: 'Three Cores', de: 'Drei Kerne' },
    'nav.solutions': { en: 'Solutions', de: 'Lösungen' },
    'nav.platform': { en: 'Platform', de: 'Plattform' },
    'nav.principles': { en: 'Principles', de: 'Prinzipien' },
    'nav.process': { en: 'How It Works', de: 'Zusammenarbeit' },
    'nav.contact': { en: 'Contact', de: 'Kontakt' },

    // Hero
    'hero.badge': { en: 'Built on Open Source \u00b7 Self-Hosted \u00b7 GDPR-Ready', de: 'Basiert auf Open Source \u00b7 Self-Hosted \u00b7 DSGVO-konform' },
    'hero.title': { en: 'You Own It.', de: 'Du bestimmst.' },
    'hero.sub': {
      en: 'An AI platform built entirely on open-source technology.<br>Three Cores. Full sovereignty. Zero lock-in.',
      de: 'Eine KI-Plattform, vollständig auf Open-Source-Technologie gebaut.<br>Drei Kerne. Volle Souveränität. Kein Lock-in.'
    },
    'hero.cta1': { en: 'Explore the Framework', de: 'Framework entdecken' },
    'hero.cta2': { en: 'Get in Touch', de: 'Kontakt aufnehmen' },

    // Explainer
    'explainer.title': { en: 'See 3cors in 25 seconds', de: '3cors in 25 Sekunden' },
    'explainer.sub': { en: 'A 25-second look at how 3cors keeps AI under your control.', de: 'Ein 25-Sekunden-Überblick, wie 3cors KI unter Kontrolle hält.' },
    'explainer.note': { en: 'Video in English. Subtitles available in the player.', de: 'Video in englischer Sprache. Deutsche Untertitel sind im Player verfügbar.' },

    // Metrics
    'metrics.providers': { en: 'LLM providers, freely swappable', de: 'LLM-Anbieter, frei austauschbar' },
    'metrics.audit': { en: 'Admin actions are logged and traceable', de: 'Admin-Aktionen werden protokolliert und sind nachvollziehbar' },
    'metrics.lockin': { en: 'Vendor lock-in, by design', de: 'Vendor Lock-in, by Design' },
    'metrics.cost': { en: 'One central place for all AI costs, across providers and teams', de: 'Eine zentrale Stelle für alle KI-Kosten, über Anbieter und Teams hinweg' },

    // Three Cores
    'cores.title': { en: 'Three Cores', de: 'Drei Kerne' },
    'cores.sub': {
      en: 'Every AI application needs three things done right. We made them first-class citizens.',
      de: 'Jede KI-Anwendung braucht drei Dinge richtig umgesetzt. Wir haben sie zu zentralen Bausteinen gemacht.'
    },
    'cores.intelligence': { en: 'Intelligence', de: 'Intelligenz' },
    'cores.intelligence.desc': {
      en: 'Swap LLM providers freely via LiteLLM. 100+ providers supported. No vendor lock-in. Use the model that fits your task and budget.',
      de: 'LLM-Anbieter frei wechseln via LiteLLM. 100+ Anbieter unterstützt. Kein Vendor Lock-in. Nutzen Sie das Modell, das zu Aufgabe und Budget passt.'
    },
    'cores.memory': { en: 'Memory', de: 'Memory' },
    'cores.memory.desc': {
      en: 'Your data, your rules. Full CRUD, one-click export, real deletion. Event-sourced history. Runs on your infrastructure with complete data sovereignty.',
      de: 'Ihre Daten, Ihre Regeln. Volles CRUD, Ein-Klick-Export, echtes Löschen. Event-Sourced History. Läuft auf Ihrer Infrastruktur mit vollständiger Datensouveränität.'
    },
    'cores.billing': { en: 'Billing', de: 'Billing' },
    'cores.billing.desc': {
      en: 'Hard budget limits. Pre-debit token reservation. No surprise costs. Complete audit trail per agent, workflow, and user.',
      de: 'Harte Budgetgrenzen. Pre-Debit Token-Reservierung. Keine überraschenden Kosten. Vollständiger Audit-Trail pro Agent, Workflow und Benutzer.'
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
      de: 'Microservice-basiert. Jeder Service ist unabhängig deploybar. Schema-validierte Ein- und Ausgaben. Event-Sourced State. ACID-Garantien.'
    },
    'platform.deployment': { en: 'Deployment', de: 'Deployment' },
    'platform.deployment.desc': {
      en: 'Self-hosted via Docker Compose. Runs on any Linux VPS. 30+ containers orchestrated. Cloudflare Tunnel for secure access.',
      de: 'Self-Hosted via Docker Compose. Läuft auf jedem Linux VPS. 30+ Container orchestriert. Cloudflare Tunnel für sicheren Zugriff.'
    },
    'platform.auth': { en: 'Auth & Security', de: 'Auth & Sicherheit' },
    'platform.auth.desc': {
      en: 'Keycloak OIDC, SSO Portal, Row-Level Security on all tables. JWT tokens, httpOnly cookies. 100% audit coverage for admin actions.',
      de: 'Keycloak OIDC, SSO-Portal, Row-Level Security auf allen Tabellen. JWT-Tokens, httpOnly-Cookies. 100% Audit-Abdeckung für Admin-Aktionen.'
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
      de: 'Vollständig auf bewährter Open-Source-Technologie gebaut. Keine proprietären Black Boxes im Stack. Herstellerunabhängig by Design.'
    },
    'platform.demo.cta': { en: 'Try the Live Demo', de: 'Live-Demo testen' },
    'platform.demo.note': { en: 'A login is required to access the demo environment.', de: 'Für den Zugang zur Demo-Umgebung ist ein Login erforderlich.' },

    // Principles
    'principles.title': { en: 'Principles', de: 'Prinzipien' },
    'principles.sovereignty': { en: 'Data Sovereignty', de: 'Datensouveränität' },
    'principles.sovereignty.desc': {
      en: 'Full export, real deletion, audit trails. Your data never leaves your control. GDPR-compliant by design, not by afterthought.',
      de: 'Vollständiger Export, echtes Löschen, Audit-Trails. Ihre Daten verlassen nie Ihre Kontrolle. DSGVO-konform by Design, nicht nachträglich.'
    },
    'principles.cost': { en: 'Cost Transparency', de: 'Kostentransparenz' },
    'principles.cost.desc': {
      en: 'Every token is accounted for. Pre-debit ensures you never exceed your budget. Exact cost attribution per operation.',
      de: 'Jeder Token wird erfasst. Pre-Debit stellt sicher, dass Sie Ihr Budget nie überschreiten. Exakte Kostenzuordnung pro Operation.'
    },
    'principles.vendor': { en: 'Vendor Independence', de: 'Herstellerunabhängigkeit' },
    'principles.vendor.desc': {
      en: 'LLM, storage, auth: all swappable. No single provider dependency. Your application survives any vendor decision.',
      de: 'LLM, Storage, Auth: alles austauschbar. Keine Abhängigkeit von einem Anbieter. Ihre Anwendung überlebt jede Anbieter-Entscheidung.'
    },
    'principles.deterministic': { en: 'Deterministic Foundation', de: 'Deterministisches Fundament' },
    'principles.deterministic.desc': {
      en: 'AI operates within deterministic rules. Schema-validated, event-sourced, ACID-backed. Predictable behavior, auditable outcomes.',
      de: 'KI arbeitet innerhalb deterministischer Regeln. Schema-validiert, Event-Sourced, ACID-gestützt. Vorhersagbares Verhalten, auditierbare Ergebnisse.'
    },

    // Solutions
    'solutions.title': { en: 'Solutions', de: 'Lösungen' },
    'solutions.sub': {
      en: 'How organisations can use 3cors to bring AI into their business. Safely and on their own terms.',
      de: 'Wie Unternehmen mit 3cors KI in ihr Geschäft bringen können. Sicher und zu ihren eigenen Bedingungen.'
    },
    'solutions.1.title': { en: 'Intelligent Document Processing', de: 'Intelligente Dokumentenverarbeitung' },
    'solutions.1.desc': {
      en: 'Turn unstructured information (contracts, manuals, reports) into structured, searchable knowledge. Ask questions in natural language and get relevant answers from your own data. Deterministic processing steps keep every result traceable and reproducible, and they bridge outages of individual AI components so the workflow stays reliable.',
      de: 'Verwandeln Sie unstrukturierte Informationen (Verträge, Handbücher, Reports) in strukturiertes, durchsuchbares Wissen. Stellen Sie Fragen in natürlicher Sprache und erhalten Sie relevante Antworten aus Ihren eigenen Daten. Deterministische Verarbeitungsschritte halten jedes Ergebnis nachvollziehbar und reproduzierbar und überbrücken Ausfälle einzelner KI-Komponenten, damit der Ablauf zuverlässig bleibt.'
    },
    'solutions.1.benefit': {
      en: '<strong>Key benefit:</strong> Sensitive documents can remain on your own servers. No data needs to leave your organisation.',
      de: '<strong>Kernvorteil:</strong> Sensible Dokumente können auf Ihren eigenen Servern bleiben. Keine Daten müssen Ihr Unternehmen verlassen.'
    },
    'solutions.2.title': { en: 'AI for Regulated Industries', de: 'KI für regulierte Branchen' },
    'solutions.2.desc': {
      en: 'Finance, insurance, healthcare, and public sector organisations often cannot use cloud-based AI services. 3cors is designed to run on your own infrastructure, helping you meet regulatory requirements.',
      de: 'Finanz-, Versicherungs-, Gesundheits- und öffentliche Organisationen können oft keine cloudbasierten KI-Dienste nutzen. 3cors ist für den Betrieb auf Ihrer eigenen Infrastruktur konzipiert und hilft Ihnen, regulatorische Anforderungen zu erfüllen.'
    },
    'solutions.2.benefit': {
      en: '<strong>Key benefit:</strong> Designed with European data protection regulations in mind. Full audit trails for every operation.',
      de: '<strong>Kernvorteil:</strong> Entwickelt mit europäischen Datenschutzvorschriften im Blick. Vollständige Audit-Trails für jede Operation.'
    },
    'solutions.3.title': { en: 'AI Cost Management', de: 'KI-Kostenmanagement' },
    'solutions.3.desc': {
      en: 'Many organisations struggle with unpredictable AI costs. 3cors provides built-in budget controls that help prevent unexpected charges, with clear reporting on what each task costs.',
      de: 'Viele Unternehmen kämpfen mit unvorhersehbaren KI-Kosten. 3cors bietet eingebaute Budgetkontrollen, die unerwartete Kosten verhindern, mit klarem Reporting über die Kosten jeder Aufgabe.'
    },
    'solutions.3.benefit': {
      en: '<strong>Key benefit:</strong> Set budget limits per team or project. Costs are reserved before each operation runs.',
      de: '<strong>Kernvorteil:</strong> Budgetlimits pro Team oder Projekt setzen. Kosten werden vor jeder Operation reserviert.'
    },
    'solutions.4.title': { en: 'AI Evaluation & Prototyping', de: 'KI-Evaluation & Prototyping' },
    'solutions.4.desc': {
      en: 'Explore different AI approaches without committing to a single provider. Compare results, switch between providers at any time, and find the right fit for your use case.',
      de: 'Erkunden Sie verschiedene KI-Ansätze, ohne sich an einen Anbieter zu binden. Vergleichen Sie Ergebnisse, wechseln Sie jederzeit zwischen Anbietern und finden Sie die passende Lösung für Ihren Anwendungsfall.'
    },
    'solutions.4.benefit': {
      en: '<strong>Key benefit:</strong> No long-term commitments. Switch or combine AI providers as your needs evolve.',
      de: '<strong>Kernvorteil:</strong> Keine langfristigen Bindungen. Wechseln oder kombinieren Sie KI-Anbieter, wenn sich Ihre Anforderungen ändern.'
    },
    'solutions.5.title': { en: 'AI Backend for Software Providers', de: 'KI-Backend für Softwareanbieter' },
    'solutions.5.desc': {
      en: 'Software companies looking to add AI capabilities to their products can use 3cors as a backend layer. It handles user management, billing, and AI integration so they can focus on their core product.',
      de: 'Softwareunternehmen, die KI-Fähigkeiten in ihre Produkte integrieren möchten, können 3cors als Backend nutzen. Es übernimmt Benutzerverwaltung, Billing und KI-Integration, damit sie sich auf ihr Kernprodukt konzentrieren können.'
    },
    'solutions.5.benefit': {
      en: '<strong>Key benefit:</strong> Core infrastructure is ready to use, allowing faster time to market for AI-powered features.',
      de: '<strong>Kernvorteil:</strong> Die Kerninfrastruktur ist einsatzbereit und ermöglicht eine schnellere Time-to-Market für KI-gestützte Features.'
    },
    'solutions.cta': {
      en: 'Every organisation has different needs. <a href="#contact">Get in touch</a> to discuss how 3cors can support your specific requirements.',
      de: 'Jedes Unternehmen hat andere Anforderungen. <a href="#contact">Kontaktieren Sie uns</a>, um zu besprechen, wie 3cors Ihre spezifischen Anforderungen unterstützen kann.'
    },

    // How It Works
    'process.title': { en: 'How We Work Together', de: 'So arbeiten wir zusammen' },
    'process.sub': {
      en: 'From first conversation to a platform you run yourself. Three clear steps, no lock-in along the way.',
      de: 'Vom ersten Gespräch bis zur Plattform, die Sie selbst betreiben. Drei klare Schritte, ohne Lock-in auf dem Weg.'
    },
    'process.1.title': { en: 'Use-Case Conversation', de: 'Use-Case-Gespräch' },
    'process.1.desc': {
      en: 'We map your use case, data, and requirements together. Honest assessment of fit, no obligation.',
      de: 'Wir klären gemeinsam Ihren Anwendungsfall, Ihre Daten und Anforderungen. Ehrliche Einschätzung, unverbindlich.'
    },
    'process.2.title': { en: 'Pilot on Your Infrastructure', de: 'Pilot auf Ihrer Infrastruktur' },
    'process.2.desc': {
      en: '3cors is deployed via Docker Compose on your environment. You test with real data, and your data stays with you the entire time.',
      de: '3cors wird via Docker Compose auf Ihrer Umgebung deployed. Sie testen mit echten Daten, und Ihre Daten bleiben durchgehend bei Ihnen.'
    },
    'process.3.title': { en: 'Run It and Own It', de: 'Betreiben und besitzen' },
    'process.3.desc': {
      en: 'You operate the platform yourself, swap providers anytime, and keep full control of cost and data. We support you as you scale.',
      de: 'Sie betreiben die Plattform selbst, wechseln Anbieter jederzeit und behalten volle Kontrolle über Kosten und Daten. Wir unterstützen Sie beim Skalieren.'
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
    try {
      var p = new URLSearchParams(window.location.search).get('lang');
      if (p) {
        var pl = p.toLowerCase().slice(0, 2);
        if (pl === 'de' || pl === 'en') {
          localStorage.setItem('3cors-lang', pl);
          return pl;
        }
      }
    } catch (e) {}
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

    // Sync explainer video subtitles to the site language
    var vid = document.getElementById('explainer-video');
    if (vid && vid.textTracks) {
      for (var i = 0; i < vid.textTracks.length; i++) {
        var tr = vid.textTracks[i];
        tr.mode = (tr.language === lang) ? 'showing' : 'disabled';
      }
    }
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
