function Machine() {
  this.state = "stopped";
  this.time = 2000;
  this.timer = null;
  this.interval = null;
}

Machine.prototype.run = function () {
  this.state = "started";
  console.log("Починаю роботу...");
  console.log("Час приготування - " + this.time + " ");
  this.interval = setInterval(
    function () {
        console.log(" | ");
    }.bind(this),
    1000
  );
  this.timer = setTimeout(this.onReady.bind(this), this.time);
  console.log(this.state);
};

Machine.prototype.onReady = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  console.log("Готово! ");
  this.state = "stopped";
  console.log(this.state);
};

Machine.prototype.stop = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  console.log("Примусове вимкнення!");
  this.state = "stopped";
  console.log(this.state);
};

function CoffeeMachine() {
  Machine.apply(this);
  this.drink = "вода";
}

CoffeeMachine.prototype = Object.create(Machine.prototype);
CoffeeMachine.prototype.constructor = CoffeeMachine;

CoffeeMachine.prototype.run = function (drink) {
  if (drink) {
    this.drink = drink;
  } else {
    this.drink = "вода";
  }

  switch (this.drink) {
    case "латте":
      this.time = 5000;
      break;
    case "espresso":
      this.time = 3000;
      break;
    case "американо":
      this.time = 4000;
      break;
    case "вода":
      this.time = 1000;
      break;
    default:
      console.log("Такого напою немає!");
      this.stop();
      return;
  }

  console.log(`Приготування: ${this.drink}`);
  Machine.prototype.run.call(this);
};

function Multivariate() {
  Machine.apply(this);
}

Multivariate.prototype = Object.create(Machine.prototype);
Multivariate.prototype.constructor = Multivariate;

Multivariate.prototype.run = function (dish) {
  switch (dish) {
    case "суп":
      this.time = 7000;
      break;
    case "тушкування":
      this.time = 9000;
      break;
    case "випічка":
      this.time = 12000;
      break;
    default:
      console.log("Такої страви немає!");
      this.stop();
      return;
  }

  console.log(`Приготування: ${dish}`);
  Machine.prototype.run.call(this);
};

let machine = new Machine();
machine.run();
setTimeout(() => machine.stop(), 1000);

let coffeeMachine = new CoffeeMachine();
coffeeMachine.run("латте");
setTimeout(() => coffeeMachine.run("espresso"), 6000);
setTimeout(() => coffeeMachine.run("чай"), 10000);

let multivariate = new Multivariate();
multivariate.run("суп");
setTimeout(() => multivariate.run("тушкування"), 8000);
