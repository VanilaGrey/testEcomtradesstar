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

<style lang="scss" scoped>
.product {
	display: flex;
	flex-direction: row;
	padding: 2rem;
	line-height: 1.6;
	font-family: 'Helvetica Neue', sans-serif;
	color: #222222;
	gap: 2rem;

	&__stats {
		display: flex;
		flex-direction: column;
		min-width: 100px;
		font-size: 0.85rem;
		color: #666666;
		gap: 1rem;
	}

	&__stat {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__icon {
		font-size: 1.2rem;
	}

	&__value {
		font-weight: bold;
	}

	&__label {
		font-size: 0.75rem;
		color: #999999;
	}

	&__link {
		font-weight: 600;
		color: #0070f3;
		cursor: pointer;
	}

	&__socials {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-size: 0.85rem;
	}

	&__social {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	&__content {
		max-width: 700px;
	}

	&__paragraph {
		margin-bottom: 1rem;
		font-size: 1rem;
	}

	&__quote {
		margin: 2rem 0 1.5rem;
		padding-left: 1.2rem;
		font-weight: bold;
		font-size: 1.3rem;
		line-height: 1.5;
		border-left: 5px solid #cccccc;
	}

	&__section {
		margin-top: 2rem;
	}

	&__title {
		margin-bottom: 0.5rem;
		font-weight: 700;
		font-size: 1.1rem;
	}

	&__list {
		padding-left: 1.5rem;
		list-style: disc;
	}

	&__list-item {
		margin-bottom: 0.5rem;
	}
}
</style>
