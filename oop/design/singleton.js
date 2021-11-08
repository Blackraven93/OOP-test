"use strict";
class Settings {
  #darkMode = false;
  #fontSize = 13;

  getDarkMode() {
    return this.#darkMode;
  }
  getFontSize() {
    return this.#fontSize;
  }

  setDarkMode(darkMode) {
    this.#darkMode = darkMode;
  }
  setFontSize(fontSize) {
    this.#fontSize = fontSize;
  }
}

class FirstPage {
  #settings = new Settings();

  setAndPrintSettings() {
    this.#settings.setDarkMode(true);
    this.#settings.setFontSize(15);
    return this.#settings.getDarkMode() + " " + this.#settings.getFontSize();
  }
}

const test = new FirstPage();

console.time("start");
console.log(test.setAndPrintSettings());
console.timeEnd("start");
