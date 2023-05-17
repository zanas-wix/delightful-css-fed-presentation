---
layout: intro
---

# Math functions

min() max() clamp()

<SupportedBrowsers url="https://developer.mozilla.org/en-US/docs/Web/CSS/clamp#browser_compatibility" chrome=79 edge=79 firefox=75 safari=13.1 />

---
layout: iframe
url: https://stackblitz.com/edit/web-platform-2xkfpk?ctl=1&embed=1&hideNavigation=1&file=styles.css
---

---
layout: text-window
---

## Fluid typography with :clamp()

- Math functions can contain `calc()` expressions inside

For example:

- 1rem as a minimum
- 1rem + 5vw as a fluid value
- 2.5rem as a maximum

`rem` component of this equation should be at least 1rem, so that users can scale it effectively

::window::

```css
.fluid-heading {
    font-size: clamp(
        1rem,
        2vw + 1rem,
        2.5rem
    );
}
```

---
layout: iframe
url: https://stackblitz.com/edit/web-platform-hmhjg1?ctl=1&embed=1&hideNavigation=1&file=styles.css
---