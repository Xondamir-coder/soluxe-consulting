<template>
	<div class="card" ref="cardRef">
		<div class="card__number">{{ card.i + 1 }}</div>
		<img width="400" height="400" :src="card.img" :alt="card.name" class="card__image" />
		<div class="card__label">
			<span class="card__label-text">{{ card.label }}</span>
		</div>
		<h3 class="card__name">
			{{ card.name }}
		</h3>
		<div class="card__container">
			<p class="card__text">{{ card.text }}</p>
		</div>
	</div>
</template>

<script setup>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const props = defineProps({
	card: Object
});

const cardRef = ref();

onMounted(() => {
	gsap.from(cardRef.value, {
		y: props.card.i % 2 ? 50 : -50,
		x: props.card.i % 2 ? -30 : 30,
		opacity: 0,
		scrollTrigger: {
			trigger: cardRef.value,
			start: 'top 85%',
			end: 'center 75%',
			scrub: 1
		}
	});
});
</script>

<style scoped lang="scss">
@mixin hidden {
	@media only screen and (min-width: 768px) {
		transition: transform 0.7s;
		transform: translateY(50px);
	}
}
@mixin shown {
	transform: translateY(0);
}
.card {
	height: 100%;
	padding: max(2vw, 20px);
	border: 1px solid var(--border-grey);
	border-radius: 20px;
	display: grid;
	justify-items: start;
	gap: 1rem;
	@media only screen and (min-width: 768px) {
		&:hover > * {
			@include shown;
		}
		&:hover .card__container {
			visibility: visible;
			filter: blur(0);
			opacity: 1;
		}
	}
	&__image {
		width: 100%;
		height: auto;
		object-fit: cover;
		@include hidden;
	}
	&__number {
		margin-bottom: 10px;
		font-family: var(--font-cambay);
		background-color: var(--black);
		border-radius: 50%;
		width: 50px;
		height: 50px;
		display: grid;
		place-content: center;
		color: #fff;
	}
	&__container {
		@media only screen and (min-width: 768px) {
			opacity: 0;
			visibility: hidden;
			filter: blur(10px);
			transform: translateY(50px);
			transition: all 0.7s;
		}
	}
	&__text {
		font-size: 0.8rem;
		font-family: var(--font-cambay);
		line-height: 1.4;
		color: rgb(0, 0, 0, 0.7);
	}
	&__name {
		font-size: 1.6rem;
		font-weight: 400;
		@include hidden;
	}
	&__label {
		border-radius: 100px;
		border: inherit;
		align-self: flex-start;
		padding: 4px 1.3rem;
		font-size: 0.8rem;
		color: rgb(0, 0, 0, 0.6);
		@include hidden;
	}
}
</style>
