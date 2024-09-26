<template>
	<section id="services" class="services">
		<div class="services__labels">
			<SectionLabel>{{ $t('link-services') }}</SectionLabel>
			<SectionLabel>{{ $t('recruitment') }}</SectionLabel>
		</div>
		<div class="services__images">
			<img
				width="1440"
				height="760"
				alt="banner"
				class="services__image"
				v-for="(image, i) in images"
				:key="image"
				:src="image"
				:class="{ active: currentImageIndex === i }" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.services {
	display: flex;
	flex-direction: column;
	gap: max(1.5rem, 20px);
	&__labels {
		display: flex;
		gap: 10px;
	}
	&__images {
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__image {
		width: 100%;
		height: auto;
		border-radius: 30px;
		object-fit: cover;
		opacity: 0;
		transition: opacity 1.5s;
		&.active {
			opacity: 1;
			z-index: 10;
		}
	}
}
</style>

<script setup>
import SectionLabel from '../SectionLabel.vue';
import image1 from '@/images/services-1.webp';
import image2 from '@/images/services-2.webp';
import image3 from '@/images/services-3.webp';
import { onMounted, ref } from 'vue';

const intervalTime = 2; // seconds
const images = [image1, image2, image3];
const currentImageIndex = ref(0);

onMounted(() => {
	setInterval(() => {
		currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
	}, intervalTime * 1000);
});
</script>
