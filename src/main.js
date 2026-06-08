import './style.css';

/* STARTSCHERM */
const startScreen = document.getElementById("startScreen");
const instructionText = document.getElementById("instructionText");
const languageButtons = document.querySelectorAll(".language-button");

const translations = {
  nl: "Raak het scherm aan om<br>verder te gaan",
  fr: "Touchez l'écran pour<br>continuer",
  en: "Touch the screen to<br>continue",
  de: "Berühren Sie den Bildschirm,<br>um fortzufahren"
};

if (languageButtons.length > 0 && instructionText) {
  languageButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      const selectedLanguage = button.dataset.lang;
      instructionText.innerHTML = translations[selectedLanguage];

      languageButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });
  });
}

if (startScreen) {
  startScreen.addEventListener("click", () => {
    window.location.href = "choice.html";
  });
}

/* ALGEMENE LINK-KNOPPEN */
const clickableButtons = document.querySelectorAll(
  ".choice-card, .dashboard-card, .js-link"
);

clickableButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextPage = button.dataset.link;

    if (!nextPage) {
      console.log("Geen data-link gevonden op deze knop.");
      return;
    }

    button.classList.add("selected");

    setTimeout(() => {
      window.location.href = nextPage;
    }, 250);
  });
});

/* ALFABET TABS OP PERSOON SCHERM */
const alphabetTabs = document.querySelectorAll(".alphabet-tab");
const nameList = document.getElementById("nameList");

const namesByLetter = {
  A: ["Ana G.", "Anaïs J.", "Ann R.", "Anne R."],
  B: ["Baptiste D.", "Bert V.", "Brigitte M."],
  C: ["Camille R.", "Cédric L.", "Clara V."],
  D: ["Diego M.", "Dina S.", "Dirk A."],
  E: ["Elena P.", "Emiel V.", "Esteban M.", "Eva R."],
  F: ["Fanny D.", "Felix M.", "François L."],
  G: ["Gabriel T.", "Gisèle R.", "Gust M."],
  H: ["Hanna V.", "Hugo D."],
  I: ["Ida M.", "Ines R."],
  J: ["Jan P.", "Jules V."],
  K: ["Karel S.", "Katrien D."],
  L: ["Landré", "Louis M."],
  M: ["Mélanie F. L.", "Marie D."],
  N: ["Nora V."],
  O: ["Oscar M."],
  P: ["Pauline R."],
  Q: [],
  R: ["René V.", "Rita M."],
  S: ["Sara D.", "Simon L."],
  T: ["Theo R."],
  U: [],
  V: ["Victor A."],
  W: ["Willem D."],
  X: [],
  Y: [],
  Z: ["Zoë M."]
};

function renderNameList(letter) {
  if (!nameList) return;

  const names = namesByLetter[letter] || [];

  nameList.innerHTML = `<h2>“${letter}”</h2>`;

  if (names.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.classList.add("empty-result");
    emptyMessage.textContent = "Geen resultaten";
    nameList.appendChild(emptyMessage);
    return;
  }

  names.forEach((name) => {
    const button = document.createElement("button");

    button.classList.add("name-result", "js-link");
    button.dataset.link = "person-result.html";
    button.textContent = name;

    button.addEventListener("click", () => {
      button.classList.add("selected");

      setTimeout(() => {
        window.location.href = button.dataset.link;
      }, 250);
    });

    nameList.appendChild(button);
  });
}

alphabetTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const letter = tab.dataset.letter;

    if (personSearchInput) {
      personSearchInput.value = "";
    }

    alphabetTabs.forEach((item) => {
      item.classList.remove("active");
    });

    tab.classList.add("active");
    renderNameList(letter);
  });
});

/* ZOEKBALK PERSOON */
const personSearchInput = document.getElementById("personSearchInput");

if (personSearchInput) {
  personSearchInput.addEventListener("input", () => {
    const searchValue = personSearchInput.value.toLowerCase().trim();

    if (!nameList) return;

    /* Als gebruiker typt, mag geen alfabetletter actief blijven */
    alphabetTabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    /* Als zoekveld leeg is, ga terug naar A */
    if (searchValue === "") {
      const firstTab = document.querySelector('.alphabet-tab[data-letter="A"]');

      if (firstTab) {
        firstTab.classList.add("active");
      }

      renderNameList("A");
      return;
    }

    const allNames = Object.values(namesByLetter).flat();

    const filteredNames = allNames.filter((name) => {
      return name.toLowerCase().includes(searchValue);
    });

    nameList.innerHTML = "";

    if (filteredNames.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.classList.add("empty-result");
      emptyMessage.textContent = "Geen resultaten";
      nameList.appendChild(emptyMessage);
      return;
    }

    filteredNames.forEach((name) => {
      const button = document.createElement("button");

      button.classList.add("name-result", "js-link");
      button.dataset.link = "person-result.html";
      button.textContent = name;

      button.addEventListener("click", () => {
        button.classList.add("selected");

        setTimeout(() => {
          window.location.href = button.dataset.link;
        }, 250);
      });

      nameList.appendChild(button);
    });
  });
}