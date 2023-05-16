---
layout: intro
---

# Cascade layers

<SupportedBrowsers url="https://developer.mozilla.org/en-US/docs/Web/CSS/@layer" chrome=99 edge=99 firefox=97 safari=15.4 />

---
layout: text-window
---

## Cascade concept

- Relevance
- Importance
- Origin
- 🥐 Layers
- Specificity
- Order of appearance

[MDN - Cascade layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers)

::window::

```css{1-3|5-7|9-16|17-19}
/* !important  */
.selector-1 { color: red !important; }
.selector-1 { color: blue; }

/* selector specificity  */
.selector-1 { color: red; }
.selector-1.selector-1 { color: blue; }


/* cascade layers  */
.selector-1 { color: blue; }

@layer base {
	.selector-1 { color: red; }
}

/* order */
.selector-1 { color: red; }
.selector-1 { color: blue; }
```

<!--
- Relevance: Find all the declaration blocks with a selector match for each element.
- Importance: Sort rules based on if they are normal or important. Important styles are those that have the `!important` flag set.
- Origin: Within each of the two importance buckets, sort rules by author, user, or user-agent origin.
- Layers: Within each of the six origin importance bucket, sort by cascade layer. The layer order for normal declarations is from first layer created to last, followed by unlayered normal styles. This order is inverted for important styles, with unlayered important styles having the lowest precedence.
- Specificity: For competing styles in the origin layer with precedence, sort declarations by specificity.
- Order of appearance: When two selectors in the origin layer with precedence have the same specificity, the property value from the last declared selector with the highest specificity wins.
 -->

---
layout: text-window
---

## Cascade layers


::window::

```css {all|1}
@layer base, components, utilities;

@layer base {
	body { font-size: 0.875rem; background-color: pink; }
}

@layer components.buttons {
	.btn { padding: 0.5rem 1rem; }
}

@layer components.forms {
	.form-control { border: 1px solid grey }
}

@layer utilities {
	.m-0 { margin: 0; }
}
```

---
layout: iframe
url: http://127.0.0.1:5173/cascade-layers
---