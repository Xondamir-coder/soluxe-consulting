<template>
	<div :class="{ shown: isPreloaderShown }" class="preloader">
		<PreloaderLogo class="preloader__logo" />
		<div class="preloader__banner"></div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PreloaderLogo from './PreloaderLogo.vue';
import gsap from 'gsap';

// Define ref for the child component
const isPreloaderShown = ref(true);

onMounted(() => {
	const length = document.querySelector('.preloader__logo .icon').getTotalLength();
	console.log(length);
	gsap.timeline()
		.to('.preloader__logo .icon', {
			fill: '#C29B69',
			duration: 2,
			delay: 1
		})
		.from('.preloader__logo', {
			scale: 2,
			y: 50
		})
		.from(
			'.preloader__logo .text',
			{
				transformOrigin: 'center',
				scale: 0,
				opacity: 0
			},
			'-=.5'
		)
		.from('.preloader__banner', {
			x: '100%',
			duration: 1
		})
		.to('.preloader', {
			opacity: 0,
			display: 'none',
			onComplete: () => {
				isPreloaderShown.value = false;
			}
		});

	gsap.fromTo(
		'.preloader__logo .icon',
		{
			strokeDasharray: length,
			strokeDashoffset: length
		},
		{
			strokeDashoffset: 0,
			duration: 40
		}
	);
});
</script>

<style lang="scss" scoped>
.preloader {
	overflow: hidden;
	position: fixed;
	inset: 0;
	background-color: #013d45;
	z-index: 101;
	display: grid;
	place-content: center;
	&__banner {
		position: absolute;
		inset: 0;
		background-color: #fff;
	}
}
</style>
