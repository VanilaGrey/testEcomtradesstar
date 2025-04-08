<script setup>
import CardItem from "../components/PostCard.vue";
import SocialStats from "../components/SocialStats.vue";
import TravelBanner from "../components/TravelBanner.vue";
import TopDestinations from "../components/TopDestinations.vue";
import CategoryMenu from "../components/CategoryMenu.vue";
import FeaturedPost from "../components/FeaturedPost.vue";
import MangaReads from "../components/MangaReads.vue";
import FirstscreenPage from "../components/FirstscreenPage.vue";
</script>

<template>
	<main class="main">
		<firstscreen-page layout="default" />
		<div class="container">
			<social-stats />
			<card-item />
			<travel-banner />
			<top-destinations />
			<category-menu />
			<div class="main__container">
				<featured-post />
				<manga-reads />
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.main__container {
	display: flex;
	margin-bottom: 130px;
}
</style>
