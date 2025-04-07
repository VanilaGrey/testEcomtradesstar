<script setup>
import socialItems from '@/data/social-items.js';
</script>

<template>
	<div class="social-stats">
		<div
			v-for="(item, index) in socialItems"
			:key="index"
			class="social-stats__item"
		>
			<img :src="item.icon" :alt="item.name" class="social-stats__icon" />
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
		color: #000000;
	}

	&__icon {
		width: 18px;
		height: 18px;
		object-fit: contain;
	}
}
</style>
