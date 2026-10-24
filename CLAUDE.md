# STRAVIQ — Claude Code Session Guide

## Stack

- **Framework:** React + Vite + Tailwind CSS
- **SSG:** vite-react-ssg (ClientOnly für Three.js/Canvas)
- **UI:** shadcn/ui, Three.js
- **Deploy:** Vercel (GitHub Org: ADMStraviq)
- **Domains:** Strato (straviq.de), Cloudflare (straviq-webdesign.de)
- **Email:** Resend API (RESEND_API_KEY via Vercel env)
- **Analytics:** Umami (ID: 0824fb35-a5ea-4c51-9595-a0b66c3e7093)
- **DB:** Supabase Frankfurt (CRM), Redis via `REDIS_URL` + ioredis (Banner-System)
- **PDF:** Playwright/Chromium + PyMuPDF

---

## Installed Skills (`~/.agents/skills/`)

Aktiviere Skills explizit per Prompt-Prefix. Kombinationen sind erlaubt.

| Skill | Wann verwenden |
|---|---|
| `high-end-visual-design` | Basis für alle neuen Seiten — immer |
| `brandkit` | Farb-/Font-Konsistenz innerhalb eines Projekts |
| `design-taste-frontend` | Wenn ästhetische UI-Entscheidungen getroffen werden |
| `minimalist-ui` | Cleane, reduzierte Layouts (z. B. Landingpages) |
| `industrial-brutalist-ui` | Mutige, kontrastreiche Sections (z. B. Hero, CTA) |
| `stitch-design-taste` | Premium-Ausrichtung, typografische Tiefe |
| `image-to-code` | Screenshot oder Mockup → fertiger Code |
| `imagegen-frontend-web` | KI-Bild-Integration in Desktop-Layouts |
| `imagegen-frontend-mobile` | KI-Bild-Integration in Mobile-Layouts |
| `redesign-existing-projects` | Visuelles Überarbeiten bestehender Komponenten |
| `full-output-enforcement` | Immer vollständigen Code ausgeben — kein „…rest bleibt gleich" |
| `gpt-taste` | GPT-4o-ähnlicher visueller Stil |
| `web-design-guidelines` | Vercel-Designprinzipien (auch DESIGN.md im Root beachten) |

---

## Prompt-Konventionen

### Neue Seite / Komponente bauen

```
Use high-end-visual-design and brandkit skills.
Follow the DESIGN.md in this project for all UI decisions.

Build [Komponente] for [Kundenname].
- Style: [minimalist / brutalist / premium dark / etc.]
- Colors: [Primär], [Sekundär]
- Font: [z. B. Inter, Geist, Playfair Display] (lokal via @fontsource, kein Google Fonts)
- Content: [kurze Beschreibung]
```

### Screenshot → Code

```
Use image-to-code and full-output-enforcement skills.
Rebuild this section in React/Tailwind. [Screenshot einfügen]
Match spacing, typography and layout exactly.
```

### Redesign bestehender Komponente

```
Use redesign-existing-projects and high-end-visual-design skills.
Improve the visual hierarchy of [Datei/Komponente].
Problem: [z. B. "wirkt generisch", "CTA geht unter", "zu viel Padding"]
```

### Stil-spezifisch

```
Use minimalist-ui skill.
Redesign [Section] — remove visual noise, improve whitespace.
```

```
Use industrial-brutalist-ui skill.
Make [Section] bolder — high contrast, strong type, no softness.
```

### Vollständigen Output erzwingen

```
Use full-output-enforcement skill.
Rewrite the entire [Dateiname] — output complete file, no truncation.
```

### Demo für neuen Kunden (Barbershop-Template)

```
Use high-end-visual-design, brandkit, and full-output-enforcement skills.

Copy barbershop template and customize for [Kundenname].
1. Remove all Planity/Wasim/booking references first (grep -rn -i "planity|wasim|booking" src/)
2. Replace with WhatsApp/phone fallbacks
3. Booking page: use Termin.jsx demo-preview variant (Service + Datum + Uhrzeit → Modal "Demo-Vorschau" → WhatsApp)
4. Impressum/Datenschutz: Platzhalter [Inhaber Name] und [E-Mail wird ergänzt] lassen
5. Google Reviews: Philipp liefert deutsche Originalfassungen
```

---

## Hard-Won Gotchas — immer beachten

- **SSG:** Three.js / Canvas immer in `<ClientOnly>` wrappen
- **PDF:** Playwright/Chromium statt wkhtmltopdf; keine CSS transforms auf Bildern
- **Timezone:** `new Date().toLocaleDateString()` statt `toISOString()` (UTC-Bug vor 02:00 CET)
- **Three.js:** Mouse-Events an `window` binden, nicht ans Canvas-Element
- **Resend/MX:** DNS muss auf Cloudflare liegen, nicht Strato
- **react-helmet-async:** auf Version 3.0.0 pinnen via npm overrides
- **API Keys:** Nur Vercel env vars — nie in Code oder `.env` committen
- **Schriften:** Nur lokal einbinden (`npm install @fontsource/<name>`, Imports in `src/fonts.css`) —
  nie Google-Fonts-Links (`fonts.googleapis.com` / `fonts.gstatic.com`) in CSS oder `index.html`
  (DSGVO: Verbindung zu Google ohne Einwilligung). Bei Schriftwechsel auch Familie in
  `tailwind.config.js` und das Preload-Muster in `vite.config.js` anpassen.
- **Banner-System:** Selbst editierbarer Banner läuft über Redis (`REDIS_URL`, ioredis) mit den
  Serverless Functions `/api/banner` und `/api/banner-update` und der env var `ADMIN_PASSWORD` —
  nicht Vercel KV. `VITE_`-Präfix nur für Nicht-Geheimes; `ADMIN_PASSWORD` und `REDIS_URL` nie
  mit `VITE_`-Präfix (landen sonst im Client-Bundle)
- **Fixierte Elemente unten:** Keine Elemente am unteren Bildschirmrand fixieren — iOS Safari
  färbt sonst seine untere Leiste ein
- **Google Maps:** iframe erst nach Klick bzw. Einwilligung laden (Platzhalter-Karte mit
  „Karte laden“), nie beim Seitenaufruf
- **Testskripte/Screenshots:** Nie ins Repo, immer in ein Verzeichnis außerhalb
- **Wartungsmodus:** `maintenanceMode` in der Config; Bypass auf localhost; `/admin` bleibt
  erreichbar; Vorschau-Bypass per `?vorschau=KEY` (`VITE_PREVIEW_KEY` — kein echter Schutz);
  `noindex`, solange der Wartungsmodus aktiv ist; `noindex` beim Go-live entfernen
- **Vor dem Go-live:** `noindex` entfernen (`index.html` und `vercel.json`); `/admin` per Header
  auf `noindex` setzen; Datenschutzerklärung mit dem abgleichen, was die Seite wirklich tut
- **PDF Farben:** Gold-Ton kommt aus CMYK-Druck, nicht aus Veredelung

---

## Ausgabe-Regeln

- Immer vollständigen Code ausgeben (`full-output-enforcement`)
- Keine Erklärungen nach dem Code, es sei denn explizit angefordert
- Keine Platzhalter wie `// ... rest stays the same`
- Änderungen direkt umsetzen, danach committen wenn sinnvoll
- Prüfung nur anfordern wenn neue Dateistruktur oder kritische Entscheidung
