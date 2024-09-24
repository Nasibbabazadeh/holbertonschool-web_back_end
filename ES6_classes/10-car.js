const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this_brand = brand;
    this_motor = motor;
    this_color = color;
  }

  cloneCar() {
    return new this.constructor(this_brand, this_motor, this_color);
  }
}
