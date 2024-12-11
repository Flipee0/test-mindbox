import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { langKey } from '@/features/LangPicker/constants/langKey';
import en from '@/i18n/en';
import ru from '@/i18n/ru';

i18n.use(initReactI18next).init({
    fallbackLng: ['en', 'ru'],
    lng: localStorage.getItem(langKey) ?? undefined,
    resources: {
        en: {
            translation: en,
        },
        ru: {
            translation: ru,
        },
    },
});

export default i18n;
