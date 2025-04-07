<script setup>
import { defineProps, computed } from "vue";
import ButtonItem from "./UButton.vue";

const props = defineProps({
	showButton: {
		type: Boolean,
		default: true,
	},
	backgroundImage: {
		type: String,
		default: "../images/foto-1.jpg",
	},
	showMeta: {
		type: Boolean,
		default: false,
	},
	showBreadcrumb: {
		type: Boolean,
		default: false,
	},
	layout: {
		type: String,
		default: "default",
	},
});

const layoutClass = computed(() => {
	return props.layout === "second"
		? "firstscreen__text--second"
		: "firstscreen__text--default";
});
</script>
h

<template>
	<div
		class="firstscreen"
		:style="{ '--background-image': `url(${props.backgroundImage})` }"
	>
		<div :class="['firstscreen__text', layoutClass]">
			<div class="firstscreen__breadcrumb" v-if="props.showBreadcrumb">
				Home &gt; Growth &gt;
				<strong>5 Efficient Rules How to Organize Your Working Place</strong>
			</div>
			<p class="firstscreen__label">Inspiration for travel by real people</p>
			<span class="firstscreen__discription">Book smart, travel simple</span>
			<button-item v-if="props.showButton" class="firstscreen__button">
				Start planning your trip
			</button-item>
			<span class="firstscreen__meta" v-if="props.showMeta">
				by Joanna Wellick · 2 minute read · 1.6K views · 1.2K shares
			</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.firstscreen {
	position: relative;
	margin-bottom: 20px;
	background-position: center;
	background-size: cover;
	background-image: var(--background-image);

	&__text--default {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 542px;
		padding: 140px 95px 125px;
		text-align: center;
	}

	&__text--second {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-start;
		min-height: 542px;
		padding: 110px 95px 100px;
		text-align: left;
	}

	&__label {
		margin: 0;
		font-weight: 700;
		font-size: 64px;
		color: #ffffff;
		text-transform: uppercase;
	}

	&__discription {
		font-size: 36px;
		color: #ffffff;
	}

	&__button {
		max-width: 320px;
		margin-top: 40px;
		color: #000000;
		text-transform: none;
		background-color: #ffffff;
		border-radius: 2px;
	}

	&__meta {
		padding: 20px;
		font-size: 14px;
		text-align: center;
		color: #ffffff;
		text-shadow: 0 0 3px #000000;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.39);
	}

	&__breadcrumb {
		position: absolute;
		top: 100px;
		left: 10px;
		padding: 20px 30px;
		font-size: 14px;
		color: #ffffff;
		text-shadow: 0 0 3px #000000;
	}
}
</style>
