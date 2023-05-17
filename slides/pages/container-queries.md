---
layout: intro
---

# Container queries

@container (max-width: 600px) { ... }

<SupportedBrowsers url="https://developer.mozilla.org/en-US/docs/Web/CSS/@container" chrome=105 edge=105 firefox=110 safari=16 />

---
layout: text-window
---

## Usage

- Define which element is treated as the container with `container-type`
- Use the `@container` query to define styles based on the container size

::window::

```css
.card {
    container-type: normal | size | inline-size  
}

.image {
    background-color: blue;
}

@container (max-width: 600px) {
    .image {
        background-color: red;
    }
}
```

<!-- 
The container-type CSS property is used to define the type of containment used in a container query.

size
Establishes a query container for container size queries on both the inline and block axis in both the inline and block dimensions. Applies layout containment, style containment, and size containment to the container.

inline-size
Establishes a query container for dimensional queries on the inline axis of the container. Applies layout, style, and inline-size containment to the element.

normal
The element is not a query container for any container size queries, but remains a query container for container style queries.
 -->


---

## Query container units


- `cqw`: 1% of a query container's width
- `cqh`: 1% of a query container's height
- `cqi`: 1% of a query container's inline size
- `cqb`: 1% of a query container's block size
- `cqmin`: The smaller value of either cqi or cqb
- `cqmax`: The larger value of either cqi or cqb

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries#container_query_length_units

---
layout: iframe
url: http://127.0.0.1:5173/container-queries
---