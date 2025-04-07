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
				count="45"
			></icon-button>
			<icon-button class="footer__icon" icon="twitter" count="29"></icon-button>
			<icon-button
				class="footer__icon"
				icon="instagram"
				count="29"
			></icon-button>
			<icon-button class="footer__icon" icon="twitter" count="29"></icon-button>
			<icon-button class="footer__icon" icon="youtube" count="29"></icon-button>
		</div>
	</footer>
</template>

<style scoped>
.footer {
	display: flex;
	justify-content: space-between;
	padding: 40px;
	color: white;
	background: #111111;
}

.footer__socials {
	display: flex;
	gap: 30px;
}

.footer__title {
	margin-right: 15px;
}

.footer__company {
	margin-left: 15px;
}

.footer__icon {
	color: grey;
}

.footer__icon::before {
	width: 20px;
	height: 20px;
	background-color: grey;
	mask-position: center;
	mask-size: auto;
}
</style>
