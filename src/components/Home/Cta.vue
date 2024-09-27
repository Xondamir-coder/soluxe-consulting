<template>
	<section class="cta">
		<div class="cta__left">
			<p class="cta__text">Consulting</p>
			<a href="mailto:info@consulting.soluxe">info@consulting.soluxe</a>
			<a href="tel:+999 99 999 99 99">+999 99 999 99 99</a>
		</div>
		<div class="cta__right">
			<svg
				class="cta__box"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				width="400"
				height="400"
				viewBox="0 0 400 400"
				xml:space="preserve"
				data-v-inspector="src/components/Home/Cta.vue:10:5"
				data-v-949ed5bb="">
				<g
					transform="matrix(5.55 0 0 0.39 200 368.92)"
					id="94078dcd-372b-4d26-b833-790da5fc19a7"
					data-v-inspector="src/components/Home/Cta.vue:358:6"
					data-v-949ed5bb="">
					<rect
						style="
							stroke: var(--black);
							stroke-width: 0;
							stroke-dasharray: none;
							stroke-linecap: butt;
							stroke-dashoffset: 0;
							stroke-linejoin: miter;
							stroke-miterlimit: 4;
							fill: var(--black);
							fill-rule: nonzero;
							opacity: 1;
						"
						vector-effect="non-scaling-stroke"
						x="-33.085"
						y="-33.085"
						rx="0"
						ry="0"
						width="66.17"
						height="66.17"
						data-v-inspector="src/components/Home/Cta.vue:361:7"
						data-v-949ed5bb=""></rect>
				</g>
				<g class="cta__arrow">
					<g
						transform="matrix(0 3.91 -0.39 0 200 226.33)"
						id="94078dcd-372b-4d26-b833-790da5fc19a7"
						data-v-inspector="src/components/Home/Cta.vue:334:6"
						data-v-949ed5bb="">
						<rect
							style="
								stroke: var(--black);
								stroke-width: 0;
								stroke-dasharray: none;
								stroke-linecap: butt;
								stroke-dashoffset: 0;
								stroke-linejoin: miter;
								stroke-miterlimit: 4;
								fill: var(--black);
								fill-rule: nonzero;
								opacity: 1;
							"
							vector-effect="non-scaling-stroke"
							x="-33.085"
							y="-33.085"
							rx="0"
							ry="0"
							width="66.17"
							height="66.17"
							data-v-inspector="src/components/Home/Cta.vue:337:7"
							data-v-949ed5bb=""></rect>
					</g>
					<g
						transform="matrix(-2.31 3 -0.31 -0.24 278.86 265.19)"
						id="94078dcd-372b-4d26-b833-790da5fc19a7"
						data-v-inspector="src/components/Home/Cta.vue:382:6"
						data-v-949ed5bb="">
						<rect
							style="
								stroke: var(--black);
								stroke-width: 0;
								stroke-dasharray: none;
								stroke-linecap: butt;
								stroke-dashoffset: 0;
								stroke-linejoin: miter;
								stroke-miterlimit: 4;
								fill: var(--black);
								fill-rule: nonzero;
								opacity: 1;
							"
							vector-effect="non-scaling-stroke"
							x="-33.085"
							y="-33.085"
							rx="0"
							ry="0"
							width="66.17"
							height="66.17"
							data-v-inspector="src/components/Home/Cta.vue:385:7"
							data-v-949ed5bb=""></rect>
					</g>
					<g
						transform="matrix(2.43 2.9 -0.3 0.25 119.31 266.66)"
						id="94078dcd-372b-4d26-b833-790da5fc19a7"
						data-v-inspector="src/components/Home/Cta.vue:406:6"
						data-v-949ed5bb="">
						<rect
							style="
								stroke: var(--black);
								stroke-width: 0;
								stroke-dasharray: none;
								stroke-linecap: butt;
								stroke-dashoffset: 0;
								stroke-linejoin: miter;
								stroke-miterlimit: 4;
								fill: var(--black);
								fill-rule: nonzero;
								opacity: 1;
							"
							vector-effect="non-scaling-stroke"
							x="-33.085"
							y="-33.085"
							rx="0"
							ry="0"
							width="66.17"
							height="66.17"
							data-v-inspector="src/components/Home/Cta.vue:409:7"
							data-v-949ed5bb=""></rect>
					</g>
				</g>
			</svg>
			<a href="#contact" class="cta__title">
				{{ $t('get-in-touch') }}
			</a>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.cta {
	display: flex;
	gap: 5rem;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}

	&__text {
		padding-bottom: 5px;
		border-bottom: 1px solid var(--border-grey);
	}
	&__left {
		display: flex;
		align-items: start;
		flex-direction: column;
		gap: 10px;
		font-size: 1.2rem;
	}
	&__right {
		flex-grow: 1;
		display: flex;
		align-items: end;
		gap: 2rem;
		&:has(.cta__title:hover) {
			color: var(--yellow);
			.cta__arrow {
				transform: translateY(0);
			}
		}
	}
	&__box {
		width: 100%;
		height: auto;
		align-self: flex-end;
	}
	&__arrow {
		transform: translateY(-2.5rem);
		transition: transform 0.3s;
	}
	&__title {
		transition: color 0.3s;
		font-size: 13vw;
		line-height: 1;
		text-transform: uppercase;
		font-weight: bold;
	}
}
</style>

<script setup>
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
	gsap.from('.cta__left', {
		opacity: 0,
		x: -100,
		scrollTrigger: {
			trigger: '.cta',
			start: 'top 85%',
			end: 'bottom 65%',
			scrub: 1
		}
	});
	gsap.from('.cta__right', {
		opacity: 0,
		x: 100,
		scrollTrigger: {
			trigger: '.cta',
			start: 'top 85%',
			end: 'bottom 65%',
			scrub: 1
		}
	});
});
</script>
