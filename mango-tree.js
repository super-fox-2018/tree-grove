class FruitTree {
  constructor(name,age,height,matureAge,healthyStatus) {
    this._age = age
    this._height = height
    this._matureAge = matureAge // beda
    this._stopGrow = 18 // beda
    this._deadAge = 20 // beda
    this._fruitsProduced = 0
    //this._capacity = 20
    this._fruits = []
    this._harvested = 0
    this._bad = 0
    this._good = 0
    this._healthyStatus = healthyStatus
    this._treeType=name
  }

  get type() {
    return this._treeType
  }

  get age() {
    return this._age
  }

  // set setAge(value) {
  //   this._age = this._age+value
  // }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healthyStatus() {
    return this._healthyStatus
  }

  get harvested() {
    let result = `${this._fruits.length} (${this._good} good ${this._bad} bad)`
     this._harvested =result
    return this._harvested

  }


  // Get current states here

  // Grow the tree
  grow() {
    this._fruits=[]
    this._good = 0
    this._bad = 0

    this._age++
    if(this._age <= this._stopGrow) {
      this._height = this._height+(Math.floor(Math.random()*10)+1)
    }

    if(this._age == this._deadAge) {
      this._healthyStatus =false
    }

  }

  // Produce some mangoes
  produce() {
    let random = Math.floor(Math.random()*35+1)
    if(this._age >= this._matureAge && this._age <= this._deadAge) {
      this._fruitsProduced = random
    }
  }

  // Get some fruits
  harvest() {
    for(let i=0;i<this._fruitsProduced;i++) {
      if(this._treeType == "MangoTree") {
        let mango = new Mango()
        this._fruits.push(mango)  
      }else if(this._treeType == "AppleTree") {
        let apple = new Apple()
        this._fruits.push(apple)
      }else {
        let pear = new Pear()
        this._fruits.push(pear)
      }
      
    }

    for(let j=0;j<this._fruits.length;j++) {
      if(this._fruits[j].quality == "good") {
        this._good++
      }else{
        this._bad++
      }
    }
  }
}

class Fruit {
  constructor() {
    this.quality=this.fruitQuality()
  }

  fruitQuality() {
    let quality = ['good','bad']
    let random = Math.round(Math.random())

    return quality[random]
  }
}


class AppleTree extends FruitTree {
  constructor(name,age,height,matureAge,healthyStatus) {
    super(name,age,height,matureAge,healthyStatus)
  }

}

class Apple extends Fruit {
  constructor() {
    super()
  }
}



class MangoTree extends FruitTree {
  constructor(name,age,height,matureAge,healthyStatus) {
    super(name,age,height,matureAge,healthyStatus)
  }

}

class Mango extends Fruit {
  constructor() {
    super()
  }
}

class PearTree extends FruitTree {
  constructor(name,age,height,matureAge,healthyStatus) {
    super(name,age,height,matureAge,healthyStatus)
  }

}

class Pear extends Fruit {
  constructor() {
    super()
  }
}

module.exports = {AppleTree,PearTree,MangoTree}