//const FruitTree = require('./fruit.js');
//const AppleTree = require('./apple_tree.js');
//const PearTree = require('./pear_tree.js');

class TreeGrove {

    constructor () {
        this._treeArr = []
        this._name = []
    }

    get name () {
        return this._name
    }
    set name (newName) {
        this._name = newName
    }

    get treeArr () {
        return this._treeArr
    }
    set treeArr (newTreeArr) {
        this._treeArr = newTreeArr
    }

    inputTree (tName, tAge, tHeight, tMature, tHealth) {
        this.treeArr.push([tName, tAge, tHeight, tMature, tHealth])
    }

    showAges () {
        console.log('Tree Ages : ')
        for(let x=0; x<this.treeArr.length; x++) {
            console.log(this.treeArr[x][0]+'age : '+ this.treeArr[x][1])
        }
        
    }

    showTrees () {
        console.log('Trees growing : ')
        for(let y=0; y<this.treeArr.length; y++) {
            if(this.name.indexOf(this.treeArr[y][0]) < 0) {
                this.name.push(this.treeArr[y][0])
            }
        }
        console.log(this.name)
    }

    matureTrees () {
        console.log('Mature Trees :')
        for(let z=0; z<this.treeArr.length; z++) {
            if(this.treeArr[z][1]>=5) {
                console.log(this.treeArr[z][0])
            }
        }
    }

    deadTrees () {
        console.log('Dead Trees :')
        for(let z=0; z<this.treeArr.length; z++) {
            if(this.treeArr[z][1]>=25) {
                console.log(this.treeArr[z][0])
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
console.log(grove._treeArr)
// next year
//grove.nextYear()

// show trees age
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.matureTrees()

// show trees
grove.deadTrees()
