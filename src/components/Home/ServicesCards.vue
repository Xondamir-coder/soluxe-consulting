<template>
	<section class="services__cards">
		<Cards :cards="cards">
			<Circle id="cards-circle" class="services__circle" />
		</Cards>
	</section>
</template>

<style lang="scss" scoped>
.services__circle {
	position: absolute;
	top: 10%;
	width: 50px;
	height: 50px;
	filter: blur(0);
	// always last column and last row
	grid-column: 3 / 4;
	grid-row: 2/3;
	justify-self: center;
	@media only screen and (max-width: 500px) {
		display: none;
	}
}
.services__cards {
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	gap: 40px;
}
</style>

<script setup>
import Cards from '../Cards.vue';
import { computed, onMounted } from 'vue';
import servicesImg1 from '@/images/services-1.avif';
import servicesImg2 from '@/images/services-2.avif';
import servicesImg3 from '@/images/services-3.avif';
import servicesImg4 from '@/images/services-4.avif';
import servicesImg5 from '@/images/services-5.avif';
import { i18n } from '@/locales';
import Circle from '../Circle.vue';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

const cards = computed(() => [
	{
		img: servicesImg1,
		label: i18n.global.t('cards-label-1'),
		name: i18n.global.t('cards-name-1'),
		text: i18n.global.t('cards-text-1')
	},
	{
		img: servicesImg2,
		label: i18n.global.t('cards-label-2'),
		name: i18n.global.t('cards-name-2'),
		text: i18n.global.t('cards-text-2')
	},
	{
		img: servicesImg3,
		label: i18n.global.t('cards-label-3'),
		name: i18n.global.t('cards-name-3'),
		text: i18n.global.t('cards-text-3')
	},
	{
		img: servicesImg4,
		label: i18n.global.t('cards-label-4'),
		name: i18n.global.t('cards-name-4'),
		text: i18n.global.t('cards-text-4')
	},
	{
		img: servicesImg5,
		label: i18n.global.t('cards-label-5'),
		name: i18n.global.t('cards-name-5'),
		text: i18n.global.t('cards-text-5')
	}
]);

onMounted(() => {
	gsap.to('#cards-circle', {
		scale: 1.5,
		ease: 'none',
		yoyo: true,
		duration: 2,
		repeat: -1
	});

	const cardHeight = document.querySelector('.card').scrollHeight;
	const approachMarginTop = document
		.querySelector('.approach')
		.computedStyleMap()
		.get('margin-top').value;
	const approachCircleHeight = document.querySelector('.approach__circle').scrollHeight;
	const finalY = approachMarginTop + cardHeight + approachCircleHeight / 2;
	gsap.to('#cards-circle', {
		scrollTrigger: {
			trigger: '.services__cards',
			endTrigger: '.approach',
			start: 'center 30%',
			end: 'top top',
			scrub: 1
		},
		motionPath: {
			path: [
				{ x: '10vw', y: finalY / 2 },
				{ x: '-30vw', y: finalY / 1.5 },
				{ x: '-55vw', y: finalY }
			],
			autoRotate: false
		}
	});
});
</script>
