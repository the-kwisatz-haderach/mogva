<script>
	import Block from './Block/Block.svelte';
	import Typography from './Typography/Typography.svelte';
</script>

<Block color="black">
	<Typography color="contrast" variant="h2">About</Typography>
	<Typography color="contrast"
		>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita velit nostrum deserunt sequi
		cupiditate. Doloremque illo officia minus doloribus facilis.</Typography
	>
	<Typography color="contrast"
		>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in non cupiditate maxime debitis
		incidunt corporis animi, repudiandae quisquam, quae, laudantium placeat consectetur voluptas
		maiores!</Typography
	>
</Block>

<style lang="scss">
	@use '$styles/mixins' as m;
</style>
