<script setup>
import PostItem from './PostItem.vue';
import mangaItems from '@/data/manga-items.js';
</script>

<template>
	<section class="manga-reads">
		<h3 class="manga-reads__title">Manga reads</h3>
		<div class="manga-reads__list">
			<PostItem
				v-for="(post, index) in mangaItems"
				:key="index"
				:post="post"
				class="manga-reads__item"
			/>
		</div>
	</section>
</template>

<style scoped>
.manga-reads {
	padding: 15px 40px 30px;
	border: 1px solid #d6d6d6;
}

.manga-reads__list {
	display: flex;
	flex-direction: column;
	gap: 45px;
}

.manga-reads__item {
	display: flex;
	gap: 25px;
}
</style>
