export function useLanguage() {
	const language: string = localStorage.getItem('language') || '🇺🇸'
	return language
}
