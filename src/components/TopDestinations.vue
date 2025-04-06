<script setup>
import destinationsItems from '@/data/destinations-items.js';
</script>

<template>
	<section class="destinations">
		<h2 class="destinations__title">Top Destinations</h2>
		<p class="destinations__subtitle">
			Tick one more destination off of your bucket list with one of our most
			popular vacations in 2022
		</p>
		<div class="destinations__list">
			<div
				v-for="(destination, index) in destinationsItems"
				:key="index"
				class="destinations__card"
				:style="{ backgroundImage: `url(${destination.image})` }"
			>
				<span class="destinations__card-title">{{ destination.title }}</span>
			</div>
		</div>
	</section>
</template>

<style scoped>
.destinations {
	padding: 180px 0 130px;
}

.destinations__title {
	font-weight: 700;
	font-size: 32px;
}

.destinations__subtitle {
	font-weight: 700;
	font-size: 16px;
}

.destinations__list {
	display: grid;
	justify-content: space-between;
	grid-template-columns: repeat(5, 1fr);
	margin-top: 30px;
	gap: 40px;
}

.destinations__card {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	min-height: 260px;
	padding: 10px;
	color: white;
	background-position: center;
	background-size: cover;
	cursor: pointer;
}

.destinations__card-title {
	font-weight: 700;
	font-style: 24px;
}
</style>
