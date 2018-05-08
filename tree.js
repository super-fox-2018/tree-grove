class Tree {
  constructor(treeName, age, height, matureAge, healthyStatus) {
    this._treeName = treeName;
    this._age = age;
    this._height = height;
    this._matureAge = matureAge;
    this._healthyStatus = healthyStatus;
    this._fruits = [];
    this._goodCounter = 0;
    this._badCounter = 0;
    this._maxHeightAge = 10;
    this._maxAge = 10;
  }

  get age() { return this._age }
  get fruits() { return this._fruits }
  get height() { return this._height }
  get healthyStatus() { return this._healthyStatus }
  get matureAge() { return this._matureAge }
  get treeName() { return this._treeName }

  // Grow the tree
  grow() {
    // tambah tahun in year format
    let year = this._age;
    let matureAge = this._matureAge;
    let maxHeightAge = this._maxHeightAge;
    let maxAge = this._maxAge;
    // tentukan mature age, pohon dpt berbuah ketika mencapai mature age
    if (year >= matureAge) {
      this._isHarvesting = true;
    }
    // tambah tinggi pohon random number
    // tentukan umur pohon berhenti bertumbuh tinggi
    if (year < maxHeightAge) {
      //random between 0.1 - 0.9m
      let randomString = String(Math.random() * (0.9 - 0.1) + 0.1);
      let randomGrow = Number(randomString.slice(0, 3));
      this._height = this._height + randomGrow;
    }
    // tentukan umur pohon tsb mati
    if (year !== maxAge) {
      year++;
      this._age = year;
    } else {
      this._healthyStatus = false;
    }
  }

  // Get some fruits
  harvest() {
    // mengambil buah
    if (this._isHarvesting === true) {
      this._goodCounter = 0;
      this._badCounter = 0;
      let fruits = this._fruits;
      for (let i = 0; i < fruits.length; i++) {
        if (fruits[i].quality === 'good') this._goodCounter++;
        if (fruits[i].quality === 'bad') this._badCounter++;
      }
    }
  }
}

module.exports = Tree