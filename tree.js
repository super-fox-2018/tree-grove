"use strict"

// Release 2
class FruitTree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._matureAge = 0;
    this._fruits = [];
    this._harvested = '';
    this._healthyStatus = true;
  }
  get age() {
    return this._age;
  }
  set age(age) {
    this._age = age;
  }

  get height() {
    return this._height
  }

  set height(height) {
    this._height = height;
  }

  get matureAge() {
    return this._matureAge
  }

  set matureAge(matureAge) {
    this._matureAge = matureAge;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  set healthyStatus(healthyStatus) {
    this._healthyStatus = healthyStatus;
  }

  get harvested() {
    return this._harvested;
  }
  // Grow the tree
  grow() {
    this._age = this._age + 1;

  }

  harvest() {
    let total = 0;
    let totGood = 0;
    let totBad = 0;
    if (this._fruits.length !== 0) {
      for (let i = 0; i < this._fruits.length; i++) {
        total += this._fruits[i]._qty;
        if (this._fruits[i]._quality === 'good') {
          totGood += this._fruits[i]._qty;
        } else {
          totBad += this._fruits[i]._qty;
        }
      }
      this._harvested = `${total} (${totGood} good, ${totBad} bad)`;
    }
    else {
      this._harvested = `Pohon Belum Berbuah Karena masih berumur ${this._age}`;
    }
  }
}

class Fruit {
  constructor() {
    this._qty = Math.floor(Math.random() * 50);
    this._quality = this.randomQuality();
  }

  randomQuality() {
    const quality = ['good', 'bad'];

    return quality[Math.floor(Math.random() * quality.length)];
  }
}


class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor() {
    super();
    this.deadAge = 20
  }
  grow() {
    //overriding
    super.grow();
    if (this._age <= this.deadAge) {
      this._height = this._height + Math.round(Math.random() * 2) + 1;

    }
    if (this._age === this.deadAge) {
      this._healthyStatus = false;
    }
  }
  // Produce some mangoes
  produceMangoes() {
    if (this._age >= this.matureAge) {
      let mango = new Fruit();
      this._fruits.push(mango);
    }
  }

}


// //  driver code untuk release 0

// let mangoTree = new MangoTree();
// console.log ('----------- Mango -------------')
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthyStatus)

// if (!mangoTree.healthyStatus) {
//   console.log("The tree has met its end. so sad");
// }

class AppleTree extends FruitTree {
  // Initialize a new AppleTree
  constructor() {
    super();
    this.deadAge = 25;
  }

  grow() {
    //overriding
    super.grow();
    if (this._age <= this.deadAge) {
      this._height += Math.random() * 2;

    }
    if (this._age === this.deadAge) {
      this._healthyStatus = false;
    }
  }

  //produce apple
  produceApple() {
    if (this._age >= this.matureAge) {
      let apple = new Fruit();
      this._fruits.push(apple);
    }
  }
}

// let appleTree = new AppleTree();
// console.log ('----------- Apple -------------')
// do {
//   appleTree.grow();
//   appleTree.produceApple();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} m | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthyStatus)

// if (!appleTree.healthyStatus) {
//   console.log("The tree has met its end. so sad");
// }

class PearTree extends FruitTree {
  // Initialize a new AppleTree
  constructor() {
    super();
    this.deadAge = 30;
  }

  grow() {
    //overriding
    super.grow();
    if (this._age <= this.deadAge) {
      this._height += Math.random() * 1;
    }
    if (this._age === this.deadAge) {
      this._healthyStatus = false;
    }
  }

  //produce apple
  producePear() {
    if (this._age >= this.matureAge) {
      let pear = new Fruit();
      this._fruits.push(pear);
    }
  }
}

// let pearTree = new PearTree();
// console.log ('----------- pear -------------')
// do {
//   pearTree.grow();
//   pearTree.producePear();
//   pearTree.harvest();
//   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} m | Fruits harvested = ${pearTree.harvested}`)
// } while (pearTree.healthyStatus)

// if (!pearTree.healthyStatus) {
//   console.log("The tree has met its end. so sad");
// }


module.exports = { MangoTree, AppleTree, PearTree };