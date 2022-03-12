//1. MANIPULATE PRODUCT RECORD
function manipulateProduct(obj, operation, prop, newValue) {
    for (let value in obj) {
        if (operation === 'edit' && value === prop) {
            obj[prop] = newValue;
            return obj;
        }
        else if (operation === 'delete' && value === prop) {
            delete obj[prop];
            return obj;
        } 
        else if ( value !== prop && operation === 'delete'){
            return obj;
        }
        else if (operation === 'add') {
        obj[prop] = newValue;
        return obj;
        } 
    }
}
// //test cases
// let test = manipulateProduct({ id: 1, name: 'm&m', price: 1.99 }, 'edit', 'price', 2.99)
// let test = manipulateProduct({ id: 1, name: 'm&m', price: 1.99 }, 'delete', 'id')
// let test = manipulateProduct({ id: 1, name: 'm&m', price: 1.99 }, 'delete', 'category')
// let test = manipulateProduct({id: 1, name: 'm&m', price:1.99}, 'add', 'description', 'Yummy!')
// console.log(test);

// 2. String Compression
 function compress(s)
{
    let num = s.length;
     let incre = 0;
     let str = [];
    while ( incre < num) {
        let count= 1;
        while (s[incre] == s[incre+1] && incre < num-1 ) {
            count++;
            incre++;
        }
        
        str.push(s[incre], count);
        incre++;
       
     }
      return str.join('');
}
// test case
let str = 'aaaabbcdddd'
console.log(compress(str));


// 3. CREATE A VEHICLE
// BEFORE ES6
function Vehicle(engine, speed) {
    this.engine = engine;
    this.speed = speed;
}
Vehicle.prototype.honk = function () {
        console.log(this.engine, this.speed);
}
const vehicle1 = new Vehicle('toyota', 50);
function Car(engine, speed, wheels, brake) {
    Vehicle.call(this, engine, speed);
    this.wheels = wheels;
    this.brake = brake;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.isTesla = function () {
    if (this.brake === true) {
        return true;
    } else {
        return false;
    }
}

// AFTER ES6
class Vehicle {
    constructor(engine, speed) {
        this.engine = engine;
        this.speed = speed;
    }
    honk() {
        console.log(this.engine, this.speed);
    }
}

class Car extends Vehicle {
    constructor(engine, speed, wheels, brake) {
        super(engine, speed);
         this.wheels = wheels;
         this.brake = brake;
    }
    isTesla(car) {
        if (this.brake === true) {
            return true;
        } else {
            return false;
        }
    }
}

// 4. ADD OR SUB
// ClOSURE VERSION
   function addOrSub(num) {
       let total = num;
       console.log(num);
       return function op(even) {
           if (even % 2 == 0) {
            total = total + even;
           
           } else {
               total = total - even;
           }
           return total;
       }
     
   }
// Test-cases for Closer
let result = addOrSub(2);
console.log(result(2));
console.log(result(3));

// CLASS VERSION
class AddOrSub {
    constructor(num) {
        this.num = num;
    }
   
    op(num1) {
        
        if (num1 % 2 == 0) {
           this.num = this.num + num1;
        } else {
            this.num = this.num - num1;
        }
        return this.num;
    }
}

// Test cases for Class
let result1 = new AddOrSub(2);
console.log(result.op(2));
console.log(result.op(2));
console.log(result.op(3));