class FruitTree{
    constructor(treeProperties){
        this.age = treeProperties.age
        this.height = treeProperties.height
        this.matureAge = treeProperties.matureAge
        this.healthStatus = treeProperties.healthStatus
        this.fruitsHarvested = 0
    }
}

module.exports = FruitTree