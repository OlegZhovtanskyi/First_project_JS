const numberOfMovies = +prompt("How many movies you already watched?", "");

let personalMovieDB = {
	count: numberOfMovies,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

const a = prompt("The name of the movie you are watching last", ""),
	b = +prompt("What rating would you give this movie?", ""),
	c = prompt("The name of the movie you are watching last", ""),
	d = +prompt("What rating would you give this movie?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
