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
		margin-top: 2rem;
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
		// pointer-events: none;
	}

	.top {
		top: -12vw;
		bottom: 0;
		&::before {
			content: '';
			top: 4vw;
			left: 10%;
			width: 200%;
			height: 100%;
			position: absolute;
			// border-top: 1px solid rgba(255, 255, 255, 0.2);
			// border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
			width: 200%;
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
			box-shadow: 0px 30px 40px -20px black;
		}
	}

	@include m.md {
		.top {
			top: -16vw;
		}
	}
	@include m.lg {
		.top {
			top: -10vw;
			&::before {
				top: 4vw;
			}
		}
	}
</style>
