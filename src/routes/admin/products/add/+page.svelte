<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import productSchema from '$lib/formSchema.js';
	import { validators } from 'tailwind-merge';
	import { superForm, fileProxy } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Button } from '$lib/components/ui/button';

	let { data } = $props();
	const form = superForm(data.form, {
		validators: zodClient(productSchema),
		validationMethod: 'auto'
	});

	const { delayed, errors, enhance, form: formData } = form;
	const images = fileProxy(form, 'images');
	const previews = $derived(Array.from($images).map((image) => URL.createObjectURL(image)));
</script>

<div class="space-y-4 p-8">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-2xl font-bold tracking-tight capitalize">Add New Product</h2>
	</div>

	<form action="" method="POST" enctype="multipart/form-data">
		<Card.Root>
			<Card.Header>
				<Card.Title>Product Information</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<Form.Field {form} name="name">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Product Name</Form.Label>
							<input {...props} bind:value={$formData.name} />
						{/snippet}
					</Form.Control>

					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="description">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Description</Form.Label>
							<input {...props} bind:value={$formData.description} />
						{/snippet}
					</Form.Control>

					<Form.FieldErrors />
				</Form.Field>

				<div class="grid grid-cols-2 gap-4">
					<Form.Field {form} name="price">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Price</Form.Label>
								<input {...props} type="number" bind:value={$formData.price} />
							{/snippet}
						</Form.Control>

						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="stock">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Stock</Form.Label>
								<input {...props} type="number" bind:value={$formData.stock} />
							{/snippet}
						</Form.Control>

						<Form.FieldErrors />
					</Form.Field>
				</div>

				<div class="grid grid-cols-2 gap-4">
					<Form.Field {form} name="category">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Category</Form.Label>
								<input {...props} type="text" bind:value={$formData.category} />
							{/snippet}
						</Form.Control>

						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="subCategory">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Sub Category</Form.Label>
								<input {...props} type="text" bind:value={$formData.subCategory} />
							{/snippet}
						</Form.Control>

						<Form.FieldErrors />
					</Form.Field>
				</div>
				<Form.Field {form} name="images">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Images</Form.Label>

							<input
								{...props}
								type="file"
								accept="image/png, image/jpeg,"
								multiple
								bind:files={$images}
							/>
						{/snippet}
					</Form.Control>

					{#if $errors.images}
						{#each $errors.images[0] as error}
							<p class="text-sm font-medium text-destructive">{error}</p>
						{/each}
					{/if}

					<Form.FieldErrors />

					<div class="grid w-fit grid-cols-3 gap-2">
						{#each previews as preview}
							<img src={preview} alt="" class="bottom-2 size-20 rounded-md" />
						{/each}
					</div>
				</Form.Field>
			</Card.Content>
		</Card.Root>
	</form>
</div>
