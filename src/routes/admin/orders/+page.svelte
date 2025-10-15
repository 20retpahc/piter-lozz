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
			<h2 class="text-2xl font-bold tracking-tight capitalize">Orders</h2>
			<div class="flex items-center space-x-2">
				<Input class="w-[150px] lg:w-[250px]" placeholder="Search by order code.." />
				<Button type="submit">Search</Button>
			</div>
		</div>
	</div>

	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">Order Id</Table.Head>
				<Table.Head>Status</Table.Head>
				<Table.Head>Customer</Table.Head>
				<Table.Head>Amount + Shipping</Table.Head>
				<Table.Head>Date</Table.Head>

				<Table.Head class="text-right">Action</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell class="pr-12 font-medium"
					><div class="flex items-center gap-1">
						<span> #INV001 </span>
						<button onclick={() => navigator.clipboard.writeText('#INV001')}>
							<ClipboardIcon class="size-4" />
						</button>
					</div>
				</Table.Cell>
				<Table.Cell>
					<div class="flex items-center">
						{#if status === 'delivered'}
							<CheckCircleIcon class="mr-2 h-4 w-4 text-green-500" />
						{:else if status === 'processing'}
							<CheckCircleIcon class="mr-2 h-4 w-4 text-yellow-500" />
						{:else if status === 'shipped'}
							<CheckCircleIcon class="mr-2 h-4 w-4 text-red-500" />
						{/if}
						<span>{status}</span>
					</div>
				</Table.Cell>
				<Table.Cell>Loyal peanut</Table.Cell>
				<Table.Cell>$100</Table.Cell>
				<Table.Cell>2025-01-01</Table.Cell>

				<Table.Cell class="text-right">
					<!-- <Button variant="outline">Edit</Button> -->
					<Button variant="outline" size="sm">update to shipped</Button>
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table.Root>
</div>
