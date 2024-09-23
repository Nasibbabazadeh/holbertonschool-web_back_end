export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor === Building) {
      throw new Error('Cannot instantiate abstract class Building directly');
    }
  }
  get sqft() {
    return this._sqft;
  }
  @abstract evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
