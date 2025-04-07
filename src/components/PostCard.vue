<script setup>
import cardItems from '@/data/card-items.js';
</script>

<template>
	<div class="cards">
		<div v-for="(post, index) in cardItems" :key="index" class="cards__item">
			<div class="cards__image-wrapper">
				<img :src="post.image" alt="Post Image" class="cards__image" />
				<div class="cards__tags">
					<span v-for="(tag, i) in post.tags" :key="i" class="cards__tag">{{
						tag
					}}</span>
				</div>
				<img :src="post.icon" :alt="post.name" class="cards__icon" />
			</div>
			<div class="cards__content">
				<h2 class="cards__title">{{ post.title }}</h2>
				<div class="cards__meta">
					<span class="cards__author">{{ post.author }}</span>
					<span class="cards__line">____</span>
					<span class="cards__date">{{ post.date }}</span>
					<span class="cards__dot">•</span>
					<span class="cards__shares">{{ post.shares }}</span>
				</div>
				<p class="cards__description">{{ post.description }}</p>
				<a href="#" class="cards__link">View Post</a>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.cards {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 40px;
	padding: 0;
}

.cards__item {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
}

.cards__image-wrapper {
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.25);
	}
}

.cards__image {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.cards__tags {
	position: absolute;
	top: 30px;
	left: 30px;
	display: flex;
	gap: 8px;
}

.cards__tag {
	padding: 8px 10px;
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 4px;
	backdrop-filter: blur(12px);
}

.cards__content {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	padding: 16px 0;
}

.cards__icon {
	position: absolute;
	top: 30px;
	right: 30px;
	border-radius: 200px;
	backdrop-filter: blur(12px);
	fill: rgba(255, 255, 255, 0.2);
}

.cards__author {
	font-weight: 700;
	font-size: 22px;
	color: #000000;
}

.cards__title {
	margin: 0 0 12px;
	font-weight: 700;
	font-size: 42px;
}

.cards__meta {
	display: flex;
	align-items: center;
	margin-bottom: 12px;
	font-size: 13px;
	color: #777777;
	gap: 10px;
}

.cards__dot {
	color: #bbbbbb;
}

.cards__line {
	position: relative;
	top: -25%;
	color: #bbbbbb;
}

.cards__description {
	flex-grow: 1;
	margin-bottom: 16px;
	line-height: 150%;
	color: #555555;
}

.cards__link {
	align-self: flex-start;
	padding-bottom: 5px;
	font-weight: bold;
	font-size: 14px;
	color: #000000;
	text-decoration: none;
	border-bottom: 1px solid black;
}

.cards__date {
	font-weight: 400;
	font-size: 18px;
}

.cards__shares {
	font-weight: 400;
	font-size: 18px;
}
</style>
