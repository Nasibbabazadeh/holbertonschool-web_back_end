export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  modelCar() {
    const cloneCar = this.constructor[Symbol.species];
    return new cloneCar();
  }
}
