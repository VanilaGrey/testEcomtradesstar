<script setup>
import HeaderItems from './BaseHeader.vue';
import ButtonItem from './UButton.vue';
</script>

<template>
	<div class="firstscreen">
		<HeaderItems />
		<div class="firstscreen__text">
			<p class="firstscreen__label">Inspiration for travel by real people</p>
			<span class="firstscreen__discription">Book smart, travel simple</span>
			<button-item class="firstscreen__button">
				Start planning your trip
			</button-item>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.firstscreen {
	position: relative;
	margin-bottom: 20px;
	background-image: url('/images/foto-1.jpg');
	background-position: center;
	background-size: cover;

	&__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 542px;
		padding: 140px 95px 125px;
	}

	&__label {
		margin: 0;
		font-weight: 700;
		font-size: 64px;
		text-align: center;
		color: #ffffff;
		text-transform: uppercase;
	}

	&__discription {
		font-size: 36px;
		color: #ffffff;
	}

	&__button {
		max-width: 320px;
		margin-top: 40px;
		color: #000000;
		text-transform: none;
		background-color: #ffffff;
		border-radius: 2px;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.39);
	}
}
</style>
