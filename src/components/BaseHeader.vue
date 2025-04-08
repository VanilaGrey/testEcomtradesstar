<script setup>
import MenuItem from "./HeaderMenu.vue";
import ButtonItem from "./UButton.vue";
import IconButton from "./UIconButton.vue";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
	<header class="header">
		<div class="header__inner">
			<router-link to="/">
				<img
					class="header__logo"
					src="/images/logo.png"
					alt="logo"
					width="360"
					height="49"
				/>
			</router-link>
			<menu-item />
			<div class="header__right">
				<icon-button icon="search"></icon-button>
				<button-item>{{ t("buttonText") }}</button-item>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&__inner {
		position: absolute;
		right: 0;
		left: 0;
		z-index: 2;
		display: grid;
		align-items: center;
		grid-template-columns: 360px 1fr 280px;
		width: auto;
		margin: 40px 40px 0;
	}

	&__logo {
		cursor: pointer;
	}

	&__right {
		display: flex;
		align-items: center;
		gap: 24px;
	}
}
</style>
