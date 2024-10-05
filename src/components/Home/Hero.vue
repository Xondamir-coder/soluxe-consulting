<template>
	<section class="hero">
		<span class="hero__title">
			{{ $t('hero-title-1') }}
		</span>
		<span class="hero__title delay">
			{{ $t('hero-title-2') }}
		</span>
		<div class="hero__box">
			<span class="hero__title">
				{{ $t('hero-title-3') }}
			</span>
			<Ornament class="hero__ornament" />
		</div>
		<Circle ref="circleRef" class="hero__circle" id="hero-circle" />
	</section>
</template>

<script setup>
import Ornament from '../Ornament.vue';
import Circle from '../Circle.vue';
import gsap from 'gsap';
import { onMounted, ref } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
const circleRef = ref();

onMounted(() => {
	gsap.to('.hero__ornament', {
		rotate: 180,
		scrollTrigger: {
			trigger: '.hero',
			start: 'top top',
			scrub: 1
		}
	});

	// changing color and size
	gsap.to('#hero-circle', {
		width: 100,
		height: 100,
		filter: 'blur(0px)',
		scrollTrigger: {
			trigger: '.hero',
			endTrigger: '.about',
			start: 'center center',
			end: 'top center',
			scrub: 1
		}
	});

	// pulsating effect forever
	gsap.to('#hero-circle', {
		scale: 1.5,
		ease: 'none',
		yoyo: true,
		duration: 2,
		repeat: -1
	});

	const afterHeight = document.querySelector('.after').scrollHeight;
	const aboutHeight = document.querySelector('.about').scrollHeight;
	const servicesHeight = document.querySelector('.services').scrollHeight;
	const circleHeight = document.querySelector('#hero-circle').scrollHeight;

	// move till cards
	// Create a timeline
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.hero',
			endTrigger: '.services',
			start: 'center center',
			end: 'bottom center',
			scrub: 1
		}
	});

	const afterPart = afterHeight + circleHeight;

	// First part: animate from the start to 20vw
	tl.to('#hero-circle', {
		motionPath: {
			path: [
				{ x: '30vw', y: afterHeight / 2 },
				{ x: '20vw', y: afterPart }
			],
			autoRotate: false
		},
		ease: 'power1'
	});

	// Second part: resume from 20vw to -45vw
	tl.to(
		'#hero-circle',
		{
			width: 200,
			height: 200,
			motionPath: {
				path: [
					{ x: '-25vw', y: afterPart + aboutHeight / 2 },
					{
						x: '-45vw',
						y: afterPart + aboutHeight / 2 + servicesHeight
					}
				],
				autoRotate: false
			},
			ease: 'power1'
		},
		'+=.3'
	);
	// constant y-axis movement
	// lenis.on('scroll', e => {
	// 	gsap.to('#hero-circle', {
	// 		y: scrollY
	// 	});
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
body:not(:has(.preloader.shown)) {
	.hero > *:not(.hero__circle) {
		animation-play-state: running;
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
		animation-play-state: paused;
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
		text-transform: uppercase;
		text-align: center;
		@media only screen and (max-width: 768px) {
			line-height: 1.2;
		}
		&.delay {
			animation-delay: 0.4s;
		}
	}
}
</style>
