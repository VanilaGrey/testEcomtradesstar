<script setup>
import IconButton from './UIconButton.vue';
</script>

<template>
	<footer class="footer">
		<div class="footer__left">
			<p>
				Designed & Developed by
				<strong class="footer__company">XP DESIGN</strong>
			</p>
		</div>
		<div class="footer__socials">
			<icon-button
				class="footer__icon"
				icon="facebook"
				:count="29"
			></icon-button>
			<icon-button
				class="footer__icon"
				icon="twitter"
				:count="'70К'"
			></icon-button>
			<icon-button class="footer__icon" icon="instagram" :count="40"
				><span>29</span></icon-button
			>
			<icon-button
				class="footer__icon"
				icon="twitter"
				:count="'13К'"
			></icon-button>
			<icon-button
				class="footer__icon"
				icon="youtube"
				:count="'168К'"
			></icon-button>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	display: flex;
	justify-content: space-between;
	padding: 40px;
	color: white;
	background: #111111;

	&__socials {
		display: flex;
		gap: 30px;
	}

	&__title {
		margin-right: 15px;
	}

	&__company {
		margin-left: 15px;
	}

	&__icon {
		color: grey;

		&::before {
			width: 20px;
			height: 20px;
			background-color: grey;
			mask-position: center;
			mask-size: auto;
		}
	}
}
</style>
