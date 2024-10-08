<template>
	<section class="approach">
		<div class="approach__content">
			<span class="approach__title" v-for="i in 3" :key="i">
				{{ $t(`approach-title-${i}`) }}
			</span>
		</div>
		<Circle id="approach-circle" class="approach__circle" />
	</section>
</template>

<style lang="scss" scoped>
.approach {
	margin-top: 10rem;
	padding: 10vw;
	border: 1px solid var(--border-grey);
	backdrop-filter: blur(20px);
	border-radius: 50px;
	display: grid;
	align-content: center;
	justify-content: end;
	min-height: 100vh;
	// z-index: 10;
	// position: relative;
	background-color: rgba(255, 255, 255, 1);
	@media only screen and (max-width: 768px) {
		min-height: 50vh;
		padding: 5vw;
	}

	&__circle {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: max(300px, 40vw);
		height: max(300px, 40vw);
	}
	&__content {
		display: flex;
		flex-direction: column;
		align-items: end;
		z-index: 1;
	}
	&__title {
		font-weight: 500;
		font-size: clamp(32px, 7vw, 70px);
		line-height: 1.2;
		text-align: center;
		letter-spacing: 0.4px;
		text-transform: uppercase;
		&:first-of-type {
			padding-right: -3.5vw;
		}
		&:nth-of-type(2) {
			padding-right: -5vw;
		}
	}
}
</style>

<script setup>
import gsap from 'gsap';
import Circle from '../Circle.vue';
import { onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// Helper function to calculate height including margins
const getHeightWithMargins = element => {
	const style = window.getComputedStyle(element);
	const height = element.offsetHeight;
	const marginTop = parseFloat(style.marginTop);
	const marginBottom = parseFloat(style.marginBottom);
	return height + marginTop + marginBottom;
};

onMounted(() => {
	// GSAP animation for approach content
	gsap.from(Array.from(document.querySelector('.approach__content').children), {
		opacity: 0,
		x: -30,
		filter: 'blur(20px)',
		ease: 'power4.out',
		stagger: 0.2,
		scrollTrigger: {
			trigger: '.approach__content',
			start: 'top 80%',
			end: 'bottom 35%',
			scrub: 1
		}
	});

	// Circle size adjustment and blur removal
	gsap.to('#approach-circle', {
		filter: 'blur(0px)',
		width: '10rem',
		height: '10rem',
		scrollTrigger: {
			trigger: '#approach-circle',
			start: 'top top',
			scrub: 1
		}
	});

	// Retrieve heights and margin
	const approachHeight = getHeightWithMargins(document.querySelector('.approach'));
	const industriesHeight = getHeightWithMargins(document.querySelector('.industries'));
	const uzbHeight = getHeightWithMargins(document.querySelector('.uzb'));
	const sectorsHeight = document.querySelector('.sectors').scrollHeight;

	// Calculate margin for contact section
	const contactMargin = parseFloat(
		window.getComputedStyle(document.querySelector('.contact')).marginTop
	);

	// Define key motion points for the circle
	const motionPathPoints = [
		{ x: '25vw', y: approachHeight },
		{ x: '10vw', y: approachHeight + industriesHeight - 200 },
		{ x: '5vw', y: approachHeight + industriesHeight },
		{ x: '5vw', y: approachHeight + industriesHeight + uzbHeight - 300 },
		{ x: '5vw', y: approachHeight + industriesHeight + uzbHeight - 150 },
		{ x: '25vw', y: approachHeight + industriesHeight + uzbHeight },
		{ x: '35vw', y: approachHeight + industriesHeight + uzbHeight + sectorsHeight - 400 },
		{ x: '45vw', y: approachHeight + industriesHeight + uzbHeight + sectorsHeight - 300 },
		{ x: '40vw', y: approachHeight + industriesHeight + uzbHeight + sectorsHeight - 200 },
		{ x: '25vw', y: approachHeight + industriesHeight + uzbHeight + sectorsHeight - 100 },
		{
			x: '20vw',
			y: approachHeight + industriesHeight + uzbHeight + sectorsHeight + contactMargin
		}
	];

	// GSAP motion path animation for the circle
	gsap.to('#approach-circle', {
		ease: 'none',
		motionPath: {
			path: motionPathPoints
		},
		scrollTrigger: {
			trigger: '.approach',
			endTrigger: '.contact',
			start: 'top center',
			end: 'bottom center',
			scrub: 1
		}
	});
	gsap.to('#approach-circle', {
		scale: 0.8,
		ease: 'none',
		yoyo: true,
		duration: 2,
		repeat: -1
	});
	gsap.to('#approach-circle', {
		rotate: 360,
		ease: 'none',
		yoyo: true,
		duration: 20,
		repeat: -1
	});
});
</script>
