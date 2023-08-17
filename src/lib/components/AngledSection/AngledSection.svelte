<script lang="ts">
	export let withBottom = false;
	export let withTop = false;
</script>

<div class={`wrapper ${$$props.class || ''}`}>
	{#if withTop}
		<div class="angle top" />
	{/if}
	<div class="slot-container">
		<slot />
	</div>
	{#if withBottom}
		<div class="angle bottom bg-border" />
	{/if}
</div>

<style lang="scss">
	@use '$styles/mixins' as m;
	.slot-container {
		position: relative;
		z-index: 1;
	}
	.wrapper {
		position: relative;
		z-index: 0;
		background-color: var(--color-bg-paper);
	}

	.angle {
		position: absolute;
		z-index: 0;
		right: 0;
		left: -10%;
		overflow: hidden;
	}

	.top {
		top: -10%;
		bottom: 0;
		&::before {
			content: '';
			top: 5%;
			left: 0;
			width: 120%;
			height: 100%;
			position: absolute;
			background-color: var(--color-bg-paper);
			transform: rotate(-3deg);
		}
	}

	.bottom {
		top: 0;
		bottom: -5%;
		&::before {
			content: '';
			bottom: 5%;
			left: 0;
			width: 120%;
			height: 100%;
			position: absolute;
			background-color: var(--color-bg-paper);
			transform: rotate(-3deg);
		}
	}

	.bg-border {
		transform: translateY(40px);
		z-index: 0;

		&::after {
			content: '';
			bottom: 40px;
			z-index: -1;
			left: -10%;
			right: 0;
			width: 120%;
			height: 100%;
			position: absolute;
			@include m.linear-gradient-silver;
			transform: rotate(-3deg);
		}
	}
</style>
