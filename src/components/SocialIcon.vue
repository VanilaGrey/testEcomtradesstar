<template>
	<div class="social-icon">
		<img :src="icon" alt="Social Icon" class="social-icon__image" />
		<span class="social-icon__count">{{ count }}</span>
	</div>
</template>

<script setup>
defineProps({
	icon: {
		type: String,
		required: true,
	},
	count: {
		type: String,
		required: true,
	},
});
</script>

<style scoped>
.social-icon {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin-top: -20px;
	cursor: pointer;
}

.social-icon__image {
	width: 15px;
	height: 15px;
	padding: 1px;
	background-color: grey;
	border-radius: 50%;
}

.social-icon__count {
	font-weight: 700;
	font-size: 14px;
	color: grey;
}
</style>
