<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import Container from '../Container/Container.svelte';
	import ExperienceList from '../ExperienceList/ExperienceList.svelte';
	import Typography from '../Typography/Typography.svelte';
	import Header from './Header.svelte';
	import type { ResumeBlok } from '$lib/storyblok/types';
	import Tag from '../Tag.svelte';
	import Certifications from './Certifications.svelte';
	import EducationBlok from './EducationBlok.svelte';

	export let blok: ResumeBlok;
</script>

<div use:storyblokEditable={blok}>
	<Container class="resume-container" maxWidth={1400} padded={false}>
		<article>
			<div class="wrapper">
				<Header
					name={blok.name}
					subtitle={blok.subtitle}
					description={blok.description}
					city={blok.city}
					phone={blok.phone}
					email={blok.email}
					photo={blok.photo}
				/>
				<main>
					<section>
						<Typography variant="h2">Assignments & experience</Typography>
						<ExperienceList bloks={blok.experience} />
					</section>
					<aside>
						<section>
							<Typography variant="h3">Key skills</Typography>
							<ul class="skills">
								{#each blok.key_skills as skill}
									<li><Tag size="sm">{skill}</Tag></li>
								{/each}
							</ul>
						</section>
						<section>
							<Typography variant="h3">Education</Typography>
							<ul class="education-list">
								{#each blok.education as educationBlok}
									<li>
										<EducationBlok blok={educationBlok} />
									</li>
								{/each}
							</ul>
						</section>
						<section>
							<Certifications certifications={blok.certifications} />
						</section>
						<section>
							<Typography variant="h3">Personal</Typography>
							<Typography size="sm">{blok.personal}</Typography>
						</section>
						<section>
							<Typography variant="h3">Languages</Typography>
							<ul class="language-list">
								{#each blok.languages as language}
									<li>
										<Typography noMargin weight="400">{language.title}</Typography>
										<Typography size="xs" color="subtle">{language.company}</Typography>
									</li>
								{/each}
							</ul>
						</section>
					</aside>
				</main>
			</div>
		</article>
	</Container>
</div>

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

	aside {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0px 6px;
	}

	.education-list {
		display: flex;
		flex-direction: column;
		& > li {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}
		& > li:not(:last-child) {
			margin-bottom: 1.5rem;
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
		aside {
			width: 240px;
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

		aside {
			display: flex;
			flex-direction: column;
		}
	}
</style>
