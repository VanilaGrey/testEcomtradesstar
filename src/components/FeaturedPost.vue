<script setup>
import PostSidebar from './PostSidebar.vue';
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
				<p class="featured-post__date">1 Month Ago</p>
				<h2 class="featured-post__title">
					Tick one more destination off of your bucket list with one of our most
					popular vacations in 2022
				</h2>
				<p class="featured-post__description">
					Phasellus aliquet nibh in iaculis pharetra. Maecenas eleifend sed ex.
					Donec quis magna sed felis elementum blandit nec quis sem. Maecen.
				</p>
				<a href="#" class="featured-post__link">View Post</a>
			</div>
		</div>

		<PostSidebar class="featured-post__sidebar" />
	</section>
</template>

<style scoped>
.featured-post {
	display: grid;
	grid-template-columns: 2fr 1.5fr;
	padding: 25px 20px;
	border: 1px solid #d6d6d6;
	gap: 40px;
}

.featured-post__content {
	display: flex;
	flex-direction: column;
	align-items: self-start;
}

.featured-post__sidebar {
	display: flex;
	flex-direction: column;
	gap: 30px;
}

.featured-post__date {
	margin-bottom: 15px;
	font-weight: 500;
	font-size: 12px;
	color: #6e6e6e;
}

.featured-post__image {
	margin-bottom: 30px;
}

.featured-post__title {
	margin-bottom: 15px;
	font-weight: 700;
	font-size: 18px;
}

.featured-post__description {
	margin-bottom: 15px;
	font-weight: 400;
	font-size: 14px;
	line-height: 150%;
	color: #6e6e6e;
}

.featured-post__link {
	margin-top: auto;
	padding-bottom: 10px;
	font-weight: 700;
	font-size: 16px;
	color: #121416;
	text-decoration: none;
	border-bottom: 1px solid black;
}
</style>
