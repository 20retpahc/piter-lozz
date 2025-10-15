<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card';
	import { superForm } from 'sveltekit-superforms';
	import { categorySchema } from '$lib/formSchema';
	import { Badge } from '$lib/components/ui/badge';
	import X from '@lucide/svelte/icons/x';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import * as Form from '$lib/components/ui/form';
	import z from 'zod';

	type CategoryForm = z.infer<typeof categorySchema>;
	let { data } = $props();

	const form = superForm<CategoryForm>(data.form, {
		validators: zodClient(categorySchema),
		dataType: 'json'
	});

	const { delayed, errors, enhance, form: formData } = form;

	let subCategoryInput = $state('');

	function handleSubCategoryInput(e: Event) {
		const input = e.target as HTMLInputElement;
		const value = input.value;

		if (value.endsWith(' ')) {
			const trimmedWord = value.trim();
			if (trimmedWord && !$formData.subCategories.includes(trimmedWord)) {
				$formData.subCategories = [...$formData.subCategories, trimmedWord];
				subCategoryInput = '';
			}
		}
	}

	function removeSubCategory(index: number) {
		$formData.subCategories = $formData.subCategories.filter((_, i) => i != index);
	}
</script>

<div class="space-y-4 p-8">
	<div>
		<div class="flex items-center justify-between space-y-2">
			<h2 class="text-2xl font-bold tracking-tight capitalize">Add New Category</h2>
		</div>
	</div>
	<form action="" method="POST">
		<Card.Root>
			<Card.Header>
				<Card.Title>Category Information</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="grid grid-cols-2 gap-4">
					<Form.Field {form} name="name">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Category Name</Form.Label>
								<input {...props} type="text" bind:value={$formData.name} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="description">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Description</Form.Label>
								<input {...props} type="text" bind:value={$formData.description} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="subCategories">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Subcategories</Form.Label>
								{#if $formData.subCategories.length > 0}
									<div class="mb-2 flex flex-wrap gap-2">
										{#each $formData.subCategories as subcategory, index}
											<Badge
												>{subcategory}

												<button
													type="button"
													class="ml-1.5 hover:text-red-500"
													onclick={() => removeSubCategory(index)}
												>
													<X class="size-3" />
												</button>
											</Badge>
										{/each}
									</div>
								{/if}
								<Input
									{...props}
									bind:value={subCategoryInput}
									oninput={handleSubCategoryInput}
									placeholder="Type subcategory and press space to add"
								/>
							{/snippet}
						</Form.Control>

						<Form.FieldErrors />
					</Form.Field>
				</div>
				<Button type="submit">Add Category</Button></Card.Content
			>
		</Card.Root>
	</form>
</div>
