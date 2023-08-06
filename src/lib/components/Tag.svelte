<script lang="ts">
	import Typography from './Typography/Typography.svelte';
	import type { Size } from './Typography/types';

	export let label = '';
	export let size: Size = 'md';
</script>

<Typography class="tag" {size}>{label}</Typography>

<style lang="scss">
	:global(.tag) {
		background-color: var(--color-bg-secondary);
		padding: 2px 8px;
		border-radius: 1rem;
		height: fit-content;
	}
</style>
