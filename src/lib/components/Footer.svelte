<script lang="ts">
	import Link from './Link/Link.svelte';
	import Typography from './Typography/Typography.svelte';
	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<div class="footer-main">
			<div class="col">
				<Typography variant="h3" weight="600" color="contrast">Mogva AB</Typography>
				<ul>
					<li>
						<Typography color="contrast">Gustaf Lundström</Typography>
					</li>
					<li>
						<Typography color="contrast">Fullstack Software Engineer</Typography>
					</li>
					<li>
						<Typography color="contrast">Stockholm, Sweden</Typography>
					</li>
					<li>
						<Link href="mailto:gustaf.lundstrom@mogva.dev">gustaf.lundstrom@mogva.dev</Link>
					</li>
				</ul>
			</div>
			<div class="col">
				<Typography variant="h3" weight="600" color="contrast">Social</Typography>
				<ul>
					<li>
						<Link href="https://www.linkedin.com/in/gustaf-lundstr%C3%B6m/" external>LinkedIn</Link>
					</li>
					<li><Link href="https://github.com/the-kwisatz-haderach" external>Github</Link></li>
					<li>
						<Link href="https://exercism.org/profiles/KwisatzHaderach" external>Exercism</Link>
					</li>
				</ul>
			</div>
			<div class="col">Mogva</div>
		</div>
		<div class="footer-bottom">
			<Typography color="contrast" size="xs">© {currentYear} Mogva AB</Typography>
			<a
				href="https://www.flaticon.com/free-icons/software-development"
				title="software development icons"
				>Software development icons created by Freepik - Flaticon</a
			>
		</div>
	</div>
</footer>

<style lang="scss">
	@use '$styles/mixins' as m;
	.col:last-child {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 6rem;
		color: var(--color-text-contrast);
		font-family: var(--font-secondary);
	}
	.container {
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: column;
	}
	footer {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		@include m.padded;
		@include m.linear-gradient-black-dark-reverse;
		display: flex;
		width: 100%;
		padding-top: 5rem;
		padding-bottom: 2rem;
	}

	.footer-main {
		flex: 1;
		flex-wrap: wrap;
		display: flex;
		gap: 3rem;
	}

	.footer-bottom {
		width: 100%;
		margin-top: 5rem;
		display: flex;
		gap: 0.5rem;
		flex-direction: column;
		& > a {
			font-size: 0.8rem;
			color: var(--color-text-contrast);
			font-weight: 200;
		}
	}

	@media print {
		footer {
			display: none;
		}
	}

	@include m.md {
		.footer-main {
			gap: 4rem;
			justify-content: space-evenly;
		}
		.footer-bottom {
			margin-top: 5rem;
			text-align: left;
		}
		footer {
			padding-top: 8rem;
		}
	}
</style>
