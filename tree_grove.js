const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this._trees = [];
  }

  inputTree(name, age, height, matureAge, healthyStatus) {
    switch(name) {
      case 'MangoTree':
        const mangoTree = new MangoTree(name, age, height, matureAge, healthyStatus);
        this._trees.push(mangoTree)
        break;
      case 'AppleTree':
        const appleTree = new AppleTree(name, age, height, matureAge, healthyStatus);
        this._trees.push(appleTree)
        break;
      case 'PearTree':
        const pearTree = new PearTree(name, age, height, matureAge, healthyStatus);
        this._trees.push(pearTree)
        break;
      default:
    }
  }

  nextYear() {
    for (let i = 0; i < this._trees.length; i += 1) {
      this._trees[i].grow();
    }
  }

  showAges() {
    const ages = [];
    for (let i = 0; i < this._trees.length; i += 1) {
      const treesAge = this._trees[i].age;
      ages.push(treesAge);
    }
    return ages;
  }

  showTrees() {
    const trees = [];
    for (let i = 0; i < this._trees.length; i += 1) {
      const treesName = this._trees[i].name;
      trees.push(treesName);
    }
    return trees;
  }

  matureTrees() {
    const matureTrees = [];
    for (let i = 0; i < this._trees.length; i += 1) {
      const treesAge = this._trees[i].age;
      const treesMatureAge = this._trees[i].matureAge;
      if (treesAge >= treesMatureAge) {
        const treesName = this._trees[i].name;
        matureTrees.push(treesName);
      }
    }
    return matureTrees;
  }

  deadTrees() {
    const deadTrees= [];
    for (let i = 0; i < this._trees.length; i += 1) {
      const treesHealthyStatus = this._trees[i].healthyStatus;
      if (!treesHealthyStatus) {
        const treesName = this._trees[i].name;
        deadTrees.push(treesName);
      }
    }
    return deadTrees;
  }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)

// next year
const elapsedYears = 14;
for (let i = 0; i < elapsedYears; i += 1) {
  grove.nextYear();
}

// Show trees age
console.log('Ages: ', grove.showAges());

// Show trees
console.log('Trees: ', grove.showTrees());

// Mature trees
console.log('Mature Trees: ', grove.matureTrees());

// Dead trees
console.log('Dead Trees: ', grove.deadTrees());
