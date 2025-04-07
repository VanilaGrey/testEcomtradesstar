<template>
	<section class="product">
		<aside class="product__stats">
			<div class="product__stat">
				<span class="product__icon">📊</span>
				<span class="product__value">1.6K</span>
				<span class="product__label">{{ t("product.stats.views") }}</span>
			</div>
			<div class="product__stat">
				<span class="product__icon">🔗</span>
				<span class="product__value">996K</span>
				<span class="product__label">{{ t("product.stats.shares") }}</span>
			</div>
			<div class="product__stat">
				<span class="product__icon">📌</span>
				<span class="product__value product__link"
					>{{ t("product.stats.from") }} $321</span
				>
			</div>
			<div class="product__socials">
				<span class="product__social">📘 125</span>
				<span class="product__social">🐦 425</span>
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

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped>
.product {
	display: flex;
	flex-direction: row;
	gap: 2rem;
	padding: 2rem;
	font-family: "Helvetica Neue", sans-serif;
	color: #222;
	line-height: 1.6;
}

.product__stats {
	min-width: 100px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	font-size: 0.85rem;
	color: #666;
}

.product__stat {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.product__icon {
	font-size: 1.2rem;
}

.product__value {
	font-weight: bold;
}

.product__label {
	font-size: 0.75rem;
	color: #999;
}

.product__link {
	color: #0070f3;
	cursor: pointer;
	font-weight: 600;
}

.product__socials {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	font-size: 0.85rem;
}

.product__social {
	display: flex;
	align-items: center;
	gap: 0.25rem;
}

.product__content {
	max-width: 700px;
}

.product__paragraph {
	margin-bottom: 1rem;
	font-size: 1rem;
}

.product__quote {
	font-weight: bold;
	font-size: 1.3rem;
	margin: 2rem 0 1.5rem;
	padding-left: 1.2rem;
	border-left: 5px solid #ccc;
	line-height: 1.5;
}

.product__section {
	margin-top: 2rem;
}

.product__title {
	font-size: 1.1rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
}

.product__list {
	padding-left: 1.5rem;
	list-style: disc;
}

.product__list-item {
	margin-bottom: 0.5rem;
}
</style>
