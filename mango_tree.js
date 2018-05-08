class MangoTree {
  constructor(age, height, matureAge, healthyStatus) {
    this._age = age;
    this._height = height;
    this._mature = matureAge;
    this._healthyStatus = healthyStatus
    this._maxAge = 10;
  }

  grow() {
    this._age += 1;
  }
}

module.exports = MangoTree