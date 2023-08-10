<script lang="ts">
	import Exercism from '$lib/assets/icons/Exercism.svelte';
	import Github from '$lib/assets/icons/Github.svelte';
	import LinkedinIn from '$lib/assets/icons/LinkedinIn.svelte';
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
				<a href="/">
					<Icon.Text style="font-size: 2rem" />
				</a>
			</div>
			<div class="social">
				<a href="https://github.com/the-kwisatz-haderach" target="_blank">
					<Github class="icon" />
				</a>
				<a href="https://www.linkedin.com/in/gustaf-lundstr%C3%B6m/" target="_blank">
					<LinkedinIn class="icon" />
				</a>
				<a href="https://exercism.org/profiles/KwisatzHaderach" target="_blank">
					<Exercism class="icon" />
				</a>
			</div>
		</div>
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
</div>

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
