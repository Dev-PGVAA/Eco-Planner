import { useEffect, useState } from 'react'

export type TypeLanguage = 'en' | 'ru' | 'de' | 'zh'

export function useLanguage() {
	const [language, setLanguage] = useState<TypeLanguage>('en')

	useEffect(() => {
		const lang = localStorage.getItem('language')
		if (lang) setLanguage(lang as TypeLanguage)
	}, [])

	const changeLanguage = (lang: TypeLanguage) => {
		setLanguage(lang)
	}

	return { language, changeLanguage }
}
