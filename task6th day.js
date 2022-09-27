//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments,
//and sets the respective class properties to these values.

class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = "PG";
    }
}
var movie1= new Movie("PS","Lykaa","Ps13");
//bThe constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

var movie2= new Movie("VTK","Promo",);
console.log(movie1);
console.log(movie2)




//D)  Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
//the studio “Eon Productions”, and the rating “PG­13”

const CasinoRoyale = new Movie( "Casino Royal", "Eon Productions", "PG13");
console.log(CasinoRoyale)

//-------------------------------------------------------------------------------------------

//2. Convert the UML diagram to Typescript class. - use number for double

class Circle {
    constructor(radius,color,area,circumference){
        this.radius= radius;
        this.color= color;
        this.area= area;
        this.circumference=circumference
    }
}

var c1=new Circle(2.0,"White",154,3.14159 );
console.log(c1);

//----------------------------------------------------------------------------------------
//3. Write a “person” class to hold all the details.
class Person {
    constructor(firstname,lastname,age,contact,gender,email,profession) {
        this.firstname= firstname;
        this.lastname=lastname;
        this.age= age;
        this.contact= contact;
        this.gender= gender;
        this.email=email;
        this.profession=profession
    }

}

var p1= new Person("shanmuga","priya",22,7000070000,"Female","priyamuthukumar1203@gmail.com","Student");
console.log(p1);

//------------------------------------------------------------------------------------------------------------

//4. write a class to calculate the uber price.


class Uber {
    constructor(Perkm,Km){
        this.Perkm=10;
        this.Km=Km;

    }
    mull(){
        return this.Perkm* this.Km
      }
      }
      var mul1= new Uber(this.Perkm,250);
      console.log(mul1.mull());

