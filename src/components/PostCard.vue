<script setup>
import { useI18n } from "vue-i18n";
import cardItems from "@/data/card-items.js";
import IconButton from "./UIconButton.vue";

const { t } = useI18n();
</script>
<template>
	<div class="cards">
		<div v-for="(post, index) in cardItems" :key="index" class="cards__item">
			<div class="cards__wrapper">
				<div
					class="cards__image"
					:style="{ '--background-image': `url(${post.image})` }"
				></div>
				<div class="cards__tags">
					<span class="cards__tag">{{ t(`cards.${post.id}.tags1`) }}</span>
					<span class="cards__tag">{{ t(`cards.${post.id}.tags2`) }}</span>
				</div>
				<icon-button class="cards__icon" :icon="post.icon" />
			</div>

			<div class="cards__content">
				<h2 class="cards__title">{{ t(`cards.${post.id}.title`) }}</h2>
				<div class="cards__meta">
					<span class="cards__author">{{ t(`cards.${post.id}.author`) }}</span>
					<span class="cards__line">──</span>
					<span class="cards__date">{{ t(`cards.${post.id}.date`) }}</span>
					<span class="cards__dot">•</span>
					<icon-button
						class="cards__icon cards__icon--alter"
						icon="shares"
					></icon-button>
					<span class="cards__shares">{{ t(`cards.${post.id}.shares`) }}</span>
				</div>
				<p class="cards__description">
					{{ t(`cards.${post.id}.description`) }}
				</p>
				<a href="#" class="cards__link">{{ t("bigPost.featured.viewPost") }}</a>
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
	margin-bottom: 90px;

	&__item {
		display: flex;
		flex-direction: column;
		background-color: $white;
	}

	&__wrapper {
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

	&__image {
		width: 100%;
		min-height: 320px;
		background-image: var(--background-image);
		background-position: center;
		background-size: cover;
	}

	&__tags {
		position: absolute;
		top: 30px;
		left: 30px;
		display: flex;
		gap: 8px;
	}

	&__tag {
		padding: 8px 10px;
		font-weight: 700;
		font-size: 20px;
		color: $white;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: 4px;
		backdrop-filter: blur(12px);
	}

	&__content {
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		padding: 16px 0;
	}

	&__icon {
		position: absolute;
		top: 30px;
		right: 30px;
		border-radius: 200px;
		backdrop-filter: blur(12px);
		fill: rgba(255, 255, 255, 0.2);

		&--alter {
			position: relative;
			top: 0;
			right: 0;
			background-color: transparent;

			&::before {
				width: 18px;
				height: 18px;
				background-color: $grey;
			}
		}
	}

	&__author {
		font-weight: 700;
		font-size: 20px;
		color: $black;
		text-align: center;
	}

	&__title {
		margin: 0 0 12px;
		font-weight: 700;
		font-size: 42px;
	}

	&__meta {
		position: relative;
		display: flex;
		align-items: center;
		margin-bottom: 12px;
		font-size: 12px;
		color: $grey;
		gap: 8px;
	}

	&__dot {
		color: $grey;
	}

	&__line {
		color: $white-grey;
	}

	&__description {
		flex-grow: 1;
		margin-bottom: 16px;
		line-height: 150%;
		color: $black;
	}

	&__link {
		align-self: flex-start;
		padding-bottom: 5px;
		font-weight: bold;
		font-size: 14px;
		color: $black;
		text-decoration: none;
		border-bottom: 1px solid $black;
	}

	&__date {
		font-weight: 400;
		font-size: 16px;
		text-align: center;
	}

	&__shares {
		font-weight: 400;
		font-size: 16px;
		text-align: center;
	}
}
</style>
