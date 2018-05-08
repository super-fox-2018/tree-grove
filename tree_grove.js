const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
	constructor(){
		this._trees = []
        this._mature = []
        this._dead = []
	}
	inputTree(treeName,age,height,matureAge,healthStat,maxUmur){
		if (treeName === "MangoTree"){
            this._trees.push(new MangoTree(treeName, age, height, matureAge, healthStat, maxUmur))
        } else if (treeName === "AppleTree"){
            this._trees.push(new AppleTree(treeName, age, height, matureAge, healthStat, maxUmur))
        } else {
            this._trees.push(new PearTree(treeName, age, height, matureAge, healthStat, maxUmur))
        }
	}
	showAge(){
		let pohon = this._trees
		for(var i=0;i<this._trees.length;i++){
			console.log(`Pohon ${pohon[i]._treeName} dengan umur ${pohon[i]._umur}`)
		}

	}
	showTrees(){
		let pohon = this._trees
		for(var i=0;i<pohon.length;i++){
			console.log(`Pohon ${pohon[i]._treeName}`)
		}
	}
	mature_trees(){
		let pohon = this._trees
		for(var i=0;i<pohon.length;i++){
			if (pohon[i]._umur>=pohon[i]._mature) {
				console.log(pohon[i]._treeName,'telah mature')
				this._mature.push(pohon[i])
			}
		}
	}
	dead_trees(){
		let pohon = this._trees
		for(var i=0;i<pohon.length;i++){
			if (pohon[i].umur===pohon[i]._maxUmur) {
				console.log(pohon[i]._treeName,'mati')
				this._dead.push(pohon[i])
			}
		}
	}
	nextYear(){
		let pohon = this._trees
		for(var i=0;i<pohon.length;i++){
			if (pohon[i]._umur===pohon[i]._maxUmur) {
				pohon[i]._umur+=0
			}
			else{
				pohon[i]._umur+=1
			}
			if (pohon[i]._umur===pohon[i]._maxUmur) {
				pohon[i]._isHealthy = false
			}
			console.log(`${pohon[i]._treeName} umurnya ${pohon[i]._umur}`)
		}
		console.log('')
	}
}




var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthyStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7,true,20)
grove.inputTree("MangoTree", 5, 2.4, 12,true,20)
grove.inputTree("AppleTree", 4, 1.2, 5,true,20)
grove.inputTree("PearTree", 7, 2, 15,true,20)
//console.log(grove._trees)

// next year
 do {
     grove.nextYear()
     //console.log(groves)
   } while (grove._trees[0]._isHealthy != false || grove._trees[1]._isHealthy != false || grove._trees[2]._isHealthy != false || grove._trees[3]._isHealthy != false)

console.log(grove)

//show trees age
// grove.showAge()

// // show trees
// grove.showTrees()

// // show trees
// grove.mature_trees()

// // show trees
// grove.dead_trees()
