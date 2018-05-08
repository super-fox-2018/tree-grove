const FruitTree = require('./fruit_tree.js');
const Fruit = require('./fruit.js');



class Apple extends Fruit{
    constructor(object){
        super(object);
    }
}

class AppleTree extends FruitTree{
    constructor(object){
        super(object);
        this._fruits =  new Apple;
    }
}



let appleTree = new AppleTree;

    appleTree.fruit = new Apple;

// do {
//     appleTree.grow();
//     appleTree.produceMangoes();
//     appleTree.harvest();
    // console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
//} while (appleTree._healtyStatus !=  false)

//console.log(appleTree);

module.exports = AppleTree;
