class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get calc(){
        console.log("The properties of the Circle are below");
        console.log(this.circleradius());
        console.log(this.circlecircumference());
        console.log(this.circlearea());
    }
    circleradius(){
        return `The radius is ${this.radius}`;
    }
    circlecircumference(){
        return `The circumference is ${(this.radius*2*Math.PI).toFixed(2)}`;
    }
    circlearea(){
        return `The area is ${(Math.pow(this.radius,3)*4*Math.PI/3).toFixed(2)}`;
    }
}
var rad1=new Circle(1.0,"red");
console.log(rad1);
console.log(rad1.calc);
var rad2=new Circle(5,"blue");
console.log(rad2);
console.log(rad2.calc);
