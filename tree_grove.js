const Mango = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
      this._trees =[]
    }

    get trees(){
        return this._trees
    }
    inputTree(name,age,height,matureAge,healthyStatus){
        if(name === 'MangoTree'){
            this._trees.push(new Mango(name,age,height,matureAge,healthyStatus))
        }
        else if(name === 'AppleTree'){
            this._trees.push(new Mango(name,age,height,matureAge,healthyStatus))
        }
        else if(name === 'PearTree'){
            this._trees.push(new Mango(name,age,height,matureAge,healthyStatus))
        }
        // console.log(this._trees)
    }

    nextYear(){
        let trees = this._trees
        for(let i=0;i<trees.length;i++){
            
        if(trees[i].age >trees[i].maxAge || trees[i].height>trees[i].maxHeight){
            trees[i].healthyStatus = false
        }
            trees[i].age++
            console.log(`${trees[i].name} age: ${trees[i].age}`)
        }
   
    }

    showAge(){
  
        for(let i=0; i< this._trees.length ; i++){
            console.log(this._trees[i].name,'------------', this._trees[i].age)
        }
        // console.log(this._trees)

    }

    showTrees(){
        for(let i=0;i<this._trees.length;i++){
            console.log(`Name : ${this._trees[i].name} Age : ${this._trees[i].age} Height : ${this._trees[i].height}`)
        }
    }

    matureTrees(){
        console.log('Mature Trees')
        for(let i=0;i<this._trees.length;i++){
            if(this._trees[i].age >= this._trees[i].matureAge){
                console.log(`Name : ${this._trees[i].name} Age : ${this._trees[i].age} Height : ${this._trees[i].height}`)
            }
        }
    }

    deadTrees(){
        for(let i=0;i<this._trees.length;i++){
            if(this._trees[i].healthyStatus === false){
                console.log(`Name : ${this._trees[i].name} Age : ${this._trees[i].age} Height : ${this._trees[i].height}`)
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
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)


let j =0
while(j<5){
    console.log(` Tahun ke ${j+2} `)
    grove.nextYear()
    j++
   
}

// show trees age
grove.showAge()

// // show trees
grove.showTrees()

// // show trees
grove.matureTrees()

// show trees
grove.deadTrees()

// grove.nextYear()
// grove.nextYear()
// grove.nextYear()

// grove.mature_trees()



