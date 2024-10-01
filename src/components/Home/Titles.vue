<template>
	<section class="container" id="titles">
		<h1 class="title" v-for="i in 2" :key="i">{{ $t(`title-${i}`) }}</h1>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
// animation for titles to move infinitiely
@keyframes move {
	0% {
		transform: translateX(200px);
	}
	100% {
		transform: translateX(calc(-1500px - 12vw));
	}
}
.title {
	text-transform: uppercase;
	font-size: max(10vw, 80px);
	text-wrap: nowrap;
	white-space: nowrap;
	animation: move 60s linear infinite alternate;
	&:first-of-type {
		color: var(--border-grey);
	}
}
.container {
	margin-top: 5rem;
	display: flex;
	overflow: hidden;
	gap: 50px;
	border-bottom: 2px solid var(--border-grey);
}
</style>
