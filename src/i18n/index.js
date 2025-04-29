import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
	en: {
		translation: {
			welcome: 'Welcome to my app!',
		},
	},
	vi: {
		translation: {
			welcome: 'Chào mừng đến với app của tôi!',
		},
	},
}

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: 'vi', // ngôn ngữ mặc định
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
