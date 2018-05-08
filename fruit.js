class Fruit{
    constructor(){
        this.good = 0;
        this.bad = 0;
    }

    quality(){
        let condition = ['good', 'bad'];
        let random = Math.floor(Math.random() * condition.length)
        return condition[random];
    }
}

module.exports = Fruit;