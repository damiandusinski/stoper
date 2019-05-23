// box for min and ms
const minBox = document.querySelector(".stopwatch span");
const msBox = document.querySelector(".stopwatch span:last-child");

// all buttons and eventListenener
const start = document.querySelector(".btn-start");
start.addEventListener("click", () => {
  newStopWatch.startStopwatch();
});
const pause = document.querySelector(".btn-pause");
pause.addEventListener("click", () => {
  newStopWatch.pauseStopwatch();
});
const add = document.querySelector(".btn-add");
// add.addEventListener("click", () => {
//   newStopWatch.pauseStopwatch();
// });
const clear = document.querySelector(".btn-clear");
clear.addEventListener("click", () => {
  newStopWatch.clearStopwatch();
});
// Class
class Stopwatch {
  constructor() {
    let _time = 0;
    let _min = 0;
    let _ms = 0;
    this.flag = true;
    this.index = 0;

    this.getMin = () => _min;
    this.setMin = min => {
      _min = min;
    };
    this.getMs = () => _ms;
    this.setMs = ms => {
      _ms = ms;
    };
    this.getTime = () => _time;
    this.setTime = time => {
      _time = time;
    };
  }

  update() {
    let mss = this.getMs();
    if (mss < 10.0) {
      mss = "0" + mss;
      minBox.textContent = this.getMin();
      msBox.textContent = mss;
    } else {
      minBox.textContent = this.getMin();
      msBox.textContent = mss;
    }
  }

  startStopwatch() {
    let ms = this.getTime();

    if (this.flag === true) {
      start.classList.remove("show");
      clear.classList.remove("show");
      pause.classList.add("show");
      add.classList.add("show");
      this.flag = !this.flag;
      this.index = setInterval(() => {
        ms += 1 / 100;
        if (ms >= 60) {
          this.setMin(this.getMin() + 1);
          ms = 0;
        }
        let newms = ms.toFixed(2);
        // console.log(newms);

        this.setMs(newms);

        this.update();
        this.setTime(ms);
        // msBox.textContent = this.getMs();
        // //console.log(this.getMs());
      }, 1.5);
    }
  }

  pauseStopwatch() {
    clearInterval(this.index);
    pause.classList.remove("show");
    add.classList.remove("show");
    start.classList.add("show");
    clear.classList.add("show");
    this.flag = !this.flag;
  }
  clearStopwatch() {
    this.index = 0;
    this.setTime(0);
    this.setMin(0);
    minBox.textContent = "00";
    msBox.textContent = "00";
    clear.classList.remove("show");
  }
}

// Create new Stopwatch
let newStopWatch = new Stopwatch();
