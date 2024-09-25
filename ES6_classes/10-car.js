const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');
class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  cloneCar() {
    const NewCar = Object.getPrototypeOf(this).constructor;
    return new NewCar();
  }
}
