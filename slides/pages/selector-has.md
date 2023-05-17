---
layout: intro
---

# Selector :has()

<SupportedBrowsers url="https://developer.mozilla.org/en-US/docs/Web/CSS/:has" chrome=105 edge=105 firefox=103 safari=15.4 />

---

## Browser support

- Landed in Chrome 105, Edge 105 (September 2022)
- Landed in Safari 15.4 (March 2023)
- Available on Firefox under an experimental flag

---
layout: text-window
---

## Possibilities with :has

- Dark-mode toggles
- Styling elements based on their children
- Previous sibling selectors


::window::

```css
html:has(input[name="dark-mode-toggle"]:checked) {
    --body-color: black;
    --text-color: white;
}

.box:has(> .premium-button) {
    box-shadow: 0 0 4px var(--premium-color);
}

/* Selects all previous siblings elements  */
/* https://tobiasahlin.com/blog/previous-sibling-css-has/ */
.box:has(~ .midpoint) {
  width: 40px;
  height: 40px;
}
```

---
layout: iframe
url: http://127.0.0.1:5173/has-selector
---

---
layout: iframe
url: https://stackblitz.com/edit/web-platform-xdcyh5?ctl=1&embed=1&file=styles.css&hideNavigation=1
---

