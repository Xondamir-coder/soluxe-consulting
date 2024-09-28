<template>
	<section class="after">
		<div class="after__labels">
			<SectionLabel>{{ $t('link-services') }}</SectionLabel>
			<SectionLabel>{{ $t('recruitment') }}</SectionLabel>
		</div>
		<div class="after__images">
			<img
				alt="banners"
				width="2048"
				height="1366"
				v-for="(image, i) in images"
				class="after__image"
				:src="image"
				:class="{ active: currentImageIndex === i }" />
		</div>
	</section>
</template>

<style lang="scss" scoped>
.after {
	display: flex;
	flex-direction: column;
	gap: max(1.5rem, 20px);
	position: relative;
	z-index: 10;
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
import image1 from '@/images/after-1.avif';
import image2 from '@/images/after-2.avif';
import image3 from '@/images/after-3.avif';
import image4 from '@/images/after-4.avif';
import image5 from '@/images/after-5.avif';
import image6 from '@/images/after-6.avif';
import image7 from '@/images/after-7.avif';
import { onMounted, ref } from 'vue';

const intervalTime = 2; // seconds
const isSmall = window.innerWidth < 768;
const images = [image1, image2, image3, image4, image5, image6, image7];
const currentImageIndex = ref(0);

onMounted(() => {
	setInterval(() => {
		currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
	}, intervalTime * 1000);
});
</script>
