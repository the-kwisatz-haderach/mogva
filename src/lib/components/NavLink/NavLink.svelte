<script lang="ts">
	export let href = '';
	export let isExternal = false;
	export let contrast = false;
	const handleSectionScroll = (e: MouseEvent) => {
		e.preventDefault();
		const section = document.getElementById(href.slice(1));
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<div class="wrapper" class:contrast>
	<span class="inner-wrapper">
		<a
			class="link"
			on:click={href.startsWith('#') ? handleSectionScroll : undefined}
			target={isExternal ? '_blank' : undefined}
			{href}><slot /></a
		>
	</span>
</div>

<style lang="scss">
	@use '$styles/mixins' as m;

	$border-size: 1px;
	$border-length: 100%;
	$border-color: rgba(255, 255, 255, 0.2);
	$transform-speed: 0.3s;

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
			height: $border-length;
			background-color: $border-color;
			// @include m.linear-gradient-black;
			transform: scaleY(0);
			transform-origin: top left;
			transition: transform $transform-speed;
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			width: $border-size;
			height: $border-length;
			background-color: $border-color;
			// @include m.linear-gradient-black;
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
				width: $border-length;
				height: $border-size;
				background-color: $border-color;
				// @include m.linear-gradient-black;
				transform: scaleX(0);
				transform-origin: top left;
				transition: transform $transform-speed;
			}

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				right: 0;
				width: $border-length;
				height: $border-size;
				background-color: $border-color;
				// @include m.linear-gradient-black;
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
			& > .link {
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
		}
	}
</style>
