<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import Switch from './Switch/Switch.svelte';

	const onClick = (enabled: boolean) => {
		if (enabled) {
			theme.set('dark');
		} else {
			theme.set('light');
		}
	};
</script>

<Switch enabled={$theme === 'dark'} {onClick} />

<style lang="scss">
</style>
