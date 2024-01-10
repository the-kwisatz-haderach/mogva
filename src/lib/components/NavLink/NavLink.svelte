<script lang="ts">
	export let href = '';
	export let isExternal = false;
	export let contrast = false;
	export let light = false;
	const handleSectionScroll = (e: MouseEvent) => {
		e.preventDefault();
		const section = document.getElementById(href.slice(2));
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<div class="wrapper" class:contrast>
	<span class="inner-wrapper" class:light>
		<a
			class="link"
			class:light
			on:click={window.location.pathname === '/' && href.includes('#')
				? handleSectionScroll
				: undefined}
			target={isExternal ? '_blank' : undefined}
			{href}><slot /></a
		>
	</span>
</div>

<style lang="scss">
	@use '$styles/mixins' as m;

	$border-size: 1px;
	$border-length: 100%;
	$border-color: var(--color-text-contrast);
	$transform-speed: 0.3s;
	$border-opacity: 0.2;

	.link {
		display: inline-block;
		position: relative;
		text-decoration: none;
		padding: 1rem !important;
	}

	.wrapper {
		position: relative;
		display: block;
		padding: 20px 0;
		&::before {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			box-shadow: 0px 0px 0px 0px black;
		}
	}

	.inner-wrapper {
		position: relative;
		display: inline-block;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: $border-size;
			opacity: $border-opacity;
			height: $border-length;
			background-color: $border-color;
			transform: scaleY(0);
			transform-origin: top left;
			transition: transform $transform-speed;
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			opacity: $border-opacity;
			width: $border-size;
			height: $border-length;
			background-color: $border-color;
			transform: scaleY(0);
			transform-origin: bottom right;
			transition: transform $transform-speed;
		}

		.link {
			padding: 10px;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				opacity: $border-opacity;
				width: $border-length;
				height: $border-size;
				background-color: $border-color;
				transform: scaleX(0);
				transform-origin: top left;
				transition: transform $transform-speed;
			}

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				opacity: $border-opacity;
				right: 0;
				width: $border-length;
				height: $border-size;
				background-color: $border-color;
				transform: scaleX(0);
				transform-origin: bottom right;
				transition: transform $transform-speed;
			}
		}

		&:hover {
			&::before,
			&::after {
				transform: scaleY(1);
			}

			.link {
				&::before,
				&::after {
					transform: scaleX(1);
				}
			}
		}
	}

	.contrast {
		&::before {
			box-shadow: 0px 0px 0px 0px black;
		}
		& > .inner-wrapper {
			&::before {
				// @include m.linear-gradient-silver;
				background-color: $border-color;
			}

			&::after {
				// @include m.linear-gradient-silver;
				background-color: $border-color;
			}

			&.light::before {
				background-color: white;
			}

			&.light::after {
				background-color: white;
			}
			& > .link:not(.light) {
				color: var(--color-text-contrast);
				&::before {
					// @include m.linear-gradient-silver;
					background-color: $border-color;
				}

				&::after {
					// @include m.linear-gradient-silver;
					background-color: $border-color;
				}
			}
			& > .link.light {
				color: white;
				&::before {
					// @include m.linear-gradient-silver;
					background-color: white;
				}

				&::after {
					// @include m.linear-gradient-silver;
					background-color: white;
				}
			}
		}
	}
</style>
