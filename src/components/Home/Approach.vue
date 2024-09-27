<template>
	<section class="approach">
		<div class="approach__content">
			<span class="approach__title" v-for="i in 3" :key="i">
				{{ $t(`approach-title-${i}`) }}
			</span>
		</div>
		<Circle class="approach__circle" />
	</section>
</template>

<style lang="scss" scoped>
.approach {
	margin-top: 10rem;
	padding: 10vw;
	border: 1px solid var(--border-grey);
	backdrop-filter: blur(20px);
	border-radius: 50px;
	display: grid;
	align-content: center;
	justify-content: end;
	min-height: 100vh;
	position: relative;
	background-color: rgba(255, 255, 255, 0.3);
	@media only screen and (max-width: 768px) {
		min-height: 50vh;
		padding: 5vw;
	}

	&__circle {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: max(300px, 40vw);
		height: max(300px, 40vw);
	}
	&__content {
		display: flex;
		flex-direction: column;
		align-items: end;
		z-index: 1;
	}
	&__title {
		font-weight: 500;
		font-size: clamp(32px, 7vw, 70px);
		line-height: 1.2;
		text-align: center;
		letter-spacing: 0.4px;
		text-transform: uppercase;
		&:first-of-type {
			padding-right: -3.5vw;
		}
		&:nth-of-type(2) {
			padding-right: -5vw;
		}
	}
}
</style>

<script setup>
import gsap from 'gsap';
import Circle from '../Circle.vue';
import { onMounted } from 'vue';

onMounted(() => {
	gsap.from(Array.from(document.querySelector('.approach__content').children), {
		opacity: 0,
		x: -30,
		filter: 'blur(20px)',
		ease: 'power4.out',
		stagger: 0.2,
		scrollTrigger: {
			trigger: '.approach__content',
			start: 'top 80%',
			end: 'bottom 35%',
			scrub: 1
		}
	});
});
</script>
