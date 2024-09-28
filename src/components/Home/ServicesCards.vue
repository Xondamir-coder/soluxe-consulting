<template>
	<section class="services__cards">
		<Cards :cards="cards" />
	</section>
</template>

<style lang="scss" scoped>
.services__cards {
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	gap: 40px;
}
</style>

<script setup>
import Cards from '../Cards.vue';
import { computed } from 'vue';
import servicesImg1 from '@/images/services-1.avif';
import servicesImg2 from '@/images/services-2.avif';
import servicesImg3 from '@/images/services-3.avif';
import servicesImg4 from '@/images/services-4.avif';
import servicesImg5 from '@/images/services-5.avif';
import { i18n } from '@/locales';

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
</script>
