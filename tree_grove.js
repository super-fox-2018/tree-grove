const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor(){
    this._trees = [];
    this._deadTrees = [];
    this._producingFruit = [];
  }

  inputTree( treeName, currentAge, height, matureAge, healthyStatus){
    if(treeName === "AppleTree"){
      let apple = new AppleTree(currentAge, height, matureAge, healthyStatus);
      this._trees.push(apple);
    }
    else if(treeName === "MangoTree"){
      let mango = new MangoTree(currentAge, height, matureAge, healthyStatus);
      this._trees.push(mango);
    }
    else if(treeName === "PearTree"){
      let pear = new PearTree(currentAge, height, matureAge, healthyStatus);
      this._trees.push(pear);
    }

  }

  nextYear(){
    console.log("-----------------------------------------");
    console.log("Start of the Year");
    console.log("-----------------------------------------");

    for(let i = 0; i < this._trees.length; i++){
      this._trees[i]._age = parseInt(this._trees[i]._age) +1;
    }
  }

  showAge(){

    console.log("These are the age of the trees in the grove: ")
    for(let i = 0; i < this._trees.length; i++){
      console.log("- " + this._trees[i]._age);
    }
  }

  showTrees(){

    if(this._trees.length !== 0){
      console.log("These are the trees in this grove: ")
      for(let i = 0; i < this._trees.length; i++){
        console.log("- " + this._trees[i].constructor.name);
      }
    }
    else{
      console.log("There are no live trees in the grove :(");
    }


  }

  mature_trees(){
    for(let i = 0; i < this._trees.length; i++){
      if(this._trees[i]._age === this._trees[i]._matureAge){
        this._producingFruit.push(this._trees[i].constructor.name);
      }
    }

    if(this._producingFruit.length === 0){
      console.log("There are no trees that are producing fruit this year");
    }
    else if (this._producingFruit.length === 1 ){
      console.log("This tree is producing fruit this year: " + this._producingFruit[0]);
    }
    else {

      console.log("These are the trees in the grove that are producing fruits: ");
      for(let i = 0; i < this._producingFruit.length; i++){
        console.log("- " + this._producingFruit[i]);
      }
    }
  }

  dead_trees(){
    console.log("-----------------------------------------");
    console.log("End of the Year");
    console.log("-----------------------------------------");
    for(let i = 0; i < this._trees.length; i++){
      if(this._trees[i]._age === this._trees[i].maxAge){
        this._deadTrees.push(this._trees[i].constructor.name);
        this._trees.splice(i, 1);
      }
    }

    for (let j = 0; j < this._deadTrees.length; j++){
      for(let k = 0; k < this._producingFruit.length; k++){
        if(this._deadTrees[j] === this._producingFruit[k]){
          this._producingFruit.splice(k, 1)
        }
      }
    }


    if(this._deadTrees.length === 0){
      console.log("No dead trees this year");
    }
    else if(this._deadTrees.length === 1){
      console.log("This tree died this year: " + this._deadTrees[0]);
    }
    else {
      console.log("These trees died this year: ")
      for(let i = 0 ; i < this._deadTrees.length; i++){
        console.log("- " + this._deadTrees[i]);
      }
    }
  }

  get treesLength(){
    return this._trees.length;
  }
}

class Tree{
  constructor(treeName, currentAge, height, matureAge, healthyStatus){
    this.constructor.name = treeName;
    this._age = currentAge;
    this._height = height;
    this._matureAge = matureAge;
    this._healthyStatus = healthyStatus;
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
// do{
  grove.nextYear()

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show trees
grove.mature_trees()

// show trees
grove.dead_trees()


// }
// while(grove.treesLength !== 0)
