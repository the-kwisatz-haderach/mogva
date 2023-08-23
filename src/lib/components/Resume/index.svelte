<script lang="ts">
	import Container from '../Container/Container.svelte';
	import ExperienceList from '../ExperienceList/ExperienceList.svelte';
	import Typography from '../Typography/Typography.svelte';
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';
	import { experiences } from './experiences';
</script>

<Container maxWidth={1400} padded={false} style="padding: 150px 40px 40px;">
	<article>
		<div class="wrapper">
			<Header />
			<main>
				<section>
					<Typography variant="h2">Assignments & experience</Typography>
					<ExperienceList items={Object.values(experiences)} />
				</section>
				<Sidebar />
			</main>
		</div>
	</article>
</Container>

<style lang="scss">
	:global(.icon) {
		width: 25px;
		height: 25px;
		fill: #fff;
		transition: transform 0.2s ease-in-out;
		&:hover {
			transform: scale(1.3);
		}
	}

	article {
		width: 100%;
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
		.wrapper {
			border: none;
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
