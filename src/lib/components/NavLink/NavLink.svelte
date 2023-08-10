<script lang="ts">
	export let href = '';
	export let isExternal = false;
	export let contrast = false;
</script>

<div class="wrapper" class:contrast>
	<span class="inner-wrapper">
		<a class="link" target={isExternal ? '_blank' : undefined} {href}><slot /></a>
	</span>
</div>

<style lang="scss">
	@use '$styles/mixins' as m;

	$border-size: 1px;
	$border-length: 100%;
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
			@include m.linear-gradient-black;
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
			@include m.linear-gradient-black;
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
				@include m.linear-gradient-black;
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
				@include m.linear-gradient-black;
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
				@include m.linear-gradient-silver;
			}

			&::after {
				@include m.linear-gradient-silver;
			}
			& > .link {
				color: var(--color-text-contrast);
				&::before {
					@include m.linear-gradient-silver;
				}

				&::after {
					@include m.linear-gradient-silver;
				}
			}
		}
	}
</style>
