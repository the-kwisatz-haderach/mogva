<script lang="ts">
	export let enabled = false;
	export let onClick: (checked: boolean) => void;
</script>

<label class="switch">
	<input type="checkbox" on:change={() => onClick(!enabled)} bind:checked={enabled} />
	<span class="slider round" />
</label>

<style lang="scss">
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
		box-sizing: border-box;
		border: 2px solid rgba(160, 160, 160, 0.2);
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
		height: $size;
		width: $size;
		left: 2px;
		bottom: 2px;
		background-image: linear-gradient(160deg, #515151, #959595);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		border: 2px solid rgba(255, 255, 255, 0.2);
		background-color: black;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px var(--color-black-dark);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX($size);
		-ms-transform: translateX($size);
		transform: translateX($size);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
