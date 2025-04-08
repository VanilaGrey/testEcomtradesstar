<script setup>
import PostSidebar from "./PostSidebar.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
	<section class="featured-post">
		<div class="featured-post__main">
			<img
				class="featured-post__image"
				src="/images/foto-3.jpg"
				alt="Destination"
			/>
			<div class="featured-post__content">
				<p class="featured-post__date">{{ t("bigPost.featured.date") }}</p>
				<h2 class="featured-post__title">{{ t("bigPost.featured.title") }}</h2>
				<p class="featured-post__description">
					{{ t("bigPost.featured.description") }}
				</p>
				<a href="#" class="featured-post__link">{{
					t("bigPost.featured.viewPost")
				}}</a>
			</div>
		</div>

		<PostSidebar class="featured-post__sidebar" />
	</section>
</template>

<style lang="scss" scoped>
.featured-post {
	display: grid;
	grid-template-columns: 1.5fr 1fr;
	padding: 25px 20px;
	border: 1px solid $grey;
	gap: 40px;

	&__content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	&__sidebar {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	&__date {
		margin-bottom: 15px;
		font-weight: 500;
		font-size: 12px;
		color: $grey;
	}

	&__image {
		margin-bottom: 30px;
	}

	&__title {
		margin-bottom: 15px;
		font-weight: 700;
		font-size: 18px;
	}

	&__description {
		margin-bottom: 15px;
		font-weight: 400;
		font-size: 14px;
		line-height: 150%;
		color: $grey;
	}

	&__link {
		margin-top: auto;
		padding-bottom: 10px;
		font-weight: 700;
		font-size: 16px;
		color: $black;
		text-decoration: none;
		border-bottom: 1px solid $black;
	}
}
</style>
