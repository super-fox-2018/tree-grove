const FruitTree = require('./tree.js')
class Pear extends FruitTree{
    constructor(name,age,height,matureAge,healthyStatus){
        super(name,age,height,matureAge,healthyStatus)
    }
}
module.exports = Pear;