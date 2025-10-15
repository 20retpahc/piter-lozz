<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import ClipboardIcon from '@lucide/svelte/icons/clipboard';
	import CheckCircleIcon from '@lucide/svelte/icons/check-circle';

	let status = $state('processing');
</script>

<div class="space-y-4 p-8">
	<div>
		<div class="flex items-center justify-between space-y-2">
			<h2 class="text-2xl font-bold tracking-tight capitalize">Categories</h2>
			<div class="flex items-center space-x-2">
				<Input class="w-[150px] lg:w-[250px]" placeholder="Search categories" />
				<Button href="categories/add">Add new category</Button>
			</div>
		</div>
	</div>

	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">Id</Table.Head>
				<Table.Head>Name</Table.Head>
				<Table.Head>Number of subcategories</Table.Head>
				<Table.Head>Description</Table.Head>

				<Table.Head class="text-right">Action</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell class="pr-12 font-medium">1</Table.Cell>
				<Table.Cell>electronics</Table.Cell>
				<Table.Cell>5</Table.Cell>
				<Table.Cell>this is the description</Table.Cell>

				<Table.Cell class="text-right">
					<!-- <Button variant="outline">Edit</Button> -->
					<Button variant="destructive" size="sm">Delete</Button>
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table.Root>
</div>
