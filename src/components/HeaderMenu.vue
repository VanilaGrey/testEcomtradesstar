<script setup>
import { clickOutside as vClickOutside } from 'v-click-outside-vue3';
import menuItems from '@/data/menu-items.js';
</script>
<template>
	<nav class="menu" v-click-outside="setCategoryIndex">
		<ul class="menu__list">
			<li class="menu__item" v-for="(item, index) in menuItems" :key="index">
				<router-link class="menu__link" :to="item.url">
					{{ $t(item.title) }}
				</router-link>
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
