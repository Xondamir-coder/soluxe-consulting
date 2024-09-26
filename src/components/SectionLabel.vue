<template>
	<div class="label">
		<span class="label__text"><slot /></span>
	</div>
</template>

<style lang="scss" scoped>
.label {
	padding: 6px 0.9rem;
	display: inline-block;
	background-color: rgb(255, 255, 255);
	border-radius: 20px;
	border-width: 1px;
	border: 1px solid var(--border-grey);
	align-self: flex-start;
	&__text {
		color: rgb(0, 0, 0, 0.7);
		letter-spacing: 0.4px;
		font-size: max(0.8rem, 12px);
		text-transform: uppercase;
	}
}
</style>
