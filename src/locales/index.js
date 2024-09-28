import { createI18n } from 'vue-i18n';
import en from './en.json';
import uz from './uz.json';
import zh from './zh.json';

const locales = ['en', 'uz', 'zh'];
let locale = localStorage.getItem('lang') || navigator.language.split('-')[0];

if (!locales.includes(locale)) {
	locale = 'en';
}

export const i18n = createI18n({
	locale,
	fallbackLocale: 'en',
	messages: {
		en,
		uz,
		zh
	}
});

document.documentElement.lang = i18n.global.locale;

export const changeLang = newLang => {
	localStorage.setItem('lang', newLang);
	i18n.global.locale = newLang;
	document.documentElement.lang = newLang;
};
