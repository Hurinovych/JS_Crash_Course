//Task 1
const now = new Date();
let time ={
    // hours:now.getHours(),
    // minutes:now.getMinutes(),
    // seconds:now.getSeconds(),
    hours:16,
    minutes:00,
    seconds:00,
//1
    showTime(){
        console.log(`${this.hours < 10 ? "0" : ""}${this.hours}:${this.minutes < 10 ? "0" : ""}${this.minutes}:${this.seconds < 10 ? "0" : ""}${this.seconds}`);
    },
//2
    addSecond() {
        this.seconds++;
        if (this.seconds === 60) {
          this.seconds = 0;
          this.minutes++;
          if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
            if (this.hours === 24) {
              this.hours = 0;
            }
          }
        }
    },
//3
    subSecond() {
        this.seconds--;
        if (this.seconds < 0) {
          this.seconds = 59;
          this.minutes--;
          if (this.minutes < 0) {
            this.minutes = 59;
            this.hours--;
            if (this.hours < 0) {
              this.hours = 23;
            }
          }
        }
      }  
}
time.showTime()
time.subSecond()
time.showTime()
time.addSecond()
time.showTime()
time.addSecond()
time.showTime()
//4
document.write(`${now.getHours() < 10 ? "0" : ""}${now.getHours()}:${now.getMinutes() < 10 ? "0" : ""}${now.getMinutes()}:${now.getSeconds() < 10 ? "0" : ""}${now.getSeconds()}`);

//Task 2
distance = prompt("Enter distance:");
let car = {
    manufacturer: "Porsche",
    model: "911",
    year: 1963,
    avgSpeed: 50,
  InfoToConsole(){
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Average Speed: ${this.avgSpeed} km/h`);
},
  WastedTimeToCoverDistance(){
    const hours = distance / this.avgSpeed;
    const breaks = Math.floor(hours / 4);
    const totalTime = hours + breaks;
    console.log(`Total time to cover ${distance} km: ${totalTime} hours`);
  }
}
car.InfoToConsole();
car.WastedTimeToCoverDistance();
