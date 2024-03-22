class DASHBOARD {
	private root = '/me'

	STATISTICS = `${this.root}/admin`
	HOME = this.root
	TASKS = `${this.root}/tasks` //TASKS = `${this.root}/tasks-v2`
	HABITS = `${this.root}/habits`
	TIMER = `${this.root}/timer`
	TIME_BLOCKING = `${this.root}/time-blocking`
	SETTINGS = {
		HOME: `${this.root}/settings`,
		SECURITY: `${this.root}/settings/security`,
		TIMER: `${this.root}/settings/timer`,
		APPEARANCE: `${this.root}/settings/appearance`
	}
}

export const DASHBOARD_PAGES = new DASHBOARD()
