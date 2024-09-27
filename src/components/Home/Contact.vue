<template>
	<section class="contact" id="contact">
		<div class="contact__left">
			<h1 class="contact__title">{{ $t('contact-title') }}</h1>
			<Ornament class="contact__ornament" />
		</div>
		<div class="contact__right">
			<form class="contact__form" @submit.prevent="submitForm">
				<input
					type="text"
					class="contact__input"
					v-model="data.name"
					:placeholder="$t('placeholder-name')"
					required />
				<input
					type="text"
					class="contact__input"
					v-model="data.title"
					:placeholder="$t('placeholder-title')"
					required />
				<input
					type="email"
					class="contact__input"
					v-model="data.email"
					:placeholder="$t('placeholder-email')"
					required />
				<input
					type="tel"
					class="contact__input"
					v-model="data.tel"
					:placeholder="$t('placeholder-tel')" />
				<button type="submit" class="contact__btn">{{ $t('send') }}</button>
			</form>
		</div>
	</section>
</template>

<style lang="scss" scoped>
// rotate forever
@keyframes rotate {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}
.contact {
	padding: 7vw;
	border-radius: 50px;
	border: 1px solid var(--border-grey);
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	gap: 30px;
	margin: 10rem 0;
	border-radius: 16px;
	background: rgba(255, 255, 255, 0.14);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(9.3px);
	overflow: hidden;

	&__btn {
		background-color: var(--black);
		color: #fff;
		padding: 1rem;
		border-radius: 50px;
		letter-spacing: 1px;
		transition: transform 0.3s, box-shadow 0.3s;
		&:hover {
			transform: translateY(-5px);
			box-shadow: 0 0 20px 0px var(--black);
		}
	}
	&__input {
		padding: 0;
		outline: none;
		border: none;
		border-bottom: 1px solid var(--border-grey);
		font-size: 0.9rem;
		background-color: transparent;
	}
	&__right {
		display: flex;
		flex-direction: column;
	}
	&__form {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		flex-grow: 1;
		justify-content: space-between;
	}
	&__ornament {
		animation: rotate 20s linear infinite;
	}
	&__left {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	&__title {
		text-transform: uppercase;
		font-size: clamp(24px, 3vw, 40px);
	}
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import Ornament from '../Ornament.vue';
import gsap from 'gsap';

const data = ref({
	name: '',
	title: '',
	email: '',
	tel: ''
});

const submitForm = () => {
	console.log(data.value);
};

onMounted(() => {
	gsap.from('.contact__input', {
		opacity: 0,
		y: -20,
		stagger: 0.2,
		scrollTrigger: {
			trigger: '.contact',
			start: 'top 85%',
			end: 'bottom 65%',
			scrub: 1
		}
	});
});
</script>
