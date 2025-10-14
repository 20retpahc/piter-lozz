<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Table from '$lib/components/ui/table/index.js';

	let showProducts = $state(false);
</script>

<div class="space-y-4 p-8 pt-6">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-2xl font-bold tracking-tight capitalize">Products</h2>
		<div class="flex items-center space-x-2">
			<Input class="w-[150px] lg:w-[250px]" placeholder="Search products.." />
			<Button href="products/add">add product</Button>
		</div>
	</div>

	{#if showProducts}
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head class="w-[100px]">ID</Table.Head>
					<Table.Head>image</Table.Head>
					<Table.Head>name</Table.Head>
					<Table.Head>Category</Table.Head>
					<Table.Head>Sub category</Table.Head>
					<Table.Head>Price</Table.Head>
					<Table.Head>Stock</Table.Head>
					<Table.Head class="text-right">Action</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell class="font-medium">1</Table.Cell>
					<Table.Cell>
						<img src="../../assets/favicon.png" alt="" class="size-14 rounded border" />
					</Table.Cell>
					<Table.Cell>jordans</Table.Cell>
					<Table.Cell>shoes</Table.Cell>
					<Table.Cell>jordans shoes</Table.Cell>

					<Table.Cell>$100</Table.Cell>
					<Table.Cell>10</Table.Cell>

					<Table.Cell class="text-right">
						<!-- <Button variant="outline">Edit</Button> -->
						<Button variant="destructive" size="sm">Delete</Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	{:else}
		<p
			class="flex h-[70vh] w-full flex-col items-center justify-center gap-3 text-center text-3xl text-muted-foreground"
		>
			No products found
			<Button href="products/add">create new product</Button>
		</p>
	{/if}
</div>
