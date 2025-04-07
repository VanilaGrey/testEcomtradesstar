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

<style lang="scss" scoped>
.post-sidebar {
	&__item {
		display: flex;
		gap: 15px;
	}

	&__title {
		font-weight: bold;
		font-size: 14px;
	}

	&__date {
		font-size: 13px;
		color: gray;
	}
}
</style>
