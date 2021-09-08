const numberOfFilms = prompt('Сколько фильмов Вы примерно посмотрели за свою жизнь?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: [],
    actors: [],
    ganres: [],
    privat: false
};

const a = prompt('Какой фильм вы смотрели последним?', '');
const b = prompt('Как вы его оцените?', '');
const c = prompt('Какой фильм вы смотрели последним?', '');
const d = prompt('Как вы его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);