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
		<div class="hero__circle"></div>
	</section>
</template>

<style scoped lang="scss">
.hero {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	position: relative;
	@media only screen and (max-width: 768px) {
		min-height: 50vh;
	}
	&__box {
		display: flex;
		align-items: start;
		gap: max(1vw, 10px);
	}
	&__circle {
		width: 45rem;
		height: 45rem;
		top: 40%;
		left: 60%;
		background: radial-gradient(50% 50% at 50% 50%, #f8dba1 10.5%, #ffffff 100%);
		border-radius: 50%;
		position: absolute;
		z-index: -1;
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
		}
	}
}
</style>

<script setup>
import { i18n } from '@/locales';
import { computed } from 'vue';
import Ornament from '../Ornament.vue';

const titles = computed(() => [
	i18n.global.t('hero-title-1'),
	i18n.global.t('hero-title-2'),
	i18n.global.t('hero-title-3')
]);
</script>
