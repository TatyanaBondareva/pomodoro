const pluralize = require('./pluralize');
const notifier = require('node-notifier');
const Note = require("./note");


class Timer {
	 constructor(time) {
		this.time = time;
		this.count = 0;
	}

	setCounts() {
		++this.count;
	}
	addMinute() {
		this.setCounts();
		this.checkTime();
	}

	checkTime() {
		if(this.count < this.time) {
			let str = "Прошло " + this.count + " " + pluralize(this.count, ['минута', 'минуты', 'минут']) + ".";
			console.log(str);
		}
		else if(this.count == this.time) {
			this.stopTime();		
		}
	}

	getWindow(arg) {
		let StartWindow = Note(arg);
		notifier.notify(StartWindow);
	}
	getCurrentTime() {
		let date = new Date();
		let hours, minutes;
		(date.getHours() < 10)?(hours = "0" + date.getHours()):(hours = date.getHours());
		(date.getMinutes() < 10)?(minutes = "0" + date.getMinutes()):(minutes = date.getMinutes());
		let result = date.getHours() + ':' + date.getMinutes() + ".";
		console.log("Работа началась в ", result );
	}
	stopTime() {
		clearInterval(this.times);
		console.log("Время работы закончилось!");
		this.getWindow(['Время отдыха 5 минут!', 'Отдохни, разомнись, выпей стакан воды!', 'icons/icon_rest.png']);	
	}
	start() {
		this.getCurrentTime();
		this.getWindow(['Время работы 25 минут!', 'Сделай одно дело за раз!', 'icons/icon_work.png']);
		this.times = setInterval(this.addMinute.bind(this), 60000);	
	}
}
let timer = new Timer(25);
timer.start();