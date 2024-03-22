import { dataTranslate } from '../config/data.translate'

export const translator = (text: string, lang: string) => {
	return dataTranslate[lang][text] || text
}
