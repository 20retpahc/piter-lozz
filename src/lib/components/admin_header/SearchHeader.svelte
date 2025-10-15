<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	export let title: string;
	export let placeholder: string = 'Search...';
	export let onSearch: (query: string) => void = () => {};

	let query = '';
</script>

<div class="flex items-center justify-between space-y-2">
	<h2 class="text-2xl font-bold tracking-tight capitalize">{title}</h2>
	<div class="flex items-center space-x-2">
		<Input
			class="w-[150px] lg:w-[250px]"
			bind:value={query}
			placeholder={placeholder}
		/>
		<Button type="button" onclick={() => onSearch(query)}>Search</Button>
	</div>
</div>