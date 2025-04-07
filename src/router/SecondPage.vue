<script setup>
import ProductDescription from '../components/ProductDescription.vue';
import FirstscreenPage from '../components/FirstscreenPage.vue';
</script>

<template>
	<main class="main">
		<FirstscreenPage
			layout="second"
			:showButton="false"
			backgroundImage="/images/foto-8.jpg"
			:showMeta="true"
			:showBreadcrumb="true"
		>
		</FirstscreenPage>
		<div class="container">
			<product-description />
		</div>
	</main>
</template>
