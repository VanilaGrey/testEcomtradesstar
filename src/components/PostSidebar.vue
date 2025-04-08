<script setup>
import { useI18n } from "vue-i18n";
import postItems from "@/data/post-items.js";

const { t } = useI18n();
</script>

<template>
	<aside class="post-sidebar">
		<div
			v-for="(post, index) in postItems"
			:key="index"
			class="post-sidebar__item"
		>
			<div
				class="post-sidebar__image"
				:style="{ '--background-image': `url(${post.image})` }"
			></div>
			<div class="post-sidebar__content">
				<h4 class="post-sidebar__title">{{ t(post.titleKey) }}</h4>
				<p class="post-sidebar__date">{{ t(post.dateKey) }}</p>
			</div>
		</div>
	</aside>
</template>

<style lang="scss" scoped>
.post-sidebar {
	&__image {
		min-width: 144px;
		min-height: 100px;
		background-image: var(--background-image);
		background-size: cover;
	}

	&__item {
		display: flex;
		gap: 15px;
	}

	&__title {
		font-weight: 700;
		font-size: 14px;
	}

	&__date {
		font-size: 13px;
		color: $grey;
	}
}
</style>
