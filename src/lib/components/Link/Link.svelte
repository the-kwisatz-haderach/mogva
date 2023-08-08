<script>
	export let href = '';
</script>

<a {href}>
	<slot />
</a>

<style lang="scss">
	a {
		font-size: 0.9rem;
		margin-top: 1.5rem;
		// & > * {
		// 	opacity: 0.6;
		// 	transition: opacity 0.2s ease-in-out;
		// }
		&:hover {
			opacity: 1;
		}
	}
</style>
