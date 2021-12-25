class Uber{
    constructor(name,car,Distance){
        this.Customer_Name=name;
        this.Car=car;
        this.Distance=Distance;
    }
    get cost(){
        return this.fare();
    }
fare(){
    if(this.Distance<3)
    return "The fare is 100 rupees";
    else
    return "The fare is "+(this.Distance*23)+" rupees";
}
}
let price1=new Uber("Aaron","Skoda",56);
console.log(price1,price1.cost);
let price2=new Uber("XXXX","FORD",2);
console.log(price2,price2.cost);