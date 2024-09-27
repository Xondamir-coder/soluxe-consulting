<template>
	<section class="about" id="about">
		<SectionTop>{{ $t('link-about') }}</SectionTop>
		<div class="about__content">
			<span class="about__title">
				{{ $t('about-title-1') }}
			</span>
			<span class="about__title">
				{{ $t('about-title-2') }}
			</span>
			<div class="about__box">
				<span class="about__title">{{ $t('about-title-3') }}</span>
				<Ornament class="about__ornament" />
			</div>
		</div>
		<p class="about__text">
			{{ $t('about-text') }}
		</p>
	</section>
</template>

<script setup>
import { onMounted } from 'vue';
import Ornament from '../Ornament.vue';
import SectionTop from '../SectionTop.vue';
import gsap from 'gsap';

onMounted(() => {
	const els = Array.from(document.querySelector('.about__content').children);
	els.forEach(el => {
		gsap.from(el, {
			opacity: 0,
			y: 40,
			filter: 'blur(10px)',
			scrollTrigger: {
				trigger: el,
				start: 'top 85%',
				end: 'bottom 65%',
				scrub: 1
			}
		});
	});
	gsap.from('.about__text', {
		opacity: 0,
		y: 40,
		scrollTrigger: {
			trigger: '.about__text',
			start: 'top 80%',
			end: 'bottom 80%',
			scrub: 1
		}
	});
});
</script>

<style lang="scss" scoped>
// animation to rotate infinitely
@keyframes rotate {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}
.about {
	padding-top: 2rem;
	padding-bottom: max(10vw, 50px);
	display: flex;
	flex-direction: column;
	gap: max(10vw, 50px);
	&__ornament {
		animation: rotate 20s linear infinite;
	}
	&__content {
		max-width: 1400px;
		padding-right: 3rem;
		align-self: center;
		display: flex;
		flex-direction: column;
		align-items: end;
	}
	&__box {
		display: flex;
		align-items: center;
		gap: max(1.5vw, 3px);
		flex-wrap: wrap;
	}
	&__title {
		font-weight: 500;
		text-transform: uppercase;
		font-size: clamp(32px, 8vw, 72px);
		line-height: 1.1;
		&:nth-of-type(2) {
			padding-right: 4rem;
			@media only screen and (max-width: 768px) {
				padding-right: 2rem;
			}
			@media only screen and (max-width: 500px) {
				padding-right: 0;
			}
		}
	}
	&__text {
		font-size: max(0.85rem, 14px);
		letter-spacing: 0.3px;
		font-family: var(--font-cambay);
		max-width: 60ch;
	}
}
</style>
