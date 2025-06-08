import {EventEmitter} from 'node:events'

function Counter(i) {
  this.inc = function () {
    i++;
    this.emit("inc", i);
  };
}

Counter.prototype = new EventEmitter();

const counter = new Counter(10);

counter.on("inc", (i) => console.log("count val: ", i));

counter.inc();
counter.inc();
