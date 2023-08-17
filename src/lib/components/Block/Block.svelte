<script lang="ts">
	type Color = 'white' | 'black' | 'silver';
	export let color: Color = 'white';
	export let width: number | string = '100%';
	export let padding: number | string = '4rem';
</script>

<div class={`root ${color} ${$$props.class}`} style:width style:padding>
	<slot />
</div>

<style lang="scss">
	@use '$styles/mixins' as m;
	.root {
		@include m.shadow-md;
		@include m.rounded-md;
	}

	.white {
		background-color: var(--color-bg-paper);
	}
	.black {
		@include m.linear-gradient-black-reverse;
		color: var(--color-text-contrast);
	}
	.silver {
		@include m.linear-gradient-silver;
		color: var(--color-text-contrast);
	}
</style>
