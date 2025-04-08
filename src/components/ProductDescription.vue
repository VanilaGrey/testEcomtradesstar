<script setup>
import IconButton from "./UIconButton.vue";
import productItems from "@/data/page-product.js";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
	<section class="product">
		<aside class="product__stats">
			<div
				class="product__stat"
				v-for="(product, index) in productItems"
				:key="index"
			>
				<icon-button class="product__icon" :icon="product.icon" />
				<span class="product__value">{{ product.value }}</span>
				<span class="product__label" v-if="product.label">{{
					t(product.label)
				}}</span>
			</div>
		</aside>

		<div class="product__content">
			<p class="product__paragraph">{{ t("product.p1") }}</p>
			<p class="product__paragraph">{{ t("product.p2") }}</p>

			<blockquote class="product__quote">
				{{ t("product.quote") }}
			</blockquote>

			<p class="product__paragraph">{{ t("product.p3") }}</p>
			<p class="product__paragraph">{{ t("product.p4") }}</p>

			<div class="product__section">
				<h2 class="product__title">{{ t("product.sectionTitle") }}</h2>
				<p class="product__paragraph">{{ t("product.p5") }}</p>
				<ul class="product__list">
					<li class="product__list-item">{{ t("product.list.0") }}</li>
					<li class="product__list-item">{{ t("product.list.1") }}</li>
					<li class="product__list-item">{{ t("product.list.2") }}</li>
				</ul>
			</div>

			<p class="product__paragraph">{{ t("product.p6") }}</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.product {
	display: flex;
	flex-direction: row;
	padding: 70px;
	font-family: "Helvetica Neue", sans-serif;
	color: $black;
	gap: 70px;

	&__stats {
		display: flex;
		flex-direction: column;
		min-width: 100px;
		font-size: 16px;
		color: $grey;
		gap: 10px;
	}

	&__stat {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__icon {
		&::before {
			background-color: $black;
			width: 20px;
			height: 20px;
		}
	}

	&__value {
		font-weight: 700;
	}

	&__label {
		font-size: 16px;
		color: $grey;
	}

	&__paragraph {
		font-weight: 400;
		font-size: 18px;
		margin-bottom: 24px;
		line-height: 183%;
	}

	&__quote {
		position: relative;
		font-weight: 700;
		font-size: 48px;
		margin: 80px 20px 40px 0;
		padding-left: 80px;

		&::before {
			content: "";
			position: absolute;
			top: 20px;
			left: 0;
			display: block;
			mask-image: var(--icon-quotes);
			mask-repeat: no-repeat;
			mask-size: 100%;
			background-color: grey;
			width: 42px;
			height: 42px;
		}
	}

	&__section {
		margin-top: 80px;
	}

	&__title {
		font-weight: 700;
		font-size: 48px;
		margin-bottom: 24px;
	}

	&__list {
		padding-left: 40px;
		list-style: disc;
		margin: 24px;
	}

	&__list-item {
		margin-bottom: 0.5rem;
	}
}
</style>
