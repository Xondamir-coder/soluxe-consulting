<template>
	<main class="main">
		<Header />
		<Hero />
		<AfterHero />
		<About />
		<Services />
		<Cards />
		<Approach />
		<Industries />
		<Sectors />
		<Titles />
		<Contact />
		<Cta />
		<Footer />
	</main>
</template>

<script setup>
import Header from '@/components/Header.vue';
import About from '@/components/Home/About.vue';
import Hero from '@/components/Home/Hero.vue';
import AfterHero from '@/components/Home/AfterHero.vue';
import Services from '@/components/Home/Services.vue';
import Cards from '@/components/Home/Cards.vue';
import Approach from '@/components/Home/Approach.vue';
import Industries from '@/components/Home/Industries.vue';
import Sectors from '@/components/Home/Sectors.vue';
import Titles from '@/components/Home/Titles.vue';
import Contact from '@/components/Home/Contact.vue';
import Cta from '@/components/Home/Cta.vue';
import Footer from '@/components/Footer.vue';
</script>

<style lang="scss" scoped>
.main {
	padding: 3vw;
	overflow: hidden;
}
</style>
