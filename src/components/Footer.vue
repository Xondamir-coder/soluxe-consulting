<template>
	<footer class="footer">
		<div class="footer__border"></div>
		<ul class="footer__list">
			<li class="footer__item">
				<Logo />
			</li>
			<li class="footer__item">
				<h3 class="footer__item-title">{{ $t('contact') }}</h3>
				<div class="footer__divider"></div>
				<a href="mailto:consulting@soluxe.uz" class="footer__link">
					consulting@soluxe.uz
				</a>
				<a href="tel:+998 93 384 02 72" class="footer__link">+998 (93) 384-02-72</a>
				<a href="tel:+86 186 9911 3737" class="footer__link">+86 186 9911 3737</a>
			</li>
			<li class="footer__item">
				<h3 class="footer__item-title">{{ $t('find-us') }}</h3>
				<div class="footer__divider"></div>
				<p class="footer__address" v-for="text in $t('address').split(',')">{{ text }}</p>
			</li>
			<li class="footer__item">
				<h3 class="footer__item-title">{{ $t('legals') }}</h3>
				<div class="footer__divider"></div>
				<RouterLink to="/legal" class="footer__link">{{ $t('privacy') }}</RouterLink>
			</li>
			<li class="footer__item">
				<h3 class="footer__item-title">{{ $t('social') }}</h3>
				<div class="footer__divider"></div>
				<ul class="footer__social">
					<li class="footer__social-item" v-for="({ href, name }, i) in socials" :key="i">
						<a :href="href" class="footer__social-link">{{ name }}</a>
					</li>
				</ul>
			</li>
		</ul>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	gap: 30px;
	&__border {
		margin-inline: auto;
		height: 1px;
		background-color: var(--border-grey);
		@media screen and (max-width: 768px) {
			width: 95%;
		}
	}
	&__social {
		display: flex;
		flex-direction: column;
		gap: 10px;
		text-transform: uppercase;
		&-link {
			&:hover {
				color: var(--yellow);
			}
			transition: color 0.3s;
		}
	}
	&__link {
		&:hover {
			color: var(--yellow);
		}
		transition: color 0.3s;
	}
	&__list {
		display: grid;
		align-items: start;
		column-gap: 1rem;
		row-gap: 2.5rem;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
	&__divider {
		height: 1px;
		width: 15px;
		background-color: rgba(192, 192, 192, 1);
	}
	&__item {
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: 16px;
		&-title {
			font-size: 20px;
			color: rgba(192, 192, 192, 1);
			font-weight: 400;
		}
	}
}
</style>

<script setup>
import { computed, onMounted } from 'vue';
import Logo from './Logo.vue';
import { i18n } from '@/locales';
import gsap from 'gsap';

const socials = computed(() => [
	{
		href: '#',
		name: i18n.global.t('instagram')
	},
	{
		href: '#',
		name: i18n.global.t('twitter')
	},
	{
		href: '#',
		name: i18n.global.t('linkedin')
	},
	{
		href: '#',
		name: i18n.global.t('facebook')
	},
	{
		href: '#',
		name: i18n.global.t('tiktok')
	}
]);
onMounted(() => {
	gsap.from('.footer__item', {
		rotateX: 90,
		opacity: 0,
		duration: 1,
		stagger: 0.3,
		scrollTrigger: {
			trigger: '.footer',
			toggleActions: 'play none none reverse'
		}
	});
	gsap.to('.footer__border', {
		width: '100%',
		scrollTrigger: {
			trigger: '.footer',
			toggleActions: 'play none none reverse'
		}
	});
});
</script>
