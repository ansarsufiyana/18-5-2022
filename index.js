// // // regular type of defining more than one object with same function method


// const elf ={
//     name:'mubeen',
//     weapon:'mobile',
//     attack(){
//         return 'attack with' + elf.weapon
//     }
// }

// elf.attack()

// const elf2 ={
//     name:'jahangeer',
//     weapon:'bow',
//     attack(){
//         return 'attack with' + elf2.weapon
//     }
// }

// elf2.attack()

// // // factory function to create the same objects

// function createElf(name, weapon) {
//     return{
//         name: name,
//         weapon: weapon,
//         attack(){
//             return 'attack with ' + weapon
//         }
//     }
// }

// const peter = createElf('peter', 'stone')
// peter.attack()
// const sam = createElf('sam', 'fire')
// sam.attack()


// // object.create() for prototyple inhintrance

// const elfFuntions = {
//     attack(){
//         return 'attack with ' + this.weapon
//     }
// }
// function createElf(name, weapon) {
//     let newElf = Object.create(elfFuntions) 
//     newElf.name= name;
//     newElf.weapon= weapon;
//     return newElf;
// }

// const sameer = createElf('sameer', 'stone')
// console.log(sameer.attack());
// const sajid = createElf('sajid', 'fire')
// console.log(sajid.attack());

// // Constructor Function to create objects

// function Elf(name, weapon) {
//     this.name =name;
//     this.weapon = weapon;
    
// }

// Elf.prototype.attack = function(){
//     return 'attack with ' + this.weapon
// }

// const peter = new Elf('peter', 'stones')
// console.log(peter);
// const sam = new Elf('sam', 'fire')
// console.log(sam.attack());

// // class

class Elf{
    constructor(name, weapon) {
        this.name =name;
        this.weapon = weapon;
    }
   attack(){
    return 'attack with ' + this.weapon
   } 
}

const peter = new Elf('peter', 'stones')
console.log(peter);
const sam = new Elf('sam', 'fire')
console.log(sam.attack());
