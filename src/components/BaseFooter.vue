<script setup>
import IconButton from "./UIconButton.vue";
import footerItems from "@/data/footer-items.js";
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
				v-for="(item, index) in footerItems"
				:key="index"
				class="footer__icon"
				:icon="item.icon"
				:count="item.count"
			/>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	display: flex;
	justify-content: space-between;
	padding: 40px;
	color: $white;
	background: $black;

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
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
		color: $grey;
		min-height: 50px;

		&::before {
			width: 20px;
			height: 20px;
			background-color: $grey;
			mask-position: center;
			mask-size: auto;
		}
	}
}
</style>
