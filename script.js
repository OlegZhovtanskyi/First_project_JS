const numberOfMovies = +prompt("How many movies you already watched?", "");

let personalMovieDB = {
	count: numberOfMovies,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

for (let i = 0; i < 2; i++) {
	const a = prompt("The name of the movie you are watching last", ""),
		b = +prompt("What rating would you give this movie?", "");

	if (a != null && b != null && a != "" && b != "" && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log("done");
	} else {
		console.log("error");
		i--;
	}
}

if (personalMovieDB.count <= 30) {
	console.log(
		"You've seen very few movies in your life"
	);
} else if (personalMovieDB.count <= 70) {
	console.log("Congratulations, you are an average statistical person");
} else if (personalMovieDB.count > 70) {
	console.log("Yo dude you are legend");
} else {
	console.log("error");
}

console.log(personalMovieDB);
