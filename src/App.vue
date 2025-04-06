<template>
	<div class="page">
		<firstscreen-page />
		<router-view class="page__main" />
		<base-footer />
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import FirstscreenPage from './components/FirstscreenPage.vue';
import BaseFooter from './components/BaseFooter.vue';
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
</style>
