<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { productSchema } from '$lib/formSchema.js';
	import { superForm, fileProxy } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Button } from '$lib/components/ui/button';
	import Loader2 from '@lucide/svelte/icons/loader-2';

	let { data } = $props();
	// 2. formSchema를 사용하고, 타입 캐스팅(as any)을 제거합니다.
	// Superforms는 load 함수에서 전달받은 스키마 구조를 사용하므로,
	// zodClient에는 formSchema의 구조를 전달합니다.
	const form = superForm(data.form, {
		validators: zodClient(productSchema), // 폼 구조를 가진 formSchema 사용
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
								<input {...props} type="number" bind:value={$formData.category} />
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
								accept="image/png, image/jpeg"
								bind:files={$images}
								type="file"
								multiple
							/>
						{/snippet}
					</Form.Control>
					{#if $errors.images}
						{#each $errors.images._errors as error}
							<p class="text-red-600">{error}</p>
						{/each}
					{/if}

					<Form.FieldErrors />
				</Form.Field>
				<div class="grid w-fit grid-cols-3 gap-2">
					{#each previews as preview}
						<img src={preview} alt="" class="size-20 rounded-md border-2" />
					{/each}
				</div>

				<Button>
					{#if $delayed}
						<Loader2 class="size-6 animate-spin" />
					{:else}Add Product
					{/if}</Button
				>
			</Card.Content>
		</Card.Root>
	</form>
</div>
