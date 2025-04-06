<script setup>
import SocialIcon from './SocialIcon.vue'; // Импортируйте компонент социальных иконок
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
			<SocialIcon icon="/images/icons/icon-facebook.svg" count="29" />
			<SocialIcon icon="/images/icons/icon-twitter.svg" count="29" />
			<SocialIcon icon="/images/icons/icon-instagram.svg" count="29" />
			<SocialIcon icon="/images/icons/icon-twitter.svg" count="29" />
			<SocialIcon icon="/images/icons/icon-youtube.svg" count="29" />
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
</style>
