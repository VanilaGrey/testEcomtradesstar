<script setup>
import socialItems from "@/data/social-items.js";
import IconButton from "./UIconButton.vue";
</script>

<template>
	<div class="social-stats">
		<div
			v-for="(item, index) in socialItems"
			:key="index"
			class="social-stats__item"
		>
			<icon-button class="social-stats__icon" :icon="item.icon" />

			<span class="social-stats__count">{{ item.count }}</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.social-stats {
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 20px 0;
	gap: 16px;

	&__item {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 14px;
		color: $black;
	}

	&__icon {
		width: 30px;
		height: 25px;

		&::before {
			width: 25px;
			height: 18px;
			background-color: $black;
			mask-size: auto;
		}
	}
}
</style>
