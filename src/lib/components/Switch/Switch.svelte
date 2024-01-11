<script lang="ts">
	import moon from '$lib/assets/images/moon.png';
	export let enabled = false;
	export let onClick: (checked: boolean) => void;
</script>

<label class="switch">
	<input type="checkbox" on:change={() => onClick(!enabled)} bind:checked={enabled} />
	<span class="slider" />
</label>

<style lang="scss">
	@use '$styles/mixins' as m;
	$size: 26px;

	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}
	.slider {
		box-shadow: 0px 8px 13px -8px rgba(0, 0, 0, 0.6);
		border: 2px solid rgba(160, 160, 160, 0.2);
		border-radius: 34px;
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--color-silver);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider::before {
		position: absolute;
		content: '';
		border-radius: 50%;
		height: $size;
		width: $size;
		left: 2px;
		bottom: 2px;
		background-image: linear-gradient(160deg, #a7a7a7, #7e7e7e);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider::after {
		content: '';
		top: 7px;
		left: 7px;
		position: absolute;
		z-index: 10;
		width: calc($size - 9px);
		height: calc($size - 9px);
		background-size: cover;
		background-image: url('/moon.png');
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		border: 2px solid rgba(255, 255, 255, 0.2);
		background-color: black;
	}

	input:checked + .slider::after {
		-webkit-transform: translateX($size);
		-ms-transform: translateX($size);
		transform: translateX($size);
		background-image: url('/sun.png');
	}

	input:checked + .slider:before {
		-webkit-transform: translateX($size);
		-ms-transform: translateX($size);
		transform: translateX($size);
	}
</style>
