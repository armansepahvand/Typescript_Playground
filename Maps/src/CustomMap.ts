import {User} from "./User";
import {Company} from "./Company";

//Interface to instruct every other class 
// on How they can be an argument to "addMarker"
interface Mappable{
    location:{
        lat:number;
        lng:number;
    }
}

export class CustomMap{

    private googleMap:google.maps.Map;

    constructor(divId:string){
        this.googleMap=new google.maps.Map(document.getElementById(divId),{
            zoom:3,
            center:{
                lat:0,
                lng:0
            }
           
        });
        
    }   

    addMarker(mappable:Mappable):void {
        new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:mappable.location.lat,
                lng:mappable.location.lng,
            }
        })
    }
    

}

