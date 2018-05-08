const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');
const Fruit = require('./fruit.js');

class TreeGrove {
    constructor(){
        this._treeGrove = [];
        this._year = 0;

    }
    
    inputTree(NameOfFruit, fAge, height, mAge, hlStatus){
        var classOfTree = {MangoTree: MangoTree, AppleTree: AppleTree, PearTree:PearTree }
        var NameOfClass = classOfTree[NameOfFruit];
        var tree = new NameOfClass
        tree.name = NameOfFruit;
        tree.age = fAge;
        tree.height = height;
        tree.matureAge = mAge;
        tree.healtyStatus = hlStatus;
        this._treeGrove.push(tree);
        
    }

    nextYear(){
        var tree = this._treeGrove
            this._year++;
        for(let a = 0; a < tree.length ; a++){
            tree[a].grow() ;
            tree[a].produceMangoes();
            tree[a].harvest();
            //console.log(`[Year ${tree[a].age} Report] Height = ${tree[a].height} | Fruits harvested = ${tree[a].harvested}`)
        }
        console.log(`Tahun ke ${this._year}`)
    }

   showAge(){
    var tree = this._treeGrove
    for(let a = 0; a < tree.length; a++){
        console.log(` Pohon ${tree[a]._name} ke ${a+1} berumur ${tree[a]._age} tahun` )
    }
   } 

   mature_trees(){
    var tree = this._treeGrove
    for(let a = 0; a < tree.length; a++){
        console.log(` Pohon ${tree[a]._name} ke ${a+1} mature age : ${tree[a]._matureAge} tahun` )
    }  
   }

   dead_trees(){
    var tree = this._treeGrove
        for(let a = 0; a < tree.length; a++){
            if(!tree[a].healtyStatus){
                console.log(`pohon ${tree[a]._name} ke ${a} sudah mati`)
            }
        }
    }

    showTrees(){
        var tree = this._treeGrove
        for(let a = 0; a < tree.length; a++){
            if(!tree[a].healtyStatus){
                console.log(`pohon  ke ${a} adalah ${tree[a]._name}`)
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
//console.log(grove)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)

for(let a = 0; a < 11; a++){
    // // next year
    grove.nextYear()
    // show trees age
    grove.showAge()
    // show trees
    grove.showTrees()
    // show trees
    grove.mature_trees()
    // show trees
    grove.dead_trees()
    console.log('\n')
}
