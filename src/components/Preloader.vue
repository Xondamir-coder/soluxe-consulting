<template>
	<div :class="{ shown: isPreloaderShown }" class="preloader">
		<PreloaderLogo ref="logo" />
		<div class="preloader__banner"></div>
	</div>
</template>

<script setup>
import { onMounted, ref, useTemplateRef } from 'vue';
import PreloaderLogo from './PreloaderLogo.vue';
import gsap from 'gsap';

// Define ref for the child component
const logoRef = useTemplateRef('logo');
const isPreloaderShown = ref(true);

onMounted(() => {
	const paths = Array.from(logoRef.value.logo.querySelectorAll('path'));
	const pathLengths = paths.map(path => path.getTotalLength());
	pathLengths.forEach((length, i) => {
		const fillColor = paths[i].getAttribute('stroke');
		gsap.timeline({
			onComplete: () => {
				isPreloaderShown.value = false;
			}
		})
			.to(paths[i], {
				fill: fillColor,
				delay: 1.5,
				duration: 1.5
			})
			.to(logoRef.value.logo, {
				opacity: 0,
				duration: 0.5,
				ease: 'none'
			})
			.fromTo(
				'.preloader__banner',
				{
					x: '100%'
				},
				{
					x: '-100%',
					duration: 1
				},
				'-=.5'
			)
			.to('.preloader', {
				opacity: 0,
				display: 'none'
			});

		// .to('.preloader', {
		// 	opacity: 0
		// });
		gsap.fromTo(
			paths[i],
			{
				strokeDashoffset: length,
				strokeDasharray: length
			},
			{
				strokeDashoffset: 0,
				duration: 25
			}
		);
	});
});
</script>

<style lang="scss" scoped>
.preloader {
	overflow: hidden;
	position: fixed;
	inset: 0;
	background-color: #fff;
	z-index: 101;
	display: grid;
	place-content: center;
	&__banner {
		position: absolute;
		inset: 0;
		background-color: var(--yellow);
	}
}
</style>
