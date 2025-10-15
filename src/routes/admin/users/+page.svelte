<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
</script>

<div class="space-y-4 p-8">
	<div>
		<div class="flex items-center justify-between space-y-2">
			<h2 class="text-2xl font-bold tracking-tight capitalize">Users</h2>
			<div class="flex items-center space-x-2">
				<Input class="w-[150px] lg:w-[250px]" placeholder="Search products.." />
				<Button href="products/add">add user</Button>
			</div>
		</div>
	</div>
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">Name</Table.Head>
				<Table.Head>Email</Table.Head>
				<Table.Head>Role</Table.Head>
				<Table.Head>Status</Table.Head>
				<Table.Head>Join date</Table.Head>
				<Table.Head>Total spent</Table.Head>

				<Table.Head class="text-right">Action</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell class="font-medium">Loyal peanut</Table.Cell>
				<Table.Cell>20retpahc@gmail.com</Table.Cell>
				<Table.Cell>admin</Table.Cell>
				<Table.Cell>active</Table.Cell>
				<Table.Cell>2025-01-01</Table.Cell>

				<Table.Cell>$100</Table.Cell>

				<Table.Cell class="text-right">
					<!-- <Button variant="outline">Edit</Button> -->
					<Button variant="destructive" size="sm">Ban user</Button>
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table.Root>
</div>
