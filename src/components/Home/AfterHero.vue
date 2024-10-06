<template>
	<section class="after">
		<div class="after__images">
			<img
				alt="banners"
				class="after__image"
				v-for="(image, i) in images"
				:width="imageWidth"
				:height="imageHeight"
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
	&__images {
		display: grid;
		& > * {
			grid-area: 1/1/2/2;
		}
	}
	&__image {
		width: 100%;
		height: 100%;
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
import image1 from '@/images/after-1.avif';
import image2 from '@/images/after-2.avif';
import image3 from '@/images/after-3.avif';
import image4 from '@/images/after-4.avif';
import image5 from '@/images/after-5.avif';
import image6 from '@/images/after-6.avif';
import image7 from '@/images/after-7.avif';
import smallImage1 from '@/images/after-1-small.avif';
import smallImage2 from '@/images/after-2-small.avif';
import smallImage3 from '@/images/after-3-small.avif';
import smallImage4 from '@/images/after-4-small.avif';
import smallImage5 from '@/images/after-5-small.avif';
import smallImage6 from '@/images/after-6-small.avif';
import smallImage7 from '@/images/after-7-small.avif';
import mediumImage1 from '@/images/after-1-medium.avif';
import mediumImage2 from '@/images/after-2-medium.avif';
import mediumImage3 from '@/images/after-3-medium.avif';
import mediumImage4 from '@/images/after-4-medium.avif';
import mediumImage5 from '@/images/after-5-medium.avif';
import mediumImage6 from '@/images/after-6-medium.avif';
import mediumImage7 from '@/images/after-7-medium.avif';
import { onMounted, ref } from 'vue';

const intervalTime = 2; // seconds
const isSmall = window.innerWidth <= 600;
const isMedium = window.innerWidth > 600 && window.innerWidth <= 1280;
const imageWidth = isSmall ? 512 : isMedium ? 1024 : 2048;
const imageHeight = isSmall ? 288 : isMedium ? 576 : 1152;
const images = isSmall
	? [smallImage1, smallImage2, smallImage3, smallImage4, smallImage5, smallImage6, smallImage7]
	: isMedium
	? [
			mediumImage1,
			mediumImage2,
			mediumImage3,
			mediumImage4,
			mediumImage5,
			mediumImage6,
			mediumImage7
	  ]
	: [image1, image2, image3, image4, image5, image6, image7];
const currentImageIndex = ref(0);

onMounted(() => {
	setInterval(() => {
		currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
	}, intervalTime * 1000);
});
</script>
