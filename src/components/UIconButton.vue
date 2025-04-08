<script setup>
defineProps({
	icon: {
		type: String,
		required: true,
	},
	count: {
		type: [Number, String],
		default: null,
	},
});
</script>

<template>
	<button
		class="icon-button"
		type="button"
		:style="{ '--icon': `var(--icon-${icon})` }"
	>
		<span v-if="$slots.default" class="visually-hidden">
			<slot></slot>
		</span>
		<span v-if="count !== null" class="icon-button__count">{{ count }}</span>
	</button>
</template>

<style scoped lang="scss">
.icon-button {
	position: relative;
	width: 36px;
	height: 36px;
	background-color: transparent;
	border: none;
	border-radius: 12px;
	cursor: pointer;

	&::before {
		content: '';
		display: block;
		mask: var(--icon);
		mask-repeat: no-repeat;
		width: 32px;
		height: 37px;
		mask-size: 100%;
		background-color: $white;
	}
}
</style>
