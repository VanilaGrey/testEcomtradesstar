<script setup>
import ButtonItem from './UButton.vue';
</script>

<template>
	<section class="banner">
		<div class="banner__content">
			<span class="banner__tag">Travel</span>
			<h1 class="banner__title">
				Richird Norton photorealistic rendering as real photos
			</h1>
			<p class="banner__text">
				Progressively incentivize cooperative systems through technically sound
				functionalities. The credibly productive seamless data.
			</p>
			<button-item class="banner__button">
				Start planning your trip
			</button-item>
		</div>
	</section>
</template>

<style scoped>
.banner {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #ffffff;
	background-image: url('/images/foto-2.jpg');
	background-position: center;
	background-size: cover;
}

.banner__content {
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 720px;
	padding: 150px 20px;
}

.banner__tag {
	padding: 8px 10px;
	font-weight: 700;
	font-size: 20px;
	color: #ffffff;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 4px;
	backdrop-filter: blur(12px);
}

.banner__title {
	margin-bottom: 16px;
	font-weight: bold;
	font-size: 32px;
}

.banner__text {
	max-width: 520px;
	margin: 0;
	margin-bottom: 24px;
	font-size: 16px;
	color: #dddddd;
}

.banner__button {
	max-width: 320px;
	margin-top: 40px;
	color: #000000;
	text-transform: none;
	background-color: #ffffff;
	border-radius: 2px;
}

.banner__button:hover {
	color: #5e45d6;
}
</style>
