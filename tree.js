"use strict"

// Release 2
class FruitTree {
  constructor(name,age,height,matureAge,healthyStatus){
    this._name = name
    this._age = age
    this._height =height
    this._matureAge = matureAge
    this._fruits = []
    this._healthyStatus = healthyStatus
    this._maxAge = Math.round(Math.random() * 4) + 6;
    this._maxHeight = Math.round(Math.random() * 4) + 6;

  }

  get maxHeight(){
      return this._maxHeight
  }
  get maxAge(){
      return this._maxAge
  }
  get name(){
      return this._name
  }
  set name(name){
    this._name = name
    }

  get age() {
    return this._age;
  }

  set age(age){
      this._age = age
  }

  get height() {
    return this._height;
  }
  set height(height){
      this._height = height
  }

  get matureAge() {
    return this._matureAge;
  }
  set matureAge(matureAge){
      this._matureAge = matureAge
  }

  get healthyStatus() {
    return this._healthyStatus;
  }
  set healthyStatus(status){
      this._healthyStatus = status
  }

  get harvested() {
    return this.harvest()
  }


  // Get some fruits
  grow() {
    this._age++;
    this._height = this._height + Math.floor(Math.random()*2) + 1;
    
    if(this._age >= this._maxAge || this._height >= this._maxHeight){
      this._healthyStatus = false;
    }
    
  }

  harvest() {
    let good =0;
    let bad =0;
    for(let indexFruit = 0; indexFruit<this._fruits.length; indexFruit++){
      if(this._fruits[indexFruit].fruitQuality === 0){
        good++;
      }else{
        bad++;
      }
    }
    let result = `${this._fruits.length} (${good} good, ${bad} bad)`;
    // this._fruits = [];
    return result;
  }

  produceFruits() {
    let totalFruit = Math.round(Math.random()*8);
    for(let loop = 0; loop<totalFruit; loop++){
      if(this.nameOfFruit === 'Mango'){
        let buah = new Mango;
        this._fruits.push(buah);
      }else if(this.nameOfFruit === 'Apple'){
        let buah = new Apple;
        this._fruits.push(buah);
      }
    }
  }


 
}
class Fruit {
  constructor() {
    this._fruitQuality = Math.round(Math.random());
  }

  get fruitQuality(){
    return this._fruitQuality;
  }
}

// release 0

// class MangoTree extends FruitTree{

//   // Initialize a new MangoTree
//   constructor() {
//     super(20, 24, 'Mango');
//   }

// }

// class Mango extends Fruit{
//   // Produce a mango
//   constructor() {
//     super();
//   }
// }

// console.log('MANGO TREE');


// let mangoTree = new MangoTree()
// console.log('The tree is alive! :smile:');
//   do {
//     mangoTree.grow();
//     mangoTree.produceFruits('Mango');
//     mangoTree.harverst;
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
//     debugger;
//   } while (mangoTree.healthyStatus != false)
// console.log('The tree has met its end. :sad:');
 module.exports = FruitTree
