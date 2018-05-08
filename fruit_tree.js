class FruitTree {
  constructor(name, age, height, matureAge, healthyStatus, maxAge) {
    this._name = name;
    this._age = age;
    this._height = height;
    this._matureAge = matureAge;
    this._healthyStatus = healthyStatus;
    this._maxAge = maxAge;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get matureAge() {
    return this._matureAge;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get maxAge() {
    return this._maxAge;
  }

  grow() {
    this._age += 1;
    if (this._age < 8) {
      const growth = Math.round(Math.random() * 10) / 10;
      this._height += growth;
    }
    if (this._age === this._maxAge) {
      this._healthyStatus = false;
    }
  }
}

module.exports = FruitTree;