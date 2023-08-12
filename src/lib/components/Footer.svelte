<script lang="ts">
	import Large from './Logo/Large.svelte';
	import Typography from './Typography/Typography.svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="footer-main">
		<div>Col 1</div>
		<div>Col 2</div>
	</div>
	<Typography color="contrast" size="xs">© {currentYear} Mogva AB</Typography>
	<Large width={50} />
</footer>

<style lang="scss">
	@use '$styles/mixins' as m;
	footer {
		@include m.linear-gradient-black-reverse;
		display: flex;
		flex-direction: column;
		min-height: 400px;
	}

	.footer-main {
		padding: 4rem;
		flex: 1;
		display: flex;
		gap: 1rem;
		& > div {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.footer-bottom {
		height: 50px;
		border-top: 1px solid rgba(255, 255, 255, 0.15);
		background-color: black;
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	@media print {
		footer {
			display: none;
		}
	}
</style>
