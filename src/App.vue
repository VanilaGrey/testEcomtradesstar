<template>
	<div class="page">
		<!-- Языковой переключатель -->
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

		<firstscreen-page />
		<router-view class="page__main" />
		<base-footer />
	</div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { RouterView } from 'vue-router';
// import BaseHeader from './components/BaseHeader.vue'
import FirstscreenPage from './components/FirstscreenPage.vue';
import BaseFooter from './components/BaseFooter.vue';

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
	display: flex;
	justify-content: flex-end;
	padding: 1rem;
	gap: 0.5rem;

	button {
		padding: 0.4rem 0.8rem;
		border: 1px solid #ccc;
		background-color: white;
		cursor: pointer;
		border-radius: 4px;

		&.active {
			background-color: #0070f3;
			color: white;
			border-color: #0070f3;
		}
	}
}
</style>
