'use strict'

class FruitTree {
    constructor(name, age, height, mature, health) {
        this._name = name;
        this._age = age;
        this._height = height;
        this._mature = mature;
        this._healthyStatus = health;
    }

    grow() {
        let random = Math.random().toFixed(1);
        if(this._healthyStatus == true) {
            this._age++;
            if(this._age < this._stopGrow) {
                this._height += Number(random);
                this._height = Number(this._height.toFixed(1));
            }
            if(this._age == this._dead) {
                this._healthyStatus = false;
            }
        }
    }
}

module.exports = FruitTree;