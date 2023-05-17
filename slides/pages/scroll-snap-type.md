---
layout: intro
---

# Scroll snapping

scroll-snap-type: x mandatory

<SupportedBrowsers url="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type#browser_compatibility" chrome=69 edge=79 firefox=99 safari=11 />

---
layout: text-window
---

## Scroll snap possibilities

- Carousels
- Full screen sections (aka slides)
- Photo galleries
- Mobile-app interfaces (Tiktok clone)

::window::

```css
/* No-JS carousel */
.scroll-container {
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
}

.scroll-item {
    scroll-snap-align: start;
}
```


---
layout: iframe
url: https://stackblitz.com/edit/web-platform-zhuspj?ctl=1&embed=1&hideNavigation=1&file=styles.css
---

