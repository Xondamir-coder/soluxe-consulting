<template>
	<section class="sectors" id="sectors">
		<SectionTop>{{ $t('link-sectors') }}</SectionTop>
		<ul class="sectors__list">
			<li class="sectors__item" v-for="i in numOfSectors" :key="i">
				<label class="sectors__label" :for="`sector-${i}`">
					<input type="checkbox" class="sectors__input" :id="`sector-${i}`" />
					<p class="sectors__item-title">
						{{ i.toString().padStart(2, '0') }}. {{ $t(`sectors-title-${i}`) }}
					</p>
					<div class="sectors__item-container">
						<p class="sectors__item-text">
							{{ $t(`sectors-text-${i}`) }}
						</p>
					</div>
				</label>
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
.sectors {
	display: flex;
	flex-direction: column;
	gap: 20px;
	&__list {
		align-self: flex-end;
		display: flex;
		flex-direction: column;
		@media only screen and (min-width: 768px) {
			max-width: 70%;
		}
	}
	&__label {
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	&__item {
		padding: 1.5rem 0;
		border-top: 1px solid var(--border-grey);

		&:has(.sectors__input:checked) {
			.sectors__item-container {
				max-height: 300px;
			}
			.sectors__item-title::after {
				background-color: var(--black);
				transform: translateY(-50%) rotate(-45deg);
			}
			.sectors__item-title::before {
				background-color: var(--black);
				transform: translateY(-50%) rotate(45deg);
			}
		}
		&-container {
			transition: max-height 0.6s ease-in-out;
			max-height: 0;
			overflow: hidden;
		}
		&-title {
			text-transform: uppercase;
			font-size: max(24px, 1.6rem);
			position: relative;
			&::before,
			&::after {
				content: '';
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 0;
				display: block;
				width: 20px;
				height: 1.5px;
				background-color: var(--border-grey);
				transition: transform 0.3s, background-color 0.3s;
			}
			&::after {
				transform: translateY(-50%) rotate(90deg);
			}
		}
	}
	&__input {
		display: none;
	}
}
</style>

<script setup>
import { onMounted } from 'vue';
import SectionTop from '../SectionTop.vue';
import gsap from 'gsap';
const numOfSectors = 10;

onMounted(() => {
	const els = gsap.utils.toArray('.sectors__item');
	els.forEach((el, i) => {
		gsap.from(el, {
			opacity: 0,
			filter: 'blur(5px)',
			x: i % 2 === 0 ? -50 : 50,
			scrollTrigger: {
				trigger: el,
				start: 'top 80%',
				end: 'bottom 70%',
				scrub: 1
			}
		});
	});
});
</script>
