<template>
	<section class="about section-style" id="about">
		<SectionLabel>{{ $t('link-about') }}</SectionLabel>
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
import Ornament from '../Ornament.vue';
import SectionLabel from '../SectionLabel.vue';
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
