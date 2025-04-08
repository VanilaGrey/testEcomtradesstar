<script setup>
import { defineProps, computed } from "vue";
import ButtonItem from "./UButton.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

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
				{{ t("firstscreen.breadcrumb") }} &nbsp; &gt; &nbsp;
				{{ t("firstscreen.breadcrumb1") }} &nbsp; &gt; &nbsp;
				<strong>{{ t("firstscreen.activebBeadcrumb") }}</strong>
			</div>
			<p class="firstscreen__label">
				{{ t("firstscreen.label") }}
			</p>
			<span class="firstscreen__discription">{{
				t("firstscreen.discription")
			}}</span>

			<button-item v-if="props.showButton" class="firstscreen__button">{{
				t("firstscreen.buttonText")
			}}</button-item>

			<span class="firstscreen__meta" v-if="props.showMeta">
				{{ t("firstscreen.author") }} <span>──</span>
				<span class="firstscreen__icon firstscreen__icon--watch">
					2 {{ t("firstscreen.time") }} <span>──</span>
				</span>
				<span class="firstscreen__icon firstscreen__icon--graphs">
					1.6K {{ t("firstscreen.shares") }} <span>──</span>
				</span>
				<span class="firstscreen__icon firstscreen__icon--facebook-1"> </span>
				<span class="firstscreen__icon firstscreen__icon--twitter"> </span>
				<span class="firstscreen__icon firstscreen__icon--pinterest">
					1.2K {{ t("firstscreen.views") }}
				</span>
			</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.firstscreen {
	position: relative;
	margin-bottom: 20px;
	background-image: var(--background-image);
	background-position: center;
	background-size: cover;

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
		color: $white;
		text-transform: uppercase;
	}

	&__discription {
		font-size: 36px;
		color: $white;
	}

	&__button {
		max-width: 320px;
		margin-top: 40px;
		color: $black;
		text-transform: none;
		background-color: $white;
		border-radius: 2px;
	}

	&__meta {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 20px 0;
		font-size: 14px;
		text-align: center;
		color: $white;
		text-shadow: 0 0 3px;
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
		color: $white;
		text-shadow: 0 0 3px $black;
	}

	&__icon {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		position: relative;
		font-size: 14px;

		&::before {
			content: "";
			position: relative;

			width: 32px;
			height: 32px;
			background-color: currentColor;
			-webkit-mask-repeat: no-repeat;
			mask-repeat: no-repeat;
			-webkit-mask-size: auto;
			mask-size: auto;
			-webkit-mask-position: center;
			mask-position: center;
		}
		&--watch::before {
			mask-image: var(--icon-watch);
		}
		&--graphs::before {
			mask-image: var(--icon-graphs);
		}
		&--pinterest::before {
			mask-image: var(--icon-pinterest);
		}
		&--twitter::before {
			mask-image: var(--icon-twitter);
		}
		&--facebook-1::before {
			mask-image: var(--icon-facebook-1);
		}
	}
}
</style>
