export const notification = (title: string, message: string) => {
	if (Notification.permission === 'granted') {
		new Notification(`Eco-Planner | ${title}`, {
			body: message,
			icon: '/logo.svg',
			silent: true
		})
	} else if (Notification.permission !== 'denied') {
		Notification.requestPermission().then(permission => {
			if (permission === 'granted') {
				new Notification(`Eco-Planner | ${title}`, {
					body: message,
					icon: '/logo.svg',
					silent: true
				})
			}
		})
	}
}
