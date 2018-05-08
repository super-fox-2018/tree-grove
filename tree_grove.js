const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this._trees = []
  }
  get trees () {
    return this._trees
  }

  inputTree (name, agePlanted, heightPlanted, matureAge) {
    if (name === "MangoTree") {
      this._trees.push(new MangoTree(name, agePlanted, heightPlanted, matureAge))
    }
    else if (name === "PearTree") {
      this._trees.push(new PearTree(name, agePlanted, heightPlanted, matureAge))
    }
    else if (name === "AppleTree") {
      this._trees.push(new AppleTree(name, agePlanted, heightPlanted, matureAge))
    }
  }

  showAge() {
    for (let i = 0; i < this._trees.length; i += 1) {
      if (this._trees[i]._age <= this._trees[i]._maxAge) {
        console.log(`${this._trees[i]._name}${i} is now ${this._trees[i]._age} years old`)
      }
      else {
        console.log(`${this._trees[i]._name}${i} has peaked at ${this._trees[i]._maxAge} years old`)
      }
    }
    console.log('\n')
  }

  showTrees() {
    for (let i = 0; i < this._trees.length; i += 1) {
      console.log(`name: ${this._trees[i]._name}${i}`)
    }
    console.log('\n')
  }

  nextYear() {
    // let currentYear = 0;
    for (let i = 0; i < this._trees.length; i += 1) {
      this._trees[i].grow();
      if (this._trees[i]._age <= this._trees[i]._maxAge) {
        console.log(`The ${this._trees[i]._name}${i} has turned ${this._trees[i]._age} years old.`)
      }
    }
    console.log('\n')
  }

  mature_trees() {
    let matureTreesCount = 0
    for (let i = 0; i < this._trees.length; i += 1) {
      // console.log(this._trees[i]._matureAge)
      //Manually input in the input function
      if (this._trees[i]._age > this._trees[i]._matureAge && this._trees[i]._age < this._trees[i]._maxAge) {
        console.log(`${this._trees[i]._name}${i} is bearing fruits`)
        matureTreesCount += 1;
      }
    }
    if (matureTreesCount === 0) {
      console.log(`There are no mature trees`)
    }
    console.log('\n')
  }
  dead_trees() {
    for (let i = 0; i < this._trees.length; i+=1) {
      if (this._trees[i].healthStatus !== false) {
        // console.log(this._trees[i]._age)
        console.log(`${this._trees[i]._name}${i} is alive :)`)
      }
      else {
        // console.log(this._trees[i]._age)
        console.log(`${this._trees[i]._name}${i} has met its end :(`)
      }
    }
    console.log('\n')
  }
}


let grove = new TreeGrove()

// input your trees data !
// parameter ke-1: nama pohon // Tree Name
// parameter ke-2: umur pohon ketika ditanam di taman tersebut // Tree Age when planted
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut //Tree Height when planted
// parameter ke-4: umur mature pohon tersebut // Maturity age
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam // Health Status

// grove.inputTree(name, agePlanted, heightPlanted, matureAge, healthStatus,)
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)


// console.log(grove._trees) -> to show all tree objects

// next year
/* if this step is not done, all trees are below maturity (fruit bearing) age.
Thus it shows "There are no mature trees" */
let averageDyingAge = 20
for (let i = 0; i < averageDyingAge; i+=1) {
  grove.nextYear()
}

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show mature trees
grove.mature_trees()
//
// // show trees health status
grove.dead_trees()
