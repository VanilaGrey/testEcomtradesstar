import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import es from './locales/es.json';
import ru from './locales/ru.json';


const i18n = createI18n({
	legacy: false,
	locale: 'en',
	fallbackLocale: 'en',
	messages: {
		en,
		es,
		ru,
	},
});

export default i18n;
