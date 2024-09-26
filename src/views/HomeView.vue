<template>
	<main class="main">
		<Header />
		<Hero />
		<AfterHero />
		<About />
	</main>
</template>

<script setup>
import Header from '@/components/Header.vue';
import About from '@/components/Home/About.vue';
import Hero from '@/components/Home/Hero.vue';
import AfterHero from '@/components/Home/AfterHero.vue';
</script>

<style lang="scss" scoped>
.main {
	padding: 1rem;
	overflow: hidden;
}
</style>
