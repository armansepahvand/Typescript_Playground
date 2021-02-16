//import faker library to create random values for Company Class
import faker from "faker";

//Define  the Company Class
export class Company{
    companyName:string;
    catchPhrase: string;
    location:{
        lat:number;
        lng:number;
    };

    constructor(){
        this.companyName=faker.company.companyName(),
        this.catchPhrase=faker.company.catchPhrase(),
        this.location={
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    markerContent():string{
        return `Company Name is ${this.companyName}`
    }
}