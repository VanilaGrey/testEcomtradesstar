<template>
	<div class="page">
		<div class="page__lang-switcher">
			<button
				v-for="lng in availableLocales"
				:key="lng"
				:class="{ active: lng === locale }"
				@click="locale = lng"
			>
				{{ lng.toUpperCase() }}
			</button>
		</div>
		<base-header />
		<router-view class="page__main" />
		<base-footer />
	</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { RouterView } from "vue-router";
import BaseHeader from "./components/BaseHeader.vue";
import BaseFooter from "./components/BaseFooter.vue";

const { locale, availableLocales } = useI18n();
</script>

<style lang="scss" scoped>
.page {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	overflow: hidden auto;
}

.page__main {
	flex-grow: 1;
}

.page__lang-switcher {
	position: fixed;
	z-index: 5;
	display: flex;
	justify-content: flex-end;
	padding: 1rem;
	gap: 0.5rem;

	button {
		padding: 0.4rem 0.8rem;
		background-color: $white;
		border: 1px solid $grey;
		border-radius: 4px;
		cursor: pointer;

		&.active {
			color: white;
			background-color: #0070f3;
			border-color: #0070f3;
		}
	}
}
</style>
