<script setup>
import destinationsItems from "@/data/destinations-items.js";
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
				:style="{ '--background-image': `url(${destination.image})` }"
			>
				<span class="destinations__card-title">{{ destination.title }}</span>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.destinations {
	padding: 180px 0 130px;

	&__title {
		font-weight: 700;
		font-size: 32px;
	}

	&__subtitle {
		font-weight: 700;
		font-size: 16px;
	}

	&__list {
		display: grid;
		justify-content: space-between;
		grid-template-columns: repeat(5, 1fr);
		margin-top: 30px;
		gap: 40px;
	}

	&__card {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: auto;
		min-height: 260px;
		padding: 10px;
		color: white;
		background-color: grey;
		background-image: var(--background-image);
		background-position: center;
		background-size: cover;
		cursor: pointer;
	}

	&__card-title {
		font-weight: 700;
		font-style: 24px;
	}
}
</style>
