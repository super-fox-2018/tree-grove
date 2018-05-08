const FruitTree = require('./fruit_tree')

class AppleTree extends FruitTree{
    constructor(treeProperties){
        super(treeProperties)
        this.name = 'Apple Tree'
        this.stopGrowingAge = 6
        this.deathAge = 38
    }

    growing(){
        this.age++
        if(this.age >= this.matureAge) {
            this.Fruits = this.produceFruits(); 
            this.harvestFruits()
        }
        if(this.age < this.stopGrowingAge) this.height += (Math.random()*10)/10 + 0.3
        if(this.age >= this.deathAge) this.healthStatus = false
    }

    produceFruits(){
        let fruitsProduced = {good:parseInt(Math.random()*8), bad:parseInt(Math.random()*8)}
        return fruitsProduced
    }

    harvestFruits(){
        this.fruitsHarvested += this.Fruits['good']
    }
}

module.exports = AppleTree