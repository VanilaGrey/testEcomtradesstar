<template>
	<button class="button">
		<slot />
	</button>
</template>

<style scoped lang="scss">
.button {
	width: 100%;
	padding: 18px 40px;
	font-weight: 700;
	font-size: 16px;
	color: $white;
	text-transform: uppercase;
	background-color: $black;
	border: none;
	border-radius: 2px;
	cursor: pointer;
}
</style>
