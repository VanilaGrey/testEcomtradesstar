<script setup>
import PostItem from "./PostItem.vue";
import mangaItems from "@/data/manga-items.js";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
	<section class="manga-reads">
		<h3 class="manga-reads__title">{{ t("mangaReads.title") }}</h3>
		<div class="manga-reads__list">
			<post-item
				v-for="(post, index) in mangaItems"
				:key="index"
				:post="post"
				class="manga-reads__item"
			/>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.manga-reads {
	max-width: 700px;
	padding: 15px 40px 30px;
	border: 1px solid grey;

	&__list {
		display: flex;
		flex-direction: column;
		gap: 45px;
	}

	&__item {
		display: flex;
		gap: 25px;
	}
}
</style>
