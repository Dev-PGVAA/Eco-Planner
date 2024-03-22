import { TypeLanguage } from '@/hooks/useLanguage'

export interface ILanguage {
	name: string
	index: string
	value: TypeLanguage
}
export const LANGUAGES: ILanguage[] = [
	{
		name: 'English',
		index: '🇺🇸',
		value: 'en'
	},
	{
		name: 'Русский',
		index: '🇷🇺',
		value: 'ru'
	},
	{
		name: 'Deutsch',
		index: '🇩🇪',
		value: 'de'
	},
	{
		name: '中文',
		index: '🇨🇳',
		value: 'zh'
	}
]
