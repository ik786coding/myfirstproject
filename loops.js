/*for( i = 9 ; i > -1 ; i-- ){
    console.log(i);
}

for( i = 0 ; i < 10 ; i++ ){
    console.log(i);
}*/

/*for (i = 0; i < 6; i++ ){
    console.log(Math.random() * 49 + 1); 
}*/

let favouriteMovies = [
    "Con Air",
    "MIB",
    "Rocky",
    "Taken"
   ];
favouriteMovies.push("snatch");
favouriteMovies.push("inception");

   for (filmIndex = 0; filmIndex < favouriteMovies.length;
   filmIndex++){
    console.log(favouriteMovies[filmIndex]);

}

    if (favouriteMovies[3] == "Ghostbusters"){
        console.log("ya its ghostbusters")
    }
    else{
        console.log("booo, we want ghostbusters")
    }
   
/*let favouriteMovies = [
    "Con Air",
    "MIB",
    "Rocky",
    "Taken"
   ];
favouriteMovies.push("snatch");
favouriteMovies.push("inception");

let currentMovie = "ghostbusters";
while(currentMovie != "ghostbusters"){
    console.log("ya its Ghostbusters");
 currentMovie = favouriteMovies[Math.floor(Math.random()*4)];
}
//console.log(currentMovie);*/ 

   
