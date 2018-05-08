const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');
const MangoTree = require('./mango_tree.js');
//MangoTree.MangoTree

class TreeGrove {
  constructor() {
    this._trees = [];
  }

  inputTree(treeName, age, height, matureAge, healthyStatus) {
    // let tree = new class object?
    switch (treeName) {
      case 'AppleTree': 
        let appleTree = new AppleTree(treeName, age, height, matureAge, healthyStatus);
        this._trees.push(appleTree);
        break;
      case 'MangoTree': 
        let mangoTree = new MangoTree(treeName, age, height, matureAge, healthyStatus);
        this._trees.push(mangoTree);
        break;
      case 'PearTree': 
        let pearTree = new PearTree(treeName, age, height, matureAge, healthyStatus);
        this._trees.push(pearTree);
        break;
      default: 
        let defaultTree = new Tree(treeName, age, height, matureAge, healthyStatus);
        this._trees.push(defaultTree);
    }
  }
  
  nextYear() {
    // loop each trees array
    // grow()
    // #TODO: refactor: add produce() method on Tree, override on child trees
    for (let i = 0; i < this._trees.length; i++) {
      this._trees[i].grow();

      if (this._trees[i].treeName === 'MangoTree') {
        this._trees[i].produceMangoes();
      } else if (this._trees[i].treeName === 'AppleTree') {
        this._trees[i].produceApples();
      } else if (this._trees[i].treeName === 'PearTree') {
        this._trees[i].producePears();
      }
    }
  }
  showAge() {
    // #TODO: refactor output
    for (let i = 0; i < this._trees.length; i++) {
      console.log(`${this._trees[i].treeName}: ${this._trees[i].age} year(s) old`);
    }
  }
  showTrees() {
    // #TODO: refactor output
    for (let i = 0; i < this._trees.length; i++) {
      console.log(this._trees[i]);
    }
  }
  matureTrees() {
    // #TODO
  } //filtering
  deadTrees() {
    // #TODO
  } //filtering
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
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show trees
// grove.matureTrees()

// show trees
// grove.deadTrees()