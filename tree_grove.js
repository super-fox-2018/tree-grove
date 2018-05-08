const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this.trees = [];
    this.numberOfTrees = [0,0,0]; //index 0 = mangoTree, index 1 = appleTree, index 2 = pearTree
  }

  inputTree(name, age, height, matureAge, healthyStatus) {
    let newTree = null;
    let numberOfTrees = this.numberOfTrees;
    let classes = { // dynamic class name
      MangoTree,
      AppleTree,
      PearTree,
    };
    if (name === 'MangoTree') {
      numberOfTrees[0]++;
      newTree = new classes[name](`${name} #${numberOfTrees[0]}`, age, height, matureAge, healthyStatus);
    } else if (name === 'AppleTree') {
      numberOfTrees[1]++;
      newTree = new classes[name](`${name} #${numberOfTrees[1]}`, age, height, matureAge, healthyStatus);
    } else {
      numberOfTrees[2]++;
      newTree = new classes[name](`${name} #${numberOfTrees[2]}`, age, height, matureAge, healthyStatus);
    }
    this.trees.push(newTree);
  }
  nextYear() {
    for (let i = 0; i < this.trees.length; i++) {
      this.trees[i].grow();
    }
  }

  showAge() {
    let tree = null;
    for (let i = 0; i < this.trees.length; i++) {
      tree = this.trees[i];
      console.log(`${tree._name} is ${tree._age} years old.`);
    }
  }

  showTrees() {
    let tree = null;
    let result = [];
    for (let i = 0; i < this.trees.length; i++) {
      tree = this.trees[i];
      result.push(tree._name);
    }
    console.log(`All trees: ${result.join(', ')}`);
  }

  matureTrees() {
    let tree = null;
    let result = [];
    for (let i = 0; i < this.trees.length; i++) {
      tree = this.trees[i];
      if (tree._age >= tree._matureAge && tree._healthyStatus) {
        result.push(tree._name);
      }
    }
    if (result.length === 0) {
      console.log('No tree has matured');
    } else {
      console.log(`Mature trees: ${result.join(', ')}`);
    }
  }

  deadTrees() {
    let tree = null;
    let result = [];
    for (let i = 0; i < this.trees.length; i++) {
      tree = this.trees[i];
      if (!tree._healthyStatus) {
        result.push(tree._name);
      }
    }
    if (result.length === 0) {
      console.log('No tree has died');
    } else {
      console.log(`Dead trees: ${result.join(', ')}`);
    }
  }
}

var grove = new TreeGrove();
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree('MangoTree', 3, 1.8, 7, true);
grove.inputTree('MangoTree', 5, 2.4, 12, true);
grove.inputTree('AppleTree', 10, 1.2, 5, true);
grove.inputTree('PearTree', 7, 2, 15, true);

// next 5 years
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();
grove.nextYear();

// show trees age
grove.showAge();

// show trees
grove.showTrees();

// show trees
grove.matureTrees();

// show trees
grove.deadTrees();
