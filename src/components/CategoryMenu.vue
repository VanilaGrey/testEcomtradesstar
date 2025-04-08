<template>
	<nav class="category-menu">
		<ul class="category-menu__list">
			<li
				v-for="(category, index) in categories"
				:key="index"
				class="category-menu__item"
				:class="{ active: activeIndex === index }"
				@click="setActive(index)"
			>
				{{ category }}
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref(0);
const categories = [
	"Category 1",
	"Category 2",
	"Category 3",
	"Category 4",
	"Category 5",
];

function setActive(index) {
	activeIndex.value = index;
}
</script>

<style lang="scss" scoped>
.category-menu {
	margin-bottom: 30px;

	&__list {
		position: relative;
		display: flex;
		gap: 20px;
		margin: 0;
		padding: 0;
		list-style-type: none;
		border-bottom: 2px solid $white-grey;
	}

	&__item {
		font-weight: 700;
		font-size: 20px;
		cursor: pointer;
		position: relative;
		padding-bottom: 10px;

		&.active::before {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			bottom: -1px;
			border-bottom: 2px solid $black;
		}
	}
}
</style>
