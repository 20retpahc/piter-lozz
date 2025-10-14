<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import LayoutDashboard from '@lucide/svelte/icons/layout-dashboard';
	import Box from '@lucide/svelte/icons/box';
	import User from '@lucide/svelte/icons/user';
	import Truck from '@lucide/svelte/icons/truck';
	import Blocks from '@lucide/svelte/icons/blocks';
	import Home from '@lucide/svelte/icons/home';

	let { children } = $props();

	// Menu items.
	const items = [
		{
			title: 'Overview',
			url: 'overview',
			icon: LayoutDashboard
		},
		{
			title: 'Products',
			url: 'products',
			icon: Box
		},
		{
			title: 'Users',
			url: 'users',
			icon: User
		},
		{
			title: 'Orders',
			url: 'orders',
			icon: Truck
		},
		{
			title: 'Categories',
			url: 'categories',
			icon: Blocks
		},
		{
			title: 'Store front',
			url: '../',
			icon: Home
		}
	];
</script>

<Sidebar.Provider>
	<Sidebar.Root>
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupLabel>admin dashboard</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each items as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton>
									{#snippet child({ props })}
										<a href={'/admin/' + item.url} {...props}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		</Sidebar.Content>
	</Sidebar.Root>

	<main class="flex-1">
		<Sidebar.Trigger />
		{@render children?.()}
	</main>
</Sidebar.Provider>
