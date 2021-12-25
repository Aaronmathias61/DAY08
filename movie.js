class Movie{
    constructor(movie,studio,rating){
        this.Name=movie;
        this.Studio=studio;
        this.Rating=rating;
    }
    get rate(){
        return this.getPG();
    }
    getPG(){
        if(this.Rating=="PG")
        return this.Name;
    }
}
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
var movie1=new Movie("Thala","Aaron","PG13");
console.log(movie1.Name);
console.log(movie1.Studio);
console.log(movie1.Rating);

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
var movie2=new Movie("Aaron","Aaron","PG");
console.log(movie2);
console.log(movie2.getPG());

//d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
var movie3=new Movie("Casino Rolaye","Eon Productions","PG18");
console.log(movie3);
