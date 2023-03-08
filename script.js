let numberOfMovies;
start();
const personalMovieDB = {
	count: numberOfMovies,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

function start() {
	numberOfMovies = +prompt("How many movies you already watched?", "");

	while (
		numberOfMovies == "" ||
		numberOfMovies == null ||
		isNaN(numberOfMovies)
	) {
		numberOfMovies = +prompt("How many movies you already watched?", "");
	}
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("The name of the movie you are watching last", ""),
			b = +prompt("What rating would you give this movie?", "");

		if (a != null && b != null && a != "" && b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
		} else {
			console.log("error");
			i--;
		}
	}
}

function detectPersonalLevel() {
	if (personalMovieDB.count <= 30) {
		console.log("You've seen very few movies in your life");
	} else if (personalMovieDB.count <= 70) {
		console.log("Congratulations, you are an average statistical person");
	} else if (personalMovieDB.count > 70) {
		console.log("Yo dude you are legend");
	} else {
		console.log("error");
	}
}

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	} else if (hidden) {
		console.log("You don't have access to this object");
	} else {
		console.log("Error");
	}
}

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(
			`You favorite movies genre: ${i}`
		);
	}
}


rememberMyFilms();
detectPersonalLevel();
showMyDB(personalMovieDB.private);
writeYourGenres();
