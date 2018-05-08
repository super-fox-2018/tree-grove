const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this.treeLists = []
        this.deadTrees = []
    }

    inputTree(name,age,height,matureAge,healthStatus){
        switch(name){
            case "MangoTree":
                this.treeLists.push(new MangoTree({
                    age:age,
                    height:height,
                    matureAge:matureAge,
                    healthStatus:healthStatus,
                }))
                break;
            case "AppleTree":
                this.treeLists.push(new AppleTree({
                    age:age,
                    height:height,
                    matureAge:matureAge,
                    healthStatus:healthStatus,
                }))
                break;
            case "PearTree":
                this.treeLists.push(new PearTree({
                    age:age,
                    height:height,
                    matureAge:matureAge,
                    healthStatus:healthStatus,
                }))
                break;
            default:
                console.log('just what are you talking about??')
        }
    }

    nextYear(){
        for(let i = 0; i < this.treeLists.length; i++){
            this.treeLists[i].growing()
            if(this.treeLists[i].healthStatus === false){
                this.deadTrees.push(this.treeLists[i])
                this.treeLists.splice(i,1)
            }
        }
    }

    showAge(){
        console.log('\n')
        for(let i = 0; i < this.treeLists.length; i++){
            console.log(`Tree Number ${i+1} is now aged ${this.treeLists[i].age} years`)
        }
    }

    showTrees(){
        console.log('\n')
        for(let i = 0; i < this.treeLists.length; i++){
            console.log(`Tree Number ${i+1} is ${this.treeLists[i].name}`)
        }
    }

    mature_trees(){
        console.log('\n')
        let maturedTrees = []
        for(let i = 0; i < this.treeLists.length; i++){
            if(this.treeLists[i].age>=this.treeLists[i].matureAge){
                console.log(`Tree Number ${i+1} is matured`)
                maturedTrees.push(i)
            }
        }
    }

    dead_trees(){
        console.log('\n')
        for(let i = 0; i < this.deadTrees.length; i++){
            console.log(`${this.deadTrees[i].name} with the height of ${this.deadTrees[i].height.toFixed()}m died`)
        }
    }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7,true)
grove.inputTree("MangoTree", 5, 2.4, 12,true)
grove.inputTree("AppleTree", 4, 1.2, 5,true)
grove.inputTree("PearTree", 7, 2, 15,true)

// next year
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()

// show trees age
grove.showAge()

// show trees
grove.showTrees()

// show trees
grove.mature_trees()

// show trees
grove.dead_trees()
