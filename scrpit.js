class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var m0 = new Movie("Casino Royale","Eon Productions","PG13");
//console.log(m0);
var m1 = new Movie("vikram","red gaint");
var m2 = new Movie("SK","arts");

var newArray = [m0,m1,m2];
//console.log(newArray);
getPG=(newArray)=>{
    return newArray.filter((ele)=>ele.rating=="PG");
}
console.log(getPG(newArray));

// Class Circle
class Circle{

    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getArea(c1){
        return 3.14*this.radius*this.radius;
    }
}
getRadius=(c1)=>{
    return Number.isInteger(this.radius);
}

getColor=(c1)=>{
return this.color;
}
getCircumference=(c1)=>{
return 2*3.14*this.radius;
}
var c1 = new Circle(1.0,"red");
console.log(c1);
//console.log(getArea(c1));

// person deatials

class Person {
    constructor (Name, DOB, Address, Nationality){
      this.Name= Name;
      this.DOB= DOB;
      this.Address= Address;
      this.Nationality=Nationality;
}
getDeatials(){
return(`the name of person ${this.Name} DOB is ${this.DOB} his Address: ${this.Address} and Nationatily ${this.Nationality}`)
}
}
var person1= new Person("AJ","4/5/2000","karnataka","Indian");
console.log(person1);
var person2= new Person("J","1/1/2002","NYC","USA");
console.log(person2.getDeatials())

//write a class to calculate the uber price.

class Uberprice{
    constructor(distance,waitingPeriod,rate,vehicletype){
        this.distance= distance;
        this.waitingPeriod=waitingPeriod;
        this.rate=rate;
        this.vehicletype=vehicletype;
    }
setDistance(dist){
        this.distance=dist;
    }
getRideDetails(){
        return(`The distance of the ride is ${this.distance} with waiting period of 
        ${this.waitingPeriod} the vehicle type is inova with AC ${this.vehicletype} and rate of ${this.rate}`)
    }
getRate(){
        let totalRate = (this.distance *this.vehicletype* this.rate) + (this.waitingPeriod * 5)
        return totalRate;
    }
}
let customer1= new Uberprice(100,0,15,5)
console.log(customer1.getRate());
customer1.setDistance(100);
console.log(customer1.getRate());
console.log(customer1.getRideDetails());