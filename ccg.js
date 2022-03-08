class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target){
        console.log("attack!!")
        if(target instanceof Unit){
            target.res -= this.power;
        }
        else{
            console.log("Target must be a unit.")
        }
    }

}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name, cost);
        this.text = text; 
        this.stat = stat;
        this.magnitude = magnitude;
    }

    useeffect (target) {
        console.log(`${this.name} : ${this.text}`)
        if (target instanceof Unit) {
            if (this.stat == "res") {
                target.res += this.magnitude;
            } else if (this.stat == "power") {
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    // useeffect(target){
    //     console.log(`${this.name} : ${this.text}`)
    //     if(target instanceof Unit && this.stat in target){
    //         target[this.stat]+=this.magnitude;
    //     }
    // }
}

const red_belt_ninja = new Unit("Red Belt Ninja",3,3,4);
const black_belt_ninja = new Unit("Black Belt Ninja",4,5,4);
const hard_algo = new Effect("Hard Algorithm",2,"increase target's resilience by 3","res",3);
const unhandled_promise = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","res",-2);
const pair_programming = new Effect("Pair Programming",3,"increase target's power by 2","power",2);

console.log(red_belt_ninja);
hard_algo.useeffect(red_belt_ninja);
console.log(red_belt_ninja);

console.log(red_belt_ninja);
unhandled_promise.useeffect(red_belt_ninja);
console.log(red_belt_ninja);

console.log(red_belt_ninja);
pair_programming.useeffect(red_belt_ninja);
console.log(red_belt_ninja);

console.log(black_belt_ninja);
red_belt_ninja.attack(black_belt_ninja);
console.log(black_belt_ninja);
