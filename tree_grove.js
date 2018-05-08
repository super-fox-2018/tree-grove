const Fruits = require('./mango-tree.js');
const MangoTree = Fruits.MangoTree
const AppleTree = Fruits.AppleTree
const PearTree = Fruits.PearTree


//========================================================================



class TreeGrove {
	constructor() {
		this.listTree = []

	}


	inputTree(name,age,height,matureAge,healthyStatus) {

		var appleTree = new AppleTree(name,age,height,matureAge,healthyStatus)
		var mangoTree = new MangoTree(name,age,height,matureAge,healthyStatus)
		var pearTree = new PearTree(name,age,height,matureAge,healthyStatus)

		if(name == "MangoTree") {
			this.listTree.push(mangoTree)	
		}else if(name == "AppleTree") {
			this.listTree.push(appleTree)
		}else{
			this.listTree.push(pearTree)
		}
		
	}

	showAge() {
		console.log("=================UMUR POHON======================")
		for(let i=0;i<this.listTree.length;i++) {
			console.log(`${this.listTree[i]._treeType}, age = ${this.listTree[i]._age}` )
		}
	}

	nextYear() {
		for(let i=0;i<this.listTree.length;i++) {
			this.listTree[i]._age++
			this.listTree[i]._height = this.listTree[i]._height+(Math.floor(Math.random()*10)+1)
			if(this.listTree[i]._age == this.listTree[i]._deadAge) {
    		  this.listTree[i]._healthyStatus =false
    		}
		}
	}

	showTrees() {
		console.log("=================NAMA POHON======================")
		for(let i=0;i<this.listTree.length;i++) {
			console.log(this.listTree[i].type)
		}
	}

	mature_trees() {
		console.log("==============POHON YANG SEDANG BERBUAH================")
		for(let i=0;i<this.listTree.length;i++) {
			if(this.listTree[i].age>=this.listTree[i]._matureAge && this.listTree[i].age<this.listTree[i]._deadAge) {
				console.log(this.listTree[i].type)
			}
		}
	}

	dead_trees() {
		console.log("=================POHON MATI=======================")
		for(let i=0;i<this.listTree.length;i++) {
			if(this.listTree[i]._deadAge == this.listTree[i]._age) {
				console.log(this.listTree[i].type)
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
grove.inputTree("PearTree", 15, 2, 15,true)

console.log("=========DAFTAR POHON================")


// next year
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
console.log(grove.listTree)
// show trees age
grove.showAge()

// show trees
grove.showTrees()


// show trees
grove.mature_trees()

// show trees
grove.dead_trees()

// do {
//      grove.nextYear();
//      grove.showAge()
//      grove.mature_trees();
//      grove.dead_trees();
//      console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
//    } while (appleTree.healthyStatus != false)