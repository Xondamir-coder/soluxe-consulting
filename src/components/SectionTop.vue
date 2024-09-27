<template>
	<div class="top" ref="topRef">
		<div class="border"></div>
		<SectionLabel><slot /></SectionLabel>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SectionLabel from './SectionLabel.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const topRef = ref();

onMounted(() => {
	gsap.from(topRef.value, {
		opacity: 0,
		scaleX: 0.3,
		scrollTrigger: {
			trigger: topRef.value,
			start: 'top 85%',
			end: 'bottom 65%',
			scrub: 1
		}
	});
});
</script>

<style lang="scss" scoped>
.border {
	height: 1px;
	background-color: var(--border-grey);
	width: 100%;
}
.top {
	display: flex;
	flex-direction: column;
	gap: max(1.5vw, 10px);
}
</style>
