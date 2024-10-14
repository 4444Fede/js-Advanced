function Vehicle(mark, model, maxSpeed) {
  this.mark = mark;
  this.model = model;
  this.maxSpeed = maxSpeed;
  this.currentSpeed = 0;
}

Vehicle.prototype.accelerate = function (speed) {
  this.currentSpeed += speed;
  if (this.currentSpeed > this.maxSpeed) {
    this.currentSpeed = this.maxSpeed;
  }
  return `El vehiculo va a ${this.currentSpeed} por hora`;
};

Vehicle.prototype.stop = function () {
  this.currentSpeed = 0;
  return `El vehiculo freno`;
};

Vehicle.prototype.showInfo = function () {
  return `Marca: ${this.mark}, Modelo: ${this.model}, Velocidad Maxima: ${this.maxSpeed}`;
};

Vehicle.prototype.compareSpeed = function (anotherVehicle) {
  if (this.maxSpeed > anotherVehicle.maxSpeed) {
    return `El ${this.mark} ${this.model} es mas rapido`;
  } else if (this.maxSpeed < anotherVehicle.maxSpeed) {
    return `El ${anotherVehicle.mark} ${anotherVehicle.model} es mas rapido`;
  } else {
    return `Los 2 vehiculos son igual de rapidos`;
  }
};

function Car(mark, model, maxSpeed, doors) {
  Vehicle.call(this, mark, model, maxSpeed);
  this.doors = doors;
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);

Car.prototype.openDoors = function () {
  return `Se abrieron las ${this.doors} puertas`;
};

function Motorcycle(mark, model, maxSpeed, sidecar) {
  Vehicle.call(this, mark, model, maxSpeed);
  this.sidecar = sidecar;
}

Object.setPrototypeOf(Motorcycle.prototype, Vehicle.prototype);

Motorcycle.prototype.hasSidecar = function () {
  if (this.sidecar) {
    return `Tiene sidecar`;
  } else {
    return `No tiene sidecar`;
  }
};

const auto1 = new Car("Toyota", "Corolla", 180, 4);
const auto2 = new Car("Ford", "Mustang", 250, 2);
const moto1 = new Motorcycle("Yamaha", "MT-07", 200, false);
const moto2 = new Motorcycle("Harley-Davidson", "Fat Boy", 160, true);

console.log(auto1.showInfo());
console.log(auto2.showInfo());
console.log(moto1.showInfo());
console.log(moto2.showInfo());

console.log(auto1.openDoors());
console.log(auto2.openDoors());
console.log(moto1.hasSidecar());
console.log(moto2.hasSidecar());

console.log(auto1.accelerate(60));
console.log(auto2.accelerate(120));
console.log(auto2.accelerate(100));
console.log(moto1.accelerate(100));
console.log(moto2.accelerate(80));

console.log(auto1.stop());
console.log(moto1.stop());

console.log(auto1.compareSpeed(moto1));
console.log(auto2.compareSpeed(moto2));
