const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor (){
        this._trees =[]
        this._matureAge = []
        this._deadTrees = []
    }

    // fungsi untuk input nama" pohon nya yg diambil dr var groove dibawah
    inputTree(tree_name, age, height, matureAge, healthyStatus) {
        if (tree_name === 'MangoTree') {
            this._trees.push(new MangoTree(age, height, matureAge, healthyStatus))
        } 
        else if (tree_name === 'AppleTree') {
            this._trees.push(new AppleTree(age, height, matureAge, healthyStatus))
        } 
        else if (tree_name === 'PearTree') {
            this._trees.push(new PearTree(age, height, matureAge, healthyStatus))
        }
    }

    // diambil dari function grow() yg ada ditiap masing" file tree
    nextYear() {
        for (let i = 0; i < this._trees.length; i++) {
            this._trees[i].grow();
        }
        this.mature_trees()
    }

    showAge() {
        for (let i = 0; i < this._trees.length; i++) {
            let age = this._trees[i]._age;
            console.log(`age ${age}`);
        }
    }

    showTrees() {
        for (let i = 0; i < this._trees.length; i++) {
            console.log(this._trees[i]);
        }
    }

    mature_trees() {
        let matureTrees=[]
        for (let i = 0; i < this._trees.length; i++) {
            if (this._trees[i]._age >= this._trees[i]._mature) {
                matureTrees.push(this._trees[i])
            }
        }
        this._matureAge = matureTrees
        console.log(this._matureAge);
    }

    dead_trees() {
        for (let i = 0; i < this._trees.length; i++) {
            if (this._trees[i]._age > this._trees[i]._maxAge) {
                this._matureAge.push(this._trees[i])
            }
        }
        if (deadTree.length === 0) {
            console.log("all healthy");
        } 
        else {
            console.log(this._matureAge);
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

console.log('=============BEFORE============\n', grove);
grove.nextYear()
console.log('=============AFTER=============\n', grove);