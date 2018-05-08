const myClass = require('./tree.js');
const Fruit = require('./tree.js');
// const AppleTree = require('./apple_tree.js');
// const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this._trees = [];
    }
    inputTree(objName, age, height, matureAge, healthyStat) {
        let objTree = {};
        if (objName === 'MangoTree') {
            objTree = new myClass.MangoTree()
            objTree.age = age;
            objTree.height = height;
            objTree.matureAge = matureAge;
            objTree.healthyStatus = healthyStat;
        }
        if (objName === 'AppleTree') {
            objTree = new myClass.AppleTree();
            objTree.age = age;
            objTree.height = height;
            objTree.matureAge = matureAge;
            objTree.healthyStatus = healthyStat;
        }
        if (objName === 'PearTree') {
            objTree = new myClass.PearTree();
            objTree.age = age;
            objTree.height = height;
            objTree.matureAge = matureAge;
            objTree.healthyStatus = healthyStat
        }
        this._trees.push(objTree);
    }
    // get tree(){
    //     return this._tree;
    // }
    showAges() {
        console.log('-------Ages of Tree----------')
        if (this._trees.length !== 0) {
            for (let i = 0; i < this._trees.length; i++) {
                console.log(`Pohon-${i+1} ${this._trees[i].constructor.name} ini berumur ${this._trees[i].age}`)
            }
        } else {
            console.log('------ Masukan Object Tree Terlebih dahulu -------');
        }
    }

    nextYear() {
        if (this._trees.length !== 0) {
            for (let i = 0; i < this._trees.length; i++) {
                this._trees[i].grow()
            }
        } else {
            console.log('------ Masukan Object Tree Terlebih dahulu -------');
        }
    }
    showTrees() {

    }
    matureTrees() {
        console.log('-------Mature age of Tree----------')
        if (this._trees.length !== 0) {
            for (let i = 0; i < this._trees.length; i++) {
                if (this._trees[i].age >= this._trees[i].matureAge) {
                    console.log(`Pohon-${i+1} ${this._trees[i].constructor.name} ini sudah mature age & berbuah`);
                }
            }
        } else {
            console.log('------ Masukan Object Tree Terlebih dahulu -------');
        }
    }
    deadTrees() {
        console.log('-------Dead of Tree----------')
        if (this._trees.length !== 0) {
            for (let i = 0; i < this._trees.length; i++) {
                if (!this._trees[i].healthyStatus) {
                    console.log(`Pohon-${i+1} ${this._trees[i].constructor.name} ini wis modyarr, umurnya ${this._trees[i].deadAge}`)
                }
                else {
                    console.log (`Pohon-${i+1} ${this._trees[i].constructor.name} ini masih hidup, umurnya ${this._trees[i].age}`);
                }
            }
        } else {
            console.log('------ Masukan Object Tree Terlebih dahulu -------');
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
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

let counter = 1;
while (counter <= 30) {
    console.log(`------------- Looping ke ${counter} --------------`)
    // next year
    grove.nextYear()

    // show trees age
    grove.showAges()

    // show trees
    grove.showTrees()

    // show trees
    grove.matureTrees()

    // show trees
    grove.deadTrees()

    counter++;
}

