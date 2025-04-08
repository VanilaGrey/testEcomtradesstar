<script setup>
import ButtonItem from "./UButton.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
	<section class="banner">
		<div class="banner__content">
			<span class="banner__tag">{{ t("banner.textTag") }}</span>
			<h1 class="banner__title">
				{{ t("banner.title") }}
			</h1>
			<p class="banner__text">
				{{ t("banner.description") }}
			</p>
			<button-item class="banner__button">
				{{ t("banner.textButton") }}
			</button-item>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.banner {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: $white;
	background-image: url("/images/foto-2.jpg");
	background-position: center;
	background-size: cover;

	&__content {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 720px;
		padding: 150px 20px;
	}

	&__tag {
		padding: 8px 10px;
		font-weight: 700;
		font-size: 20px;
		color: $white;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 4px;
		backdrop-filter: blur(12px);
	}

	&__title {
		margin-bottom: 16px;
		font-weight: 700;
		font-size: 32px;
	}

	&__text {
		max-width: 520px;
		margin: 0;
		margin-bottom: 24px;
		font-size: 16px;
		color: $white-grey;
	}

	&__button {
		max-width: 320px;
		margin-top: 40px;
		color: $black;
		text-transform: none;
		background-color: $white;
		border-radius: 2px;

		&:hover {
			color: #5e45d6;
		}
	}
}
</style>
