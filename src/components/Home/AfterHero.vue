<template>
	<section class="after">
		<div class="after__labels">
			<SectionLabel>{{ $t('link-services') }}</SectionLabel>
			<SectionLabel>{{ $t('recruitment') }}</SectionLabel>
		</div>
		<div class="after__images">
			<img
				:width="isSmall ? 582 : 1280"
				:height="isSmall ? 326 : 720"
				v-for="(image, i) in images"
				class="after__image"
				:src="isSmall ? image.small : image.default"
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
import image1 from '@/images/after-1.webp';
import image2 from '@/images/after-2.webp';
import image1small from '@/images/after-1-small.webp';
import image2small from '@/images/after-2-small.webp';
import image3 from '@/images/after-3.webp';
import image3small from '@/images/after-3-small.webp';
import { onMounted, ref } from 'vue';

const intervalTime = 2; // seconds
const isSmall = window.innerWidth < 768;
const images = [
	{
		default: image1,
		small: image1small
	},
	{
		default: image2,
		small: image2small
	},
	{
		default: image3,
		small: image3small
	}
];
const currentImageIndex = ref(0);

onMounted(() => {
	setInterval(() => {
		currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
	}, intervalTime * 1000);
});
</script>
