<script setup>
import { useI18n } from "vue-i18n";
defineProps(["post"]);
const { t } = useI18n();
</script>

<template>
	<div class="post-item">
		<div
			class="post-item__image"
			:style="{ '--background-image': `url(${post.image})` }"
		></div>
		<div class="post-item__content">
			<h4 class="post-item__title">{{ t(post.titleKey) }}</h4>
			<p class="post-item__date">{{ t(post.dateKey) }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.post-item {
	&__image {
		min-width: 270px;
		height: auto;
		background-image: var(--background-image);
		background-size: cover;
	}

	&__title {
		margin-bottom: 20px;
		font-weight: 700;
		font-size: 18px;
	}

	&__date {
		font-weight: 400;
		font-size: 12px;
		color: $black;
	}
}
</style>
