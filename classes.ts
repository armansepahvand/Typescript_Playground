class Vehicle{
    
    constructor(public color:string){}

    drive():void{
        console.log('broom')
    }
};

class Car extends Vehicle {
    constructor(public wheels:number, color:string){
        super(color)
    }

    honk(): void{
        console.log('beeeep');
    }
};

const vehicle = new Vehicle("red");
const car = new Car(4,"blue");
car.honk();
console.log(car.color);
console.log(car.wheels);
vehicle.drive();
