# MyHistory Antwerpen – Workflow Prototype

**MyHistory Antwerpen** is een interactieve workflow-demo voor mijn afstudeerproject binnen Interface Design.

Het project onderzoekt hoe lokale archieven toegankelijker gemaakt kunnen worden voor een breed publiek. De demo toont hoe een bezoeker via een digitale zoektafel stap voor stap door een begeleid zoeksysteem kan gaan om lokale geschiedenis, personen, adressen, periodes of thema’s te ontdekken.

De focus van deze demo ligt niet op een volledig werkende databank, maar op het tonen van de **gebruikerservaring**, de **navigatie**, de **visuele stijl** en de **logica achter de workflow**.

---

## Live demo

De demo staat online via Netlify.

Live versie:  
`https://myhistory-antwerpen.netlify.app/`

GitHub repository:  
`https://github.com/Bannos77/my-history`

---

## Doel van de demo

Het doel van deze demo is om de belangrijkste workflow van het concept tastbaar te maken.

De demo laat zien hoe een bezoeker op een laagdrempelige manier door een digitaal archiefsysteem kan navigeren. In plaats van een complexe databank rechtstreeks te tonen, wordt de gebruiker begeleid via duidelijke keuzes, visuele schermen en herkenbare zoekcategorieën.

De demo toont vooral:

- hoe de gebruiker door de schermen beweegt;
- hoe de zoekcategorieën werken;
- hoe de archiefstijl wordt toegepast;
- hoe resultaten visueel gepresenteerd worden;
- hoe zelfstandigheid en begeleiding gecombineerd kunnen worden.

---

## Workflow van de demo

De workflow is opgebouwd als een begeleide zoektocht binnen een archiefcontext.

De gebruiker start op een beginscherm en wordt daarna stap voor stap door de interface geleid.

---

### 1. Startscherm

De gebruiker komt eerst op een introductiescherm.

Dit scherm dient als rustige start van de ervaring en introduceert de sfeer van het project. Van hieruit kan de gebruiker verdergaan naar het keuzescherm.

---

### 2. Keuzescherm

Op het keuzescherm kan de gebruiker kiezen tussen verschillende manieren van werken.

De belangrijkste opties zijn:

- zelf zoeken;
- zoeken met begeleiding;
- inloggen;
- verdergaan als gast.

Deze stap maakt duidelijk dat het systeem zowel zelfstandig gebruikt kan worden als met hulp van een medewerker.

---

### 3. Login of gastmodus

De gebruiker kan inloggen via verschillende opties of verdergaan als gast.

Voor de demo ligt de nadruk vooral op het tonen van de mogelijke keuzes, niet op echte accountverwerking.

In een echte toepassing zou deze stap gebruikt kunnen worden om persoonlijke zoekresultaten, uploads of scans aan een gebruiker te koppelen.

---

### 4. Dashboard

Na de login of gastmodus komt de gebruiker op het hoofdscherm van de zoektafel.

Hier kan de gebruiker kiezen tussen verschillende zoekcategorieën:

- Persoon
- Thema
- Adres
- Periode

Deze categorieën vormen de basis van de zoekervaring. Ze helpen de gebruiker om niet verloren te raken in een complex archief, maar via duidelijke ingangen te starten.

---

### 5. Zoekschermen

Elke categorie heeft een eigen zoekscherm.

De gebruiker vult informatie in of kiest filters die passen bij de gekozen zoekrichting.

Voorbeelden:

- Bij **Persoon** kan gezocht worden op naam of familiegegevens.
- Bij **Adres** staat de locatie centraal.
- Bij **Periode** wordt gewerkt met een tijdlijn.
- Bij **Thema** kan gezocht worden op onderwerpen of gebeurtenissen.

De schermen zijn zo ontworpen dat ze toegankelijk blijven voor mensen zonder archiefervaring.

---

### 6. Resultaatschermen

Na het zoeken komt de gebruiker op een resultaatpagina.

Deze pagina is vormgegeven als een digitaal archiefboek. De resultaten worden niet alleen als droge data getoond, maar als een leesbare en visuele ervaring.

De gebruiker krijgt informatie, verwijzingen naar bronnen, mogelijke scans en extra context.

De resultaatschermen gebruiken een vaste structuur zodat de gebruiker snel begrijpt waar informatie te vinden is.

---

### 7. Accountomgeving

Naast de zoekworkflow bevat de demo ook een accountomgeving.

Deze omgeving toont hoe persoonlijke onderdelen later kunnen werken.

Voorbeelden hiervan zijn:

- accountgegevens;
- uploads en scans;
- familie of stamboom;
- instellingen.

Omdat dit een prototype is, worden deze onderdelen vooral visueel en functioneel gesimuleerd.

---

## Gemaakt met Vite.js

Deze demo is opgebouwd met **Vite.js**.

Vite wordt gebruikt als ontwikkelomgeving omdat het snel opstart, makkelijk werkt met HTML, CSS en JavaScript, en direct wijzigingen toont in de browser tijdens het coderen.

De demo gebruikt vooral:

- HTML voor de structuur van de schermen;
- CSS voor de volledige visuele uitwerking;
- JavaScript voor de navigatie tussen de schermen;
- afbeeldingen, iconen en texturen voor de archiefstijl.

---

## Project lokaal openen

Om het project lokaal te openen, moeten eerst de dependencies geïnstalleerd worden.

```bash
npm install
