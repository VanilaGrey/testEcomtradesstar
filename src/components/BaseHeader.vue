<script setup>
import MenuItem from './HeaderMenu.vue';
import ButtonItem from './UButton.vue';
import IconButton from './UIconButton.vue';
</script>

<template>
	<header class="header">
		<div class="header__inner">
			<img
				class="header__logo"
				src="/images/logo.png"
				alt="logo"
				width="360px"
				height="49px"
				href="#"
			/>
			<menu-item />
			<div class="header__right">
				<icon-button icon="search"></icon-button>
				<button-item> CALL TO ACTION </button-item>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;

	&__inner {
		display: grid;
		align-items: center;
		grid-template-columns: 360px 1fr 280px;
		width: 100%;
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
