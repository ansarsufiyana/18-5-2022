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

// class Elf{
//     constructor(name, weapon) {
//         this.name =name;
//         this.weapon = weapon;
//     }
//    attack(){
//     return 'attack with ' + this.weapon
//    } 
// }

// const peter = new Elf('peter', 'stones')
// console.log(peter);
// const sam = new Elf('sam', 'fire')
// console.log(sam.attack());

// // this key wrod

// // new binding this

// function Person(name, age){
//     this.name =name;
//     this.age = age;
// }

// const person1 = new Person('xaiver', 55)
// console.log(person1);

// // //implicit binding
// const person = {
//     name: 'karen',
//     age: 40,
//     hi(){
//         console.log('hi' + this.name);
//     }
// }


// // explicit binding

// const person3 = {
//     name: 'karen',
//     age: 40,
//     hi: function(){
//         console.log('hi' + this.setTimeout);
//     }.bind(window)
//}
// console.log(person3.hi());


// // arrow function
// const person4 = {
//     name: 'karen',
//     age: 40,
//     hi: function(){
//         var inner = () => {

//         console.log('hi' + this.name);
    
//         }
//         return inner()
//     }
// }
// console.log(person4.hi());


// // // creating a simole game

class Character{
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack(){
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character{
    constructor(name, weapon, type){
        super(name, weapon);
        this.type = type;
    }
}

class Ogre extends Character{
    constructor(name, weapon, color){
        super(name, weapon);
        this.color = color;
    }
    makeFort (){
        return 'strongest fort in the world made';
    }
}

const dolby = new Elf('dolby', 'stone', 'house');
console.log(dolby.attack());  

const shrek = new Ogre('shrek', 'club', 'green')
console.log(shrek.makeFort());

