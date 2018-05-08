const obj = require('./fruitTree.js');
const MangoTree = obj.MangoTree;
const AppleTree = obj.AppleTree;
const PearTree = obj.PearTree;

class TreeGrove {
  constructor(){
    this._treeGrove = [];
    this._year = 0;
    this._maxAge = 20;
    this._statHealty = true;
  }
  inputTree(name,age,height,matureAge,healtyStatus){

    if(name == 'MangoTree') {
      var mangoTree = new MangoTree(name, age, height, matureAge, healtyStatus);
      this._treeGrove.push(mangoTree);
    }
    else if(name == 'AppleTree'){
      var appleTree = new AppleTree(name, age, height, matureAge, healtyStatus);
      this._treeGrove.push(appleTree);
    }
    else if (name == 'PearTree') {
      var pearTree = new PearTree(name, age, height, matureAge, healtyStatus);
      this._treeGrove.push(pearTree);
    }
    return this._treeGrove ;
  }
  show_ages(){
    var ages = [];
    for (var i = 0; i < this._treeGrove.length;i++){
        ages.push('Year :'+this._treeGrove[i]._age);
    }
    return ages;
  }
  show_trees(){
    var nameFruits = [];
    for (var i = 0; i < this._treeGrove.length; i++) {
      nameFruits.push('Pohon :'+this._treeGrove[i]._name);
    }
    return nameFruits;
  }
  nextYear(){
    for (var i = 0; i < this._treeGrove.length; i++) {
      this._treeGrove[i]._age += 1;
      var nextYear = this._treeGrove[i]._age;
    }
    return this._treeGrove;
  }
  mature_trees(){
    var treeGrove = this._treeGrove;
    for (var i = 0; i < treeGrove.length; i++) {
      if(treeGrove[i]._matureAge >= treeGrove[i]._age){
        this._treeGrove[i]._harvested += Math.floor(Math.random()*this._treeGrove[i]._maxFruit);
        var panen = this._treeGrove[i]._harvested;
        // console.log(treeGrove[i]._name+' '+panen);
      }
    }
    return this._treeGrove;
  }
  dead_trees(){
    var dead_tree = [];
    for (var i = 0; i < this._treeGrove.length; i++) {
      if(this._treeGrove[i]._age==this._maxAge){
        dead_tree.push(this._treeGrove[i]._name);
        this._treeGrove[i]._statusHealty = false;
        this._statHealty = false;
      }
    }
    return dead_tree;
  }

}

var grove = new TreeGrove()

// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true);
grove.inputTree("MangoTree", 5, 2.4, 12, true);
grove.inputTree("AppleTree", 4, 1.2, 5, true);
grove.inputTree("PearTree", 7, 2, 15, true);
// console.log(grove.show_ages());
// console.log(grove.show_trees());
// // console.log(grove.inputTree());
// console.log(grove.mature_trees());
// console.log();
var lama_berkebun = 0;

 do {

// // next year
grove.nextYear()
//
// // show trees age
grove.show_ages()
//
// // show trees
grove.show_trees()
//
// // // show trees
grove.mature_trees()
//
// // show tree
grove.dead_trees()

console.log( `${lama_berkebun +=1} year`);
console.log(grove._treeGrove);
} while (grove._statHealty !=  false)
