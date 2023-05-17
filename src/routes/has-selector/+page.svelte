<script lang="ts">
	import { fade, slide,  } from 'svelte/transition';
	import AddIcon from './AddIcon.svelte';
	import EmptyIllustration from './EmptyIllustration.svelte';

	let dialogRef: HTMLDialogElement;
	let formRef: HTMLFormElement;

	type FormValues = {
		id: string;
		name: string;
		description: string;
	};

	let formValues: FormValues[] = [];

	const onDialogClose = () => {
		if (dialogRef.returnValue === 'submit') {
			formValues = [...formValues, { ...Object.fromEntries(new FormData(formRef)) as FormValues, id: crypto.randomUUID() }];
			formRef.reset();
		}
	};

	const onDelete = (index: number) => {
		formValues = formValues.filter((_, i) => i !== index);
	};
</script>

<div class="card">
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

	<main in:fade={{ delay: 200, duration: 1000 }}>
		{#each formValues as formValue, i (formValue.id)}
			<div transition:slide|local style="padding-block: 1px">
				<pre style="inline-size: 280px; overflow: auto;">{JSON.stringify(formValue, null, 4)}</pre>
				<button on:click={() => onDelete(i)}>Delete</button>
			</div>
		{:else}
			<EmptyIllustration />
			Nothing to see here
		{/each}
	</main>
</div>

<dialog bind:this={dialogRef} on:close={onDialogClose}>
	<form bind:this={formRef} method="dialog">
		<h3>New product</h3>

		<div class="form-group">
			<label for="name">Name</label>
			<input required type="text" name="name" id="name" placeholder="Name" />
		</div>

		<div class="form-group">
			<label for="description">Description</label>
			<textarea required id="description" name="description" placeholder="Description" />
		</div>

		<button value="submit">Close</button>
	</form>
</dialog>

<style global>
	.card {
		background: var(--base-100);
		border-radius: var(--radius);
		padding: 1rem;
		inline-size: fit-content;
		margin-inline: auto;
		min-inline-size: 40rem;
		box-shadow: var(--shadow-elevation-medium);
	}

	.card header {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
	}

	.card main:not(:has(> svg)) {
		margin-block-start: 1rem;
	}

	.card main:has(svg) {
		margin-inline: auto;
		width: fit-content;
		display: flex;
		flex-direction: column;
		text-align: center;
		padding-block: 2rem;
	}

	@layer components\.button {
		.card .button-group {
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

		button svg {
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

		button svg::before {
			content: ' ';
		}
	}

	@layer components\.forms {
		.form-group {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		.form-group input,
		.form-group textarea {
			border-radius: var(--radius-interactive);
			padding: 0.5rem;
			background: var(--base-100);
			font: inherit;
			border: 1px solid var(--base-500);
		}

		.form-group input:focus-visible,
		.form-group textarea:focus-visible {
			border-color: var(--base-800);
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

	html:has(dialog[open]) {
		transition: filter 0.4s;
		filter: blur(3px) grayscale(1);
	}
</style>
