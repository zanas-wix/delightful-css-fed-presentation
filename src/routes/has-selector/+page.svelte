<script lang="ts">
	import AddIcon from "./AddIcon.svelte";

    let dialogRef: HTMLDialogElement
</script>

<header>
    <h3>Toolbar</h3>

    <div class="button-group">
        <button on:click={() => dialogRef.showModal()}>Export</button>
        <button on:click={() => dialogRef.showModal()}>
            <AddIcon />
            New product
        </button>
    </div>
</header>

<dialog bind:this={dialogRef}>
    <form method="dialog">
        <h3>&lt;html&gt; now :has(dialog[open])</h3>
    
        <div class="form-group">
            <label for="name">Name</label>
            <input required type="text" id="name" placeholder="Name" />
        </div>

        <div class="form-group">
            <label for="description">Description</label>
            <textarea required id="description" placeholder="Description"></textarea>
        </div>
        
        <button>Close</button>
    </form>
</dialog>

<style>
    header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        background: var(--base-100);
        border-radius: var(--radius);
        padding: 1rem;
        inline-size: fit-content;
        margin-inline: auto;
        gap: 1rem;
        min-inline-size: 40rem;
        box-shadow: var(--shadow-elevation-medium);
    }

    @layer components\.button {
        .button-group {
            display: flex;
            gap: 0.5rem;
        }
        
        button {
            appearance: none;
            border: none;
            background: transparent;
            color: var(--primary);
            display: inline-flex;
            border-radius: var(--radius-interactive);
            padding-inline: 1rem;
            padding-block: 0.75rem;
            font-size: 1rem;
            gap: 0.5rem;
            font-weight: 600;
            white-space: nowrap;
            align-items: baseline;
        }

        button :global(svg) {
            inline-size: 2em;
            block-size: 2em;
            margin-block: -1em;
            align-self: center;
            line-height: 0px;
            flex: 0 0 auto;
        }

        button:has(svg) {
            background: var(--primary);
            color: var(--base-100);
            padding-inline-start: 0.5rem;
        }

        button :global(svg)::before {
            content: ' '
        }
    }

    @layer components\.forms {
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .form-group :is(input, textarea) {
            border-radius: var(--radius-interactive);
            padding: 0.5rem;
            background: var(--base-100);
            font: inherit;
            border: 1px solid var(--base-500);
        }

        .form-group :is(input, textarea):focus-visible {
            border-color: var(--base-800)
        }

        .form-group:has(:invalid) label::after {
            content: '*';
            color: red;
        }
    }
    
    dialog[open] {
        border: none;
        border-radius: var(--radius);
        box-shadow: var(--shadow-elevation-high);
        inline-size: 40rem;
        padding: 2rem;
        animation: moveIn 500ms;
    }

    @keyframes moveIn {
        from {
            transform: translateY(var(--moveIn-amount, 1rem));
            opacity: 0;
        }
    }

    dialog > form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    dialog > form > *:last-child {
        align-self: end;
        margin-top: 1rem;
    }

    :global(html:has(dialog[open])) {
        transition: filter 0.4s;
        filter: blur(3px) grayscale(1)
    }
</style>