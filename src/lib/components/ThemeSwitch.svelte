<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

<select bind:value={$theme} {...$$props}>
	<option value="system" disabled selected hidden>Theme</option>
	<option value="light">Light</option>
	<option value="dark">Dark</option>
</select>

<style lang="scss">
	select {
		line-height: 0;
		background-color: unset;
		color: var(--color-text-contrast);
		display: inline;
		padding: 1rem !important;
		color: #fff;
		border: none;
	}
</style>
