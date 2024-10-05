<template>
	<section class="services" id="services">
		<SectionTop>{{ $t('link-services') }}</SectionTop>
		<div class="services__content">
			<div class="services__box">
				<span class="services__title">{{ $t('services-title-1') }}</span>
				<Ornament class="services__ornament" />
			</div>
			<span class="services__title">{{ $t('services-title-2') }}</span>
			<span class="services__title">{{ $t('services-title-3') }}</span>
			<p class="services__text section-text">{{ $t('services-text') }}</p>
		</div>
	</section>
</template>

<script setup>
import { onMounted } from 'vue';
import Ornament from '../Ornament.vue';
import SectionTop from '../SectionTop.vue';
import gsap from 'gsap';

onMounted(() => {
	const els = Array.from(document.querySelector('.services__content').children);
	gsap.from('.services__ornament', {
		rotate: 270,
		scrollTrigger: {
			trigger: '.services__content',
			start: 'top 85%',
			end: 'bottom 65%',
			scrub: 1
		}
	});
	els.forEach((el, i) => {
		gsap.from(el, {
			opacity: 0,
			x: i % 2 == 0 ? 75 : -75,
			filter: 'blur(10px)',
			scrollTrigger: {
				trigger: el,
				start: 'top 85%',
				end: 'bottom 65%',
				scrub: 1
			}
		});
	});
});
</script>

<style lang="scss" scoped>
.services {
	display: flex;
	flex-direction: column;
	gap: 3rem;
	&__ornament {
		@media only screen and (max-width: 500px) {
			display: none;
		}
	}
	&__text {
		align-self: end;
		margin-top: 3rem;
	}
	&__box {
		align-self: stretch;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: max(1.5vw, 10px);
	}
	&__content {
		align-self: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		max-width: 1400px;
		padding: 0 2rem;
		@media only screen and (max-width: 500px) {
			padding: 0;
		}
	}
	&__title {
		line-height: 1;
		font-size: clamp(38px, 10vw, 130px);
		text-transform: uppercase;
		text-align: center;
		&:not(:has(+ .services__ornament)):last-of-type {
			align-self: center;
		}
		&:has(+ .services__ornament) {
			line-height: 1.3;
		}
	}
}
</style>
