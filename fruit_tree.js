class FruitTree {
  constructor(name, age, height, matureAge, healthyStatus) {
    this._name = name;
    this._age = age;
    this._height = height;
    this._matureAge = matureAge;
    this._healthyStatus = healthyStatus;
  }

  grow() {
    let random = Math.random().toFixed(1);
    if (this._healthyStatus) { // stop grow if dead
      this._age += 1;
      if (this._age < this._stopGrowing) { // stop growing age
        this._height += Number(random);
        this._height = Number(this._height.toFixed(1));
      }
      if (this._age === this._deadAge) {
        this._healthyStatus = false;
      }
    }
  }
}

module.exports = FruitTree;
