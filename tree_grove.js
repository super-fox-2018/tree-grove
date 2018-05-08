'use strict'
const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this.treeList = [];
        this.countTree = [0, 0, 0];
    }

    inputTree(name, age, height, mature, health) {
        let addTree = null;
        // let count = this._countTree;
        let classTree = {
            MangoTree,
            AppleTree,
            PearTree,
        };
        if(name == 'MangoTree') {
            this.countTree[0]++;
            addTree = new classTree[name](`${name} number ${this.countTree[0]}`, age, height, mature, health);
        } else if(name == 'AppleTree') {
            this.countTree[1]++;
            addTree = new classTree[name](`${name} number ${this.countTree[1]}`, age, height, mature, health);
        } else if(name == 'PearTree') {
            this.countTree[2]++;
            addTree = new classTree[name](`${name} number ${this.countTree[2]}`, age, height, mature, health);
        }
        this.treeList.push(addTree);
    }

    nextYear() {
        for(let i = 0; i < this.treeList.length; i++) {
            this.treeList[i].grow();
        }
    }

    show_ages() {
        let tree = null;
        let result = [];
        for(let i = 0; i < this.treeList.length; i++) {
            tree = this.treeList[i];
            console.log(`${tree._name} is ${tree._age} years old`)
        }
    }

    show_trees() {
        let tree = null;
        let result = [];
        for(let i = 0; i < this.treeList.length; i++) {
            tree = this.treeList[i];
            result.push(tree._name);
        }
        console.log(`All trees: ${result.join(', ')}`)
    }

    mature_trees() {
        let tree = null;
        let result = [];
        for(let i = 0; i < this.treeList.length; i++) {
            tree = this.treeList[i];
            if(tree._age >= tree._mature && tree._healthyStatus == true) {
                result.push(tree._name);
            }
        }
        if(result.length == 0) {
            console.log('No mature tree');
        } else {
            console.log(`Mature tree: ${result.join(', ')}`);
        }
    }

    dead_trees() {
        let tree = null;
        let result = [];
        for(let i = 0; i < this.treeList.length; i++) {
            tree = this.treeList[i];

            if(tree._healthyStatus == false) {
                result.push(tree._name);
            }
        }

        if(result.length == 0) {
            console.log('No dead tree');
        } else {
            console.log(`Dead tree: ${result.join(', ')}`);
        }
    }
}

var grove = new TreeGrove();

grove.inputTree('MangoTree', 3, 1.8, 7, true);
grove.inputTree('MangoTree', 5, 2.4, 12, true);
grove.inputTree('AppleTree', 4, 1.2, 12, true);
grove.inputTree('PearTree', 7, 2, 15, true);

for(let i = 0; i < 14; i++) {
    grove.nextYear();
}

grove.show_ages();
grove.show_trees();
grove.mature_trees();
grove.dead_trees();

// console.log(grove)