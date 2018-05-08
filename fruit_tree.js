class FruitTree {

  constructor(obj) {
    this._age = obj.age;
    this._height = obj.height;
    this._amtGrow = obj.amtGrow;
    this._maxFruit = obj.maxFruit;
    this._produced = obj.produced;
    this._harvested = obj.harvested;
    this._healtyStatus = obj.healthyStatus;
    this._maxAge = obj.maxAge
    this._goodCount = obj.goodCount;
    this._badCount = obj.badCount;
    this._matureAge = obj.matureAge
  }


  get age() {
    return this._age;
  }

  get height() {

    return ((Math.round((this._height/100) * 10)/ 10) + "m");
  }

  get fruits() {
    return this._max;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {
    return this._harvested + " (" + this._goodCount + " good, " + this._badCount + " bad)";
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;

    if(this._age >= this._fruitBearing){
      var ran = Math.floor(Math.random() * this._amtGrow + 1);
      this._height += ran;
    }
    if(this._age >= this._maxAge){
      this._healthyStatus = false;
    }
  }

  // Produce some fruits
  produceFruits() {
    this._badCount = 0;
    this._goodCount = 0;
    if(this._age > this._matureAge){
      var ran = Math.floor(Math.random() * this._maxFruit + 1);
      for(let i=0; i<ran; i++) {
        let fruit = new Fruit()
        this._produced.push(fruit);
      }
    }

  }

  // Get some fruits
  harvest() {

    this._harvested = this._produced.length
    for(let i = 0; i < this._harvested; i++){
      if(this._produced[i].quality === "bad"){
        this._badCount++;
      }
      else if(this._produced[i].quality === "good"){
        this._goodCount++;
      }
    }
  }

}
class Fruit {
  // Produce a fruit
  constructor() {
    this.quality = this.quality()
  }

  quality(){
    var arr = ["good", "bad"];
    var ran = Math.floor(Math.random() * arr.length);

    return arr[ran];
  }
}

// class MangoTree extends FruitTree{
//   constructor(){
//     let obj = {
//       maxAge : 15,
//       amtGrow : 100,
//       maxFruit : 20,
//       fruitBearing : 1,
//     };
//     super(obj);
//
//   }
// }
//
// class Mango extends Fruit{
//   constructor(){
//     super();
//   }
// }
//
// class AppleTree extends FruitTree{
//   constructor(){
//     let obj = {
//       maxAge : 30,
//       amtGrow : 120,
//       maxFruit : 15,
//       fruitBearing : 4,
//     };
//     super(obj);
//   }
// }
//
// class Apple extends Fruit{
//   constructor(){
//     super();
//   }
// }
//
//
//
// class PearTree extends FruitTree{
//   constructor(){
//     let obj = {
//       maxAge : 25,
//       amtGrow : 140,
//       maxFruit : 10,
//       fruitBearing : 3,
//     };
//     super(obj);
//   }
// }
//
// class Pear extends Fruit{
//   constructor(){
//     super();
//   }
// }
//
//
//
//
// console.log("--------------------------------------------------------");
// let mangoTree = new MangoTree()
// console.log("The Mango tree is alive! :smile:")
// console.log("--------------------------------------------------------");
// do {
//   mangoTree.grow();
//   mangoTree.produceFruits();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthyStatus != false)
//
// console.log("--------------------------------------------------------");
// console.log("The Mango tree has met its end. :sad:")
// console.log("--------------------------------------------------------");
//
//
// console.log("\n--------------------------------------------------------");
// let appleTree = new AppleTree()
// console.log("The Apple tree is alive! :smile:")
// console.log("--------------------------------------------------------");
// do {
//   appleTree.grow();
//   appleTree.produceFruits();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthyStatus != false)
//
// console.log("--------------------------------------------------------");
// console.log("The Apple tree has met its end. :sad:")
// console.log("--------------------------------------------------------");
//
// console.log("\n--------------------------------------------------------");
// let pearTree = new PearTree()
// console.log("The Pear tree is alive! :smile:")
// console.log("--------------------------------------------------------");
// do {
//   pearTree.grow();
//   pearTree.produceFruits();
//   pearTree.harvest();
//   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
// } while (pearTree.healthyStatus != false)
//
// console.log("--------------------------------------------------------");
// console.log("The Pear tree has met its end. :sad:")
// console.log("--------------------------------------------------------");



module.exports = {FruitTree, Fruit}
