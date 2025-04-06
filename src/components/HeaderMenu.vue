<script setup>
import { clickOutside as vClickOutside } from 'v-click-outside-vue3';
import { ref } from 'vue';
import menuItems from '@/data/menu-items.js';

const categoryIndex = ref(-1);

const setCategoryIndex = (index = -1) => {
	categoryIndex.value = categoryIndex.value === index ? -1 : index;
};
</script>

<template>
	<nav class="menu" v-click-outside="setCategoryIndex">
		<ul class="menu__list">
			<li
				class="menu__item"
				v-for="(item, index) in menuItems"
				:key="index"
				@click="setCategoryIndex(index)"
			>
				<a class="menu__link" :href="item.url">
					{{ item.title }}
				</a>
			</li>
		</ul>
	</nav>
</template>

<style scoped lang="scss">
.menu {
	&__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0;
		padding: 0 20px;
		list-style-type: none;
		gap: 30px;
	}

	&__link {
		font-weight: 700;
		color: #ffffff;
		text-decoration: none;
	}
}
</style>
