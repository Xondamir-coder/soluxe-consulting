<template>
	<section class="hero">
		<span class="hero__title">
			{{ $t('hero-title-1') }}
		</span>
		<span class="hero__title align-left">
			{{ $t('hero-title-2') }}
		</span>
		<div class="hero__box">
			<span class="hero__title">
				{{ $t('hero-title-3') }}
			</span>
			<Ornament class="hero__ornament" />
		</div>
		<Circle ref="circleRef" class="hero__circle" />
	</section>
</template>

<script setup>
import Ornament from '../Ornament.vue';
import Circle from '../Circle.vue';
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const circleRef = ref();

onMounted(() => {
	// const el2 = document.getElementById('about-title');

	// const offsetX = rect2.left - rect1.left;
	// const offsetY = rect2.top - rect1.top;
	// console.log(offsetY);

	gsap.to('.hero__ornament', {
		rotate: 180,
		scrollTrigger: {
			trigger: '.hero',
			start: 'top top',
			scrub: 1
		}
	});
	// gsap.to('.hero__circle', {
	// 	top: () => el2.getBoundingClientRect().top + window.scrollY, // Move element1 vertically to element2's top position
	// 	left: () => el2.getBoundingClientRect().left,
	// 	width: 100,
	// 	height: 100,
	// 	scrollTrigger: {
	// 		trigger: '.hero',
	// 		start: 'center center',
	// 		endTrigger: '.after',
	// 		scrub: 1,
	// 		markers: true
	// 	}
	// });
});
</script>

<style scoped lang="scss">
// slide-appear from top
@keyframes slide-appear {
	0% {
		transform: translateY(30px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}
.hero {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	position: relative;
	& > *:not(.hero__circle) {
		animation: slide-appear 1s both;
		z-index: 2;
	}
	@media only screen and (max-width: 768px) {
		min-height: 50vh;
	}
	&__ornament {
		animation: rotate 2s;
	}
	&__box {
		animation-delay: 0.8s !important;
		display: flex;
		align-items: start;
		gap: max(1vw, 10px);
	}
	&__circle {
		position: absolute;
		top: 40%;
		left: 60%;
		width: 45rem;
		height: 45rem;
	}
	&__title {
		font-size: clamp(38px, 9vw, 140px);
		font-weight: 400;
		line-height: 1;
		@media only screen and (max-width: 768px) {
			line-height: 1.2;
		}
		&.align-left {
			align-self: flex-start;
			animation-delay: 0.4s;
		}
	}
}
</style>
