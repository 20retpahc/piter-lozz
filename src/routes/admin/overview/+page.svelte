<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import ArrowUpIcon from '@lucide/svelte/icons/arrow-up';
	import ShoppingCartIcon from '@lucide/svelte/icons/shopping-cart';
</script>

<div class="flex-1 space-y-4 p-8 pt-6">
	<h2 class="text-2xl font-bold tracking-tight capitalize">Dashboard</h2>

	<div class="grid gap-4 md:grid-cols-2">
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Total revenue</Card.Title>
				<ShoppingCartIcon class="size-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">$50000</div>
				<p class="text-xs text-muted-foreground">50% from last month</p>
			</Card.Content>
		</Card.Root>
	</div>

	<div class="grid gap-4 md:grid-cols-2">
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">New Customers</Card.Title>
				<ArrowUpIcon class="size-4 text-muted-foreground" />
			</Card.Header>
			<Card.Content>
				<div class="text-2xl font-bold">+200</div>
				<p class="text-xs text-muted-foreground">+20% from last month</p>
			</Card.Content>
		</Card.Root>
	</div>

	<div class="grid gap-4 md:grid-cols-2">
		<Card.Root>
			<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
				<Card.Title class="text-sm font-medium">Recent Orders Title</Card.Title>
			</Card.Header>
			<Card.Content>
				<Table.Root>
					<Table.Header>
						<Table.Row>
							<Table.Head class="w-[100px]">Order</Table.Head>
							<Table.Head>Status</Table.Head>
							<Table.Head>Customer</Table.Head>
							<Table.Head class="text-right">AMT + SHP</Table.Head>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell class="font-medium">INV001</Table.Cell>
							<Table.Cell>Processing</Table.Cell>
							<Table.Cell>Loyals peanut</Table.Cell>
							<Table.Cell class="text-right">$500</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table.Root>
			</Card.Content>
		</Card.Root>
	</div>
</div>
