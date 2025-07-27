# 🚀 WebdriverIO + Mocha E2E Automation Framework

A simple and maintainable end-to-end (E2E) automation framework using [WebdriverIO](https://webdriver.io/) and [Mocha](https://mochajs.org/).

---

## 🔧 Tech Stack

* [WebdriverIO](https://webdriver.io/)
* [Mocha](https://mochajs.org/)
* [Node.js](https://nodejs.org/)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/webdriverio-mocha-tests.git
cd webdriverio-mocha-tests
```

### 2️⃣ Install Dependencies

```bash
npm install
```

---

## ▶️ Running Tests

### Run All Tests

```bash
npx wdio run wdio.conf.js
```

### Run via npm

```bash
npm test
```

### Run Specific Tagged Test

```bash
npx wdio run wdio.conf.js --mochaOpts.grep="@login_flow"
```

---

## 📁 Folder Structure

```
webdriverio-mocha-tests/
├── tests/
│   ├── specs/               # Test specs (Mocha)
│   ├── pages/         # Page Object Model files
│   └── helpers/             # Reusable utilities/constants
├── wdio.conf.js             # WDIO config file
├── package.json
└── README.md
```

---

## 💡 Tips

* Use the `--mochaOpts.grep="tag"` option to run specific tests.
* Add your constants in `helpers/constants.js` and import where needed.
* Screenshots for failures will be stored inside `./errorScreenshots` folder.

---

## 📚 Useful References

* 🧪 [WDIO Expect API Docs](https://webdriver.io/docs/api/expect-webdriverio)
* 🧪 [WDIO Browser Commands](https://webdriver.io/docs/api/browser)
* 🧪 [WDIO Element Commands](https://webdriver.io/docs/api/element/)
* ⚙️ [WDIO Config Guide](https://webdriver.io/docs/configurationfile)
* 🎯 [CSS Selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors#combinators)

---

## 📌 Notes

* Make sure Chrome is installed on your system.
* `chromedriver` must match your local Chrome version.
* Avoid using headless mode if visual validation (like screenshots) is needed.

---
