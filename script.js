// minimum
// task 1

const car = {
  manufacturer: "Toyota",
  model: "Hilux",
  yearRelease: "2021",
  averageSpeed: 100,
  carInfo: function () {
    console.log(
      `This car is manufactured by: ${this.manufacturer}, model: ${this.model}, year of Release &{this.yearRelease} and it's average speed is: ${this.averageSpeed}`
    );
  },
  timeFrame: function (distanceKM) {
    const time = distanceKM / this.averageSpeed;
    const totalSeconds = time * 3600;
    let hours = Math.floor(totalSeconds / 3600);
    const minuteSecondsLeft = totalSeconds % 3600;
    const minutes = Math.floor(minuteSecondsLeft / 60);
    const seconds = minuteSecondsLeft % 60;
    let rest = 4;
    let hoursWithRest = "";
    while (hours >= rest) {
      hoursWithRest = hours + 1;
      rest = rest + 4;
    }
    hours = hoursWithRest;
    console.log(
      `The time to travel ${distanceKM}km is ${hours} hours, ${minutes} minutes and ${seconds} seconds.`
    );
  },
};
// car.carInfo()
// car.timeFrame(1023)


// norma
// task 2

const time = {
  hours: 4,
  minutes: 40,
  seconds: 44,
  displayTime: function () {
    if (this.seconds < 10) {
      console.log(
        `The time is (hh:mm:ss): ${this.hours}:${this.minutes}:0${this.seconds}`
      );
    } else {
      console.log(
        `The time is (hh:mm:ss): ${this.hours}:${this.minutes}:${this.seconds}`
      );
    }
  },
  changeSeconds: function (secondsAdding) {
    let newSeconds = this.seconds + secondsAdding;
    let newMinutes = "";
    while (newSeconds >= 60) {
      newMinutes = this.minutes + 1;
      newSeconds = newSeconds - 60;
    }
    if (this.seconds < 10) {
      console.log(
        `The time after adding ${secondsAdding} seconds is (hh:mm:ss): ${this.hours}:${newMinutes}:0${newSeconds}`
      );
    } else {
      console.log(
        `The time after adding ${secondsAdding} seconds is (hh:mm:ss): ${this.hours}:${newMinutes}:${newSeconds}`
      );
    }
  },
  changeMinutes: function (minutesAdding) {
    let newMinutes = this.minutes + minutesAdding;
    let newHours = "";
    while (newMinutes >= 60) {
      newHours = this.hours + 1;
      newMinutes = newMinutes - 60;
    }
    if (this.seconds < 10) {
      console.log(
        `The time after adding ${minutesAdding} minutes is (hh:mm:ss): ${newHours}:${newMinutes}:0${this.seconds}`
      );
    } else {
      console.log(
        `The time after adding ${minutesAdding} minutes is (hh:mm:ss): ${newHours}:${newMinutes}:${this.seconds}`
      );
    }
  },
  changeHours: function (hoursAdding) {
    const newHours = this.hours + hoursAdding;
    if (this.seconds < 10) {
      console.log(
        `The time after adding ${hoursAdding} hours is (hh:mm:ss): &{newHours}:&{this.minutes}:0${this.seconds}`
      );
    } else {
      console.log(
        `The time after adding ${hoursAdding} hours is (hh:mm:ss): &{newHours}:&{this.minutes}:${this.seconds}`
      );
    }
  },
};
time.displayTime()
time.changeSeconds(30)
time.changeMinutes(30)
time.changeHours(3)
