<template>
	<header class="header">
		<a href="#"><Logo class="header__logo" /></a>
		<div class="header__menu">
			<ul class="header__list">
				<li class="header__item" v-for="{ link, name } in links" :key="link">
					<a :href="link" class="header__link">
						{{ name }}
					</a>
				</li>
			</ul>
		</div>
		<LangSwitch />
	</header>
</template>

<script setup>
import Logo from '@/components/Logo.vue';
import { i18n } from '@/locales';
import { computed, markRaw, onMounted, ref } from 'vue';
import LangSwitch from './LangSwitch.vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const logoRef = ref();
gsap.registerPlugin(ScrollTrigger);
const links = computed(() => [
	{
		name: i18n.global.t('link-about'),
		link: '#about'
	},
	{
		name: i18n.global.t('link-services'),
		link: '#services'
	},
	{
		name: i18n.global.t('link-sectors'),
		link: '#sectors'
	},
	{
		name: i18n.global.t('link-uzb'),
		link: '#uzb'
	},
	{
		name: i18n.global.t('link-contact'),
		link: '#contact'
	}
]);
const scrollTrigger = {
	trigger: '.main',
	start: '+=100',
	end: '+=400',
	scrub: 1
};

onMounted(() => {
	gsap.to('.header', {
		marginTop: 16,
		backgroundColor: 'rgba(255,255,255,0.5)',
		width: 800,
		borderRadius: '30px',
		scrollTrigger
	});
	gsap.to('.header', {
		scrollTrigger: {
			trigger: '.main',
			start: '+=100',
			endTrigger: '.main',
			toggleClass: {
				className: 'active',
				targets: '.header'
			}
		}
	});
	gsap.to(document.querySelector('.header__logo').querySelector('.logo__text'), {
		width: 0,
		opacity: 0,
		scrollTrigger
	});
});
</script>

<style scoped lang="scss">
@keyframes scale-appear {
	0% {
		transform: scale(1.3) translateY(20px);
		opacity: 0;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}
.header {
	display: grid;
	align-items: center;
	grid-template-columns: max-content 1fr max-content;
	padding: 8px 0.8rem;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	background-color: rgba(255, 255, 255, 1);
	left: 50%;
	transform: translateX(-50%);
	column-gap: 0.8rem;
	transition: backdrop-filter 1s;
	border: 1px solid rgba(192, 192, 192, 0.3);
	& > * {
		animation: scale-appear 1s;
	}
	&.active {
		backdrop-filter: hue-rotate(48deg) blur(5px);
	}
	&__list {
		display: flex;
		justify-content: center;
		gap: 16px;
	}
	&__item {
		font-size: max(0.8rem, 14px);
		transition: color 0.3s, letter-spacing 0.3s;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: var(--yellow);
			transform-origin: right;
			transform: scaleX(0);
			transition: transform 0.3s;
		}
		&:hover::before {
			transform-origin: left;
			transform: scaleX(1);
		}
	}
}
</style>
