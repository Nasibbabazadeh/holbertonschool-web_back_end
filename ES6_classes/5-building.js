export default class Building {
  constructor(evacuationWarningMessage, sqft) {
    super(evacuationWarningMessage);
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
