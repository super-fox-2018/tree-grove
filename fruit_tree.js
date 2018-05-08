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

  produceFruits() {
    if (this._age > this._matureAge && this.healthyStatus) {
      const numOfFruits = Math.floor(Math.random() * 50 * this._age) + 1;
      for (let i = 0; i < numOfFruits; i += 1) {
        const fruit = new Fruit();
        this._fruits.push(fruit);
      }
    }
  }

  harvest() {
    this._harvested.total = this._fruits.length;
    this._harvested.good = 0;
    this._harvested.bad = 0;
    for (let i = 0; i < this._harvested.total; i += 1) {
      if (this._fruits[i].quality === 'Good') {
        this._harvested.good += 1;
      } else {
        this._harvested.bad += 1;
      }
    }
    this._fruits = [];
  }
}


class Fruit {
  constructor() {
    this._quality = ['Good', 'Bad'][Math.floor(Math.random()*2)];
  }

  get quality() {
    return this._quality;
  }
}

module.exports = FruitTree;