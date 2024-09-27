<template>
	<section class="cards">
		<SectionLabel>01 / 05</SectionLabel>
		<ul class="cards__list">
			<li class="cards__item" v-for="({ img, label, text, name }, i) in cards" :key="img">
				<div class="cards__item-number">{{ i + 1 }}</div>
				<img width="400" height="400" :src="img" :alt="name" class="cards__image" />
				<div class="cards__item-label">
					<span class="cards__item-label-text">{{ label }}</span>
				</div>
				<h3 class="cards__item-name">
					{{ name }}
				</h3>
				<div class="cards__item-container">
					<p class="cards__item-text">{{ text }}</p>
				</div>
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
@mixin hidden {
	@media only screen and (min-width: 768px) {
		transition: transform 0.7s;
		transform: translateY(50px);
	}
}
@mixin shown {
	transform: translateY(0);
}
.cards {
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	gap: 40px;
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 32px;
	}
	&__item {
		padding: max(2vw, 20px);
		border: 1px solid var(--border-grey);
		border-radius: 20px;
		display: grid;
		justify-items: start;
		gap: 1rem;
		@media only screen and (min-width: 768px) {
			&:hover > * {
				@include shown;
			}
			&:hover .cards__item-container {
				visibility: visible;
				filter: blur(0);
				opacity: 1;
			}
		}

		&-number {
			margin-bottom: 10px;
			font-family: var(--font-cambay);
			background-color: var(--black);
			border-radius: 50%;
			width: 50px;
			height: 50px;
			display: grid;
			place-content: center;
			color: #fff;
		}
		&-container {
			@media only screen and (min-width: 768px) {
				opacity: 0;
				visibility: hidden;
				filter: blur(10px);
				transform: translateY(50px);
				transition: all 0.7s;
			}
		}
		&-text {
			font-size: 0.8rem;
			font-family: var(--font-cambay);
			line-height: 1.4;
			color: rgb(0, 0, 0, 0.7);
		}
		&-name {
			font-size: 1.6rem;
			font-weight: 400;
			@include hidden;
		}
		&-label {
			border-radius: 100px;
			border: inherit;
			align-self: flex-start;
			padding: 4px 1.3rem;
			font-size: 0.8rem;
			color: rgb(0, 0, 0, 0.6);
			@include hidden;
		}
	}
	&__image {
		width: 100%;
		height: auto;
		object-fit: cover;
		@include hidden;
	}
}
</style>

<script setup>
import { computed, onMounted } from 'vue';
import SectionLabel from '../SectionLabel.vue';
import servicesImg1 from '@/images/services-1.jpg';
import servicesImg2 from '@/images/services-2.jpg';
import servicesImg3 from '@/images/services-3.jpg';
import servicesImg4 from '@/images/services-4.jpg';
import servicesImg5 from '@/images/services-5.jpg';
import { i18n } from '@/locales';
import gsap from 'gsap';

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
	gsap.utils.toArray('.cards__item').forEach((item, i) => {
		gsap.from(item, {
			y: i % 2 ? 50 : -50,
			x: i % 2 ? -30 : 30,
			opacity: 0,
			scrollTrigger: {
				trigger: item,
				start: 'top 85%',
				end: 'center 75%',
				scrub: 1
			}
		});
	});
});
</script>
