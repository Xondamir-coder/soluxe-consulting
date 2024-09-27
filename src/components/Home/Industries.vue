<template>
	<section class="industries">
		<div class="industries__content">
			<span class="industries__title" v-for="i in 3">
				{{ $t(`industries-title-${i}`) }}
			</span>
			<div class="industries__box">
				<span class="industries__title">{{ $t('industries-title-4') }}</span>
				<Ornament class="industries__ornament" />
			</div>
			<p class="industries__text section-text">
				{{ $t('industries-text') }}
			</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.industries {
	text-align: center;
	margin: 10rem 0;
	&__text {
		margin-top: 2rem;
		max-width: 70ch;
		align-self: center;
		text-align: left;
	}
	&__box {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
	}
	&__content {
		display: flex;
		flex-direction: column;
	}
	&__title {
		font-size: clamp(38px, 8vw, 100px);
		font-weight: 400;
		line-height: 1;
		text-transform: uppercase;
	}
}
</style>

<script setup>
import { onMounted } from 'vue';
import Ornament from '../Ornament.vue';
import gsap from 'gsap';

onMounted(() => {
	const parent = Array.from(document.querySelector('.industries__content').children);
	parent.forEach((el, i) => {
		gsap.from(el, {
			filter: 'blur(20px)',
			x: i % 2 === 0 ? 50 : -50,
			y: i % 2 === 0 ? -20 : 20,
			scrollTrigger: {
				trigger: el,
				start: 'top 95%',
				end: 'bottom center',
				scrub: 1
			}
		});
	});
});
</script>
