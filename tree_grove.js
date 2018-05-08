const FruitTree = require('./fruit_tree.js');
const MangoTree = FruitTree.MangoTree
const AppleTree = FruitTree.AppleTree
const PearTree = FruitTree.PearTree
// const AppleTree = require('./apple_tree.js');
// const PearTree = require('./pear_tree.js');
class TreeGrove {

  constructor() {
    this.listTree = []
  }
  //METHOD
  inputTree(name, age, height, mature, healthy) {
    //"MangoTree", 3, 1.8, 7, true)
    //data pohon saat ini
    // maxAge, Mature, Stopheight

    if (name === 'MangoTree') {
      var listfruit = new MangoTree(7, mature, 9)

    } else if (name === 'AppleTree') {
      var listfruit = new AppleTree(5, mature, 9)
    } else if (name === 'PearTree') {
      var listfruit = new AppleTree(4, mature, 10)
    }


    listfruit.name = name
    listfruit.age = age
    listfruit.height = height
    listfruit.mature = mature
    listfruit.healthy = healthy
    this.listTree.push(listfruit)
  }

  show_ages() {
    //show umur setiap pohon
    console.log('last age:')
    let trees = this.listTree
    for (let i = 0; i < this.listTree.length; i++) {
      console.log(`${trees[i]._name} age: ${trees[i].age}`)
    }



  }


  nextYear() {
    let trees = this.listTree
    for (let i = 0; i < this.listTree.length; i++) {

      trees[i].age++
        console.log(`${trees[i]._name} age: ${trees[i].age}`)
    }



  }

  show_trees() {
    //semua nama pohon
    console.log('-------Show trees-------')
    for (let i = 0; i < this.listTree.length; i++) {
      console.log(`Name : ${this.listTree[i]._name}  | Age : ${this.listTree[i].age} | Height : ${this.listTree[i].height}`)
      console.log('----------')
    }

  }

  mature_trees() {
    //nama pohon yg sedang berbuah
    for (let i = 0; i < this.listTree.length; i++) {

      if (this.listTree[i].age >= this.listTree[i].mature) {
        console.log(`Name : ${this.listTree[i]._name} | Mature Age : ${this.listTree[i].age} |  Height : ${this.listTree[i].height}`)

      }

    }

  }

  dead_trees() {
    //nama pohon yg mati
    for (let i = 0; i < this.listTree.length; i++) {
      if (this.listTree[i].age === 9) {
        console.log(`Name : ${this.listTree[i]._name} dead Age : ${this.listTree[i].age}  `)
      }

    }



  }



}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("AppleTree", 5, 2.4, 12, true)
// grove.inputTree("AppleTree", 4, 1.2, 5, true)
// grove.inputTree("PearTree", 7, 2, 15, true)
// next year
grove.show_ages()
grove.nextYear()
// show trees age
// show trees
grove.show_trees()


// show trees
grove.mature_trees()

// show trees
grove.dead_trees()
