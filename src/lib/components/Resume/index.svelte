<script lang="ts">
	import Container from '../Container/Container.svelte';
	import ExperienceList from '../ExperienceList/ExperienceList.svelte';
	import Typography from '../Typography/Typography.svelte';
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';
	import { experiences } from './experiences';
</script>

<Container class="resume-container" maxWidth={1400} padded={false}>
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
	@use '$styles/mixins' as m;
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

	main {
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: white;
		@include m.padded;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		& > section:first-child {
			flex: 1;
		}
	}

	@include m.md {
		:global(.resume-container) {
			padding: 150px 40px 40px;
			@media print {
				padding: 0;
			}
		}
		.wrapper {
			border: 1px solid #ffffff39;
		}
	}

	@include m.lg {
		main {
			flex-direction: row;
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
			padding: 2rem;
			gap: 2rem;
			flex-direction: row;
			& > section:first-child {
				flex: unset;
			}
		}
	}
</style>
