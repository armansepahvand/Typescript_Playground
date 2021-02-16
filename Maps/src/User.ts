//import faker library to create random values for User Class
import faker from "faker";

//Define  the User Class
export class User{
    name:string;
    location:{
        lat:number;
        lng:number;
    };

    constructor(){
        this.name=faker.name.firstName();
        this.location={
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent():string{
        return `User Name is ${this.name}`
    }
}