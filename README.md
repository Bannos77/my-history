# MyHistory Antwerpen – Workflow Prototype

**MyHistory Antwerpen** is een interactieve workflow-demo voor mijn afstudeerproject binnen Interface Design.

Het project onderzoekt hoe lokale archieven toegankelijker gemaakt kunnen worden voor een breed publiek. Het volledige concept draait rond een digitale zoektafel waarmee bezoekers lokale geschiedenis kunnen ontdekken via verschillende zoekingangen, zoals personen, adressen, periodes en thema’s.

Deze code-demo werkt één concrete userflow uit. De demo toont hoe een bezoeker van het startscherm naar vrij zoeken gaat, vervolgens op het dashboard terechtkomt, daarna zoekt naar een persoon en uiteindelijk een resultaatpagina te zien krijgt.

De focus van deze demo ligt niet op een volledig werkende databank, maar op het tonen van de **gebruikerservaring**, de **navigatie**, de **visuele stijl** en de **logica achter één uitgewerkte workflow**.

---

## Live demo

De demo staat online via Netlify.

Live versie:  
[MyHistory Antwerpen](https://myhistory-antwerpen.netlify.app/)

GitHub repository:  
[Mijn GitHub](https://github.com/Bannos77/my-history)

---

## Doel van de demo

Het doel van deze demo is om één belangrijke workflow van het concept tastbaar te maken.

De demo laat zien hoe een bezoeker op een laagdrempelige manier door een digitaal archiefsysteem kan navigeren. In deze code-demo wordt niet het volledige concept uitgewerkt, maar één concrete userflow: van het startscherm naar vrij zoeken, vervolgens naar het dashboard, daarna naar persoon zoeken en uiteindelijk naar de resultaatpagina.

De uitgewerkte flow is:

```text
Startscherm → Vrij zoeken → Dashboard → Persoon zoeken → Esteban selecteren/zoeken → Resultaatpagina

---

## Workflow van de demo

Deze prototype-demo toont één uitgewerkte userflow binnen het concept **MyHistory Antwerpen**.

De focus ligt op het testen en tonen van de belangrijkste navigatie: van het startscherm naar vrij zoeken, vervolgens naar het dashboard, daarna naar een persoon zoeken en uiteindelijk naar de resultaatpagina.

Andere onderdelen van het volledige concept, zoals thema zoeken, adres zoeken, periode zoeken, accountpagina’s of begeleiding door een medewerker, zijn onderdeel van het bredere ontwerp maar zitten niet volledig uitgewerkt in deze code-demo.

---

### 1. Startscherm

De gebruiker start op het introductiescherm van **MyHistory Antwerpen**.

Dit scherm dient als eerste kennismaking met de sfeer en het doel van het project. Vanuit dit scherm kan de gebruiker doorgaan naar de zoekervaring.

---

### 2. Vrij zoeken

Na het startscherm kiest de gebruiker voor **vrij zoeken**.

Deze keuze toont dat de gebruiker zelfstandig door het systeem kan navigeren zonder begeleiding van een medewerker. In deze demo wordt vooral deze zelfstandige zoekflow uitgewerkt.

---

### 3. Dashboard

Na de keuze voor vrij zoeken komt de gebruiker op het dashboard.

Het dashboard vormt het centrale punt van de demo. Hier ziet de gebruiker de mogelijke zoekrichtingen binnen het concept, zoals zoeken op persoon, thema, adres of periode.

In deze code-demo is vooral de flow rond **persoon zoeken** verder uitgewerkt.

---

### 4. Persoon zoeken

De gebruiker kiest op het dashboard voor **persoon zoeken**.

Binnen dit scherm kan de gebruiker zoeken naar een persoon. Voor de demo is de zoekflow opgebouwd rond de naam **Esteban**.

De gebruiker kan Esteban selecteren of via de zoekfunctie naar dit resultaat gaan.

---

### 5. Resultaatpagina

Na het selecteren of zoeken van Esteban komt de gebruiker op de resultaatpagina.

Deze pagina toont hoe een gevonden persoon visueel gepresenteerd kan worden binnen de archiefstijl van het project. De resultaatpagina is vormgegeven als een digitaal archiefboek, zodat de informatie minder technisch aanvoelt en meer aansluit bij de sfeer van lokale geschiedenis en archiefonderzoek.

De informatie op deze pagina is bedoeld als voorbeeldinhoud om de werking en sfeer van het prototype te tonen.

---

## Belangrijke opmerking over de demo

Deze demo toont niet het volledige eindconcept, maar één concrete userflow.

De uitgewerkte flow is:

```text
Startscherm → Vrij zoeken → Dashboard → Persoon zoeken → Esteban selecteren/zoeken → Resultaatpagina

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
