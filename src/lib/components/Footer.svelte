<script lang="ts">
	import Large from './Logo/Large.svelte';
	import Typography from './Typography/Typography.svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer id="contact">
	<div class="container">
		<Typography color="contrast" variant="h2">Contact</Typography>
		<div class="footer-main">
			<div>
				<div>
					<Typography weight="600" color="contrast">Mogva AB</Typography>
					<Typography weight="300" color="contrast">Gustaf Lundström</Typography>
					<Typography weight="300" color="contrast">Graphiste</Typography>
					<Typography weight="300" color="contrast">Webdesigner</Typography>
					<Typography weight="300" color="contrast">Développeur front-end</Typography>
				</div>
				<div>
					<Typography color="contrast">Phone: 0729 000 451</Typography>
					<Typography color="contrast">Email: gustaf.lundstrom@mogva.dev</Typography>
				</div>
			</div>
			<div>Col 2</div>
		</div>
		<div class="footer-bottom">
			<Typography color="contrast" size="xs">© {currentYear} Mogva AB</Typography>
			<Large width={50} />
		</div>
	</div>
</footer>

<style lang="scss">
	@use '$styles/mixins' as m;
	.container {
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: column;
	}
	footer {
		@include m.linear-gradient-black-dark-reverse;
		display: flex;
		width: 100%;
		padding-top: 6rem;
	}

	.footer-main {
		flex: 1;
		display: flex;
		gap: 1rem;
	}

	.footer-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	@media print {
		footer {
			display: none;
		}
	}
</style>
