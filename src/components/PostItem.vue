<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
	<div class="post-item">
		<img :src="post.image" alt="" class="post-item__image" />
		<div class="post-item__content">
			<h4 class="post-item__title">{{ t(post.titleKey) }}</h4>
			<p class="post-item__date">{{ t(post.dateKey) }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.post-item__title {
	margin-bottom: 20px;
	font-weight: 700;
	font-size: 18px;
}

.post-item__date {
	font-weight: 400;
	font-size: 12px;
	color: #121416;
}
</style>
