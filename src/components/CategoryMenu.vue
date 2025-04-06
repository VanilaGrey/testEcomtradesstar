<template>
	<nav class="category-menu">
		<ul class="category-menu__list">
			<li class="category-menu__item" v-for="category in 5" :key="category">
				Category name
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.category-menu {
	margin-bottom: 30px;

	&__list {
		display: flex;
		gap: 20px;
		margin: 0;
		padding: 0;
		list-style-type: none;
		border-bottom: 1px solid red;
	}

	&__item {
		font-weight: 700;
		font-size: 20px;
	}
}
</style>
