<script>
	import Button from './Button.svelte';
</script>

<header>
	<div>
		<h1>Mogva</h1>
		<div class="content-container">
			<div>
				<p>Builds safe, scalable, reliable & user friendly applications for the web.</p>
				<p>
					Mogva specialises in writing well-tested code using Typescript or Go and deploying it to
					the cloud.
				</p>
				<div>
					<Button>Get in touch</Button>
					<Button>Check qualifications</Button>
				</div>
			</div>
			<div>
				<img src="https://picsum.photos/350/350" alt="" />
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	@use '$styles/mixins' as m;
	header {
		background-color: var(--color-primary);
	}

	h1 {
		font-size: 8rem;
		margin-top: 2rem;
		margin-bottom: 2rem;
		position: relative;
		left: -2px;
	}

	.content-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 10px;

		@include m.md {
			flex-direction: row;
		}
	}
</style>
