const MangoTree = require('./mango_tree.js');

class FruitTree extends MangoTree{
    constructor(object){
        super(object);
    }
}

module.exports = FruitTree;