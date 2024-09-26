<template>
	<div class="lang__container">
		<button class="lang" :aria-label="$t('aria-lang')" @click="toggleLang">
			<Translate />
			<p class="lang__text">{{ $i18n.locale }}</p>
			<ArrowDown class="lang__arrow" />
			<input class="lang__input" type="checkbox" v-model="isLangToggled" />
		</button>
		<ul class="lang__options" :class="{ hidden: !isLangToggled }">
			<li
				class="lang__options-item"
				v-for="locale in $i18n.availableLocales.filter(locale => locale !== $i18n.locale)"
				:key="locale">
				<button
					class="lang__options-btn"
					:aria-label="$t('aria-lang')"
					@click="selectLang(locale)">
					<p class="lang__options-text">{{ locale }}</p>
				</button>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.lang {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 15px 26px;
	border-radius: 100px;

	&:has(.lang__input:checked) .lang__arrow {
		transform: rotate(180deg);
	}
	&__arrow {
		transition: transform 0.3s;
	}
	&__input {
		appearance: none;
		display: none;
	}
	&__options {
		position: absolute;
		top: calc(100% + 6px);
		width: 100%;
		padding: 8px 1rem;
		border-radius: 20px;
		transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
		box-shadow: 0 0 10px 2px var(--black);
		&.hidden {
			opacity: 0;
			transform: translateY(-20px);
			visibility: hidden;
		}
		&-btn {
			padding: 5px;
			width: 100%;
			text-align: left;
		}
	}
	&__container {
		font-family: var(--font-cambay);
		position: relative;
		font-size: max(0.8rem, 14px);
		& > * {
			background-color: var(--black);
			color: #fff;
		}
	}
	&__text {
		font-weight: 700;
	}
	&__text,
	&__options-text {
		&::first-letter {
			text-transform: uppercase;
		}
	}
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import ArrowDown from './Icons/ArrowDown.vue';
import Translate from './Icons/Translate.vue';
import { changeLang } from '@/locales';

const isLangToggled = ref(false);

const toggleLang = () => (isLangToggled.value = !isLangToggled.value);
const selectLang = newLocale => {
	changeLang(newLocale);
	toggleLang();
};

onMounted(() => {
	document.addEventListener('click', e => {
		if (e.target.closest('.lang')) return;
		if (isLangToggled.value) isLangToggled.value = false;
	});
});
</script>
