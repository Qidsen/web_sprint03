class Timer {
	constructor(title, delay, stopCount) {
		this.title = title;
		this.delay = delay;
		this.stopCount = stopCount;
	}

	start() {
		console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`);
	}

	tick(interval) {
		console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount}`);
		this.stopCount--;
		if(this.stopCount === 0) {
			this.stop();
			clearInterval(interval);
		}
	}

	stop() {
		console.log(`Timer ${this.title} stopped`)
	}
}

function runTimer(id, delay, counter) {
	let timer = new Timer(id, delay, counter);
	timer.start();
	let interval = setInterval(() => timer.tick(interval), timer.delay);
}
