const FruitTree = require('./fruit_tree.js');
const Fruit = require('./fruit.js');

class Pear extends Fruit{
    constructor(object){
        super(object);
    }
}


class PearTree extends FruitTree{
    constructor(object){
        super(object);
    }
}

let pearTree = new PearTree;

pearTree.fruit = new Pear;

// do {
//     pearTree.grow();
//     pearTree.produceMangoes();
//     pearTree.harvest();
    // console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
//} while (pearTree._healtyStatus !=  false)

//console.log(pearTree);

module.exports = PearTree;
