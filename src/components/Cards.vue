<template>
	<ul class="list">
		<li v-for="(card, i) in cards" :key="card.name">
			<Card :card="{ ...card, i }" />
		</li>
	</ul>
</template>

<style lang="scss" scoped>
.list {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	gap: 32px;
}
</style>

<script setup>
import Card from './Card.vue';

const props = defineProps({
	cards: Array
});
</script>
