const oldCivic={
    name:'civic',
    year:2000,
    broken:true,
    summary(): string{
        return `Namw is ${this.name}`
    }
}

const drink={
    color:'brown',
    carbonated:true,
    sugar:40,
    summary():string{
        return `My drink has ${this.sugar} grams of sugar`;
    }

}

interface Reportable {
    
    summary():string;
}

const printSummary=(item:Reportable): void =>{
    console.log(item.summary)
};

printSummary(drink);