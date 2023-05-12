---
layout: intro
---

# Cascade layers

<SupportedBrowsers chrome=99 edge=99 firefox=97 safari=15.4 />


---

## What is a cascade layer?


```css
@layer base, components, utilities;

@layer base {
    body { font-size: 0.875rem; background-color: pink; }
}

@layer components {
    .btn { padding: 0.5rem 1rem; }
}

@layer utilities {
  .m-0 { margin: 0; }
}


```

<div class="mt-auto">

[1] https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers

</div>