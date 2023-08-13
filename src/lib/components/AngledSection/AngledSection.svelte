<script lang="ts">
	export let withBorder = false;
</script>

<div class={`wrapper ${$$props.class}`}>
	<div class="angle" />
	{#if withBorder}
		<div class="angle bg-border" />
	{/if}
	<slot />
</div>

<style lang="scss">
	@use '$styles/mixins' as m;

	.wrapper {
		position: relative;
		z-index: 2;
		padding-top: 100px !important;
		padding-bottom: 90px !important;
	}

	.angle {
		position: absolute;
		top: -10%;
		right: 0;
		bottom: -12%;
		left: 0;
		overflow: hidden;
		&::before {
			content: '';
			top: 10%;
			left: -10%;
			width: 120%;
			height: 80%;
			position: absolute;
			background-color: var(--color-bg-paper);
			transform: rotate(-3deg);
		}
	}

	.bg-border {
		transform: translateY(40px);
		z-index: -1;
		&::before {
			content: '';
			top: 10%;
			left: -10%;
			width: 120%;
			height: 80%;
			position: absolute;
			@include m.linear-gradient-silver;
			transform: rotate(-3deg);
		}
	}
</style>
