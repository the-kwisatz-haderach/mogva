<script>
	import Container from './Container/Container.svelte';
	import Typography from './Typography/Typography.svelte';
</script>

<Container id="about" color="black-dark" maxWidth={1000}>
	<div class="content-wrapper">
		<div class="text-wrapper">
			<Typography color="contrast" variant="h2">About me</Typography>
			<Typography color="contrast"
				>My path to becoming a software developer has not been all straight. I spent the first five
				years of my career managing digital projects and teams. During this time, I noticed I was
				the happiest getting my hands dirty with the nitty gritty parts of the development process,
				and started dreaming of a new career.</Typography
			>
			<Typography color="contrast">
				Not being scared of change, I switched from an already great position and incredible
				colleagues to jump on the fast-paced SALT developer bootcamp.
			</Typography>
			<Typography color="contrast">
				Since finishing, I've spent countless hours picking up new knowledge in the various domains
				of software development, both on the job but naturally also on my free time - not because I
				had to but because I truly love the work.
			</Typography>
			<Typography color="contrast"
				>Today, I consider my unconventional journey a big strength. Being quick to see the bigger
				picture, I will lean on my past experiences to improve teamwork and communication, engage
				relevant stakeholders early on, and am not afraid to express new ideas or feedback on
				established norms.
			</Typography>
		</div>
		<!-- <div class="image-wrapper">
			<img
				width="100%"
				height="100%"
				src="https://www.freeiconspng.com/thumbs/batman-png/batman-png-32.png"
				alt=""
			/>
		</div> -->
	</div>
</Container>

<style lang="scss">
	@use '$styles/mixins' as m;
	.content-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		// margin-bottom: -5rem;
	}

	.image-wrapper {
		position: relative;
		bottom: -1rem;
		width: 192px;
		aspect-ratio: 240 / 192;
	}

	.text-wrapper {
		flex: 1;
	}

	@include m.sm {
		.content-wrapper {
			margin-bottom: -6rem;
		}
	}
	@include m.md {
		.text-wrapper {
			padding-bottom: 7rem;
		}
		.image-wrapper {
			position: relative;
			bottom: -5rem;
			width: 33%;
		}
		.content-wrapper {
			gap: 2rem;
			justify-content: space-between;
			flex-direction: row;
			margin-bottom: -8rem;
		}
	}
</style>
