<script setup>
import { useI18n } from 'vue-i18n';
import postItems from '@/data/post-items.js';

const { t } = useI18n();
</script>

<template>
	<aside class="post-sidebar">
		<div
			v-for="(post, index) in postItems"
			:key="index"
			class="post-sidebar__item"
		>
			<img :src="post.image" alt="" class="post-sidebar__image" />
			<div class="post-sidebar__content">
				<h4 class="post-sidebar__title">{{ t(post.titleKey) }}</h4>
				<p class="post-sidebar__date">{{ t(post.dateKey) }}</p>
			</div>
		</div>
	</aside>
</template>

<style scoped>
.post-sidebar__item {
	display: flex;
	gap: 15px;
}

.post-sidebar__title {
	font-weight: bold;
	font-size: 14px;
}

.post-sidebar__date {
	font-size: 13px;
	color: gray;
}
</style>
