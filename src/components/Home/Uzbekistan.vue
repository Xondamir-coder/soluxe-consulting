<template>
	<section class="uzb" id="uzb">
		<SectionTop>{{ $t('link-uzb') }}</SectionTop>
		<Cards :cards="cards" />
	</section>
</template>

<script setup>
import { computed } from 'vue';
import Cards from '../Cards.vue';
import SectionTop from '../SectionTop.vue';
import { i18n } from '@/locales';
import uzbImg1 from '@/images/uzb-1.avif';
import uzbImg2 from '@/images/uzb-2.avif';
import uzbImg3 from '@/images/uzb-3.avif';

const cards = computed(() => [
	{
		img: uzbImg1,
		label: i18n.global.t('uzb-label-1'),
		name: i18n.global.t('uzb-name-1'),
		text: i18n.global.t('uzb-text-1')
	},
	{
		img: uzbImg2,
		label: i18n.global.t('uzb-label-2'),
		name: i18n.global.t('uzb-name-2'),
		text: i18n.global.t('uzb-text-2')
	},
	{
		img: uzbImg3,
		label: i18n.global.t('uzb-label-3'),
		name: i18n.global.t('uzb-name-3'),
		text: i18n.global.t('uzb-text-3')
	}
]);
</script>

<style lang="scss" scoped>
.uzb {
	display: flex;
	flex-direction: column;
	gap: 3rem;
	margin-bottom: 5rem;
}
</style>
