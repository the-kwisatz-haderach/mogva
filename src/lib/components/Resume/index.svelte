<script lang="ts">
	import ExperienceList from '../ExperienceList/ExperienceList.svelte';
	import Icon from '../Logo';
	import Typography from '../Typography/Typography.svelte';
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';
	import { experiences } from './experiences';
</script>

<div class="container">
	<article>
		<div class="header-top">
			<div class="logo">
				<Icon.Text style="font-size: 2rem" />
			</div>
			<div class="social">
				<Typography color="contrast">GITHUB</Typography>
				<Typography color="contrast">LINKEDIN</Typography>
			</div>
		</div>
		<div class="wrapper">
			<Header />
			<main>
				<section>
					<Typography variant="h2">Experience</Typography>
					<ExperienceList items={experiences} />
				</section>
				<Sidebar />
			</main>
		</div>
	</article>
</div>

<style lang="scss">
	.container {
		background-color: rgba(0, 0, 0, 0.98);
	}

	article {
		max-width: 1200px;
		margin: auto;
		padding: 1rem;
		width: 100%;
		min-height: 100vh;
	}

	.social {
		display: flex;
		gap: 1rem;
	}

	.header-top {
		display: flex;
		gap: 1rem;
		padding: 0.5rem;
		justify-content: space-between;
		align-items: center;
	}

	.wrapper {
		border: 1px solid #ffffff39;
	}

	main {
		background-color: white;
		padding: 3rem 2.5rem;
		display: flex;
		gap: 2.5rem;
		& > section:first-child {
			flex: 1;
		}
	}

	@media print {
		.container {
			background-color: white;
		}
		.wrapper {
			border: none;
		}
		.header-top {
			display: none;
		}
		article {
			padding: 0;
			max-width: 100%;
		}
		main {
			flex-direction: column;
		}
	}
</style>
