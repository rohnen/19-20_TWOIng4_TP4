var express = require('express');
var router = express.Router();
const API_KEY = '8e77ea4';
const API_URL = 'http://www.omdbapi.com/';
const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8e77ea4';
var axios = require('axios');
var find = require('lodash.find');
var _ = require('lodash');

let movies = [
	{
		id: "tt4532826",
		movie: "Robin Hood",
		yearOfRelease: 2018,
		duration: 116, // en minutes 
  		actors: ['Taron Egerton', 'Jamie Foxx', 'Ben Mendelsohn', 'Eve Hewson'],
		poster: "https://m.media-amazon.com/images/M/MV5BOGQzZDM0NGUtZGE1NS00ZjQwLTk0N2EtMWI0NTgxYTkwYWQ4XkEyXkFqcGdeQXVyNDMzMzI5MjM@._V1_SX300.jpg", // lien vers une image d'affiche,
		boxOffice: 0, // en USD$,
		rottenTomatoesScore: 15

	},

	{

		id: "tt3896198",
		movie: "Guardians of the Galaxy Vol. 2",
        yearOfRelease: 2017,
		duration: 136, // en minutes,
		actors: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Vin Diesel'],
		poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg", // lien vers une image d'affiche,
		boxOffice: 389804217, // en USD$,
		rottenTomatoesScore: 84

	},

	{

		id: "tt0848228",
		movie: "The Avengers",
		yearOfRelease: 2012,
		duration: 143, // en minutes,
		actors: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'],
		poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", // lien vers une image d'affiche,
		boxOffice: 623279547, // en USD$,
		rottenTomatoesScore: 92

	},
	
	{

		id: "tt0120338",
		movie: "Titanic",
		yearOfRelease: 1997,
		duration: 100, // en minutes,
		actors: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane', 'Kathy Bates'],
		poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg", // lien vers une image d'affiche,
		boxOffice: 0, // en USD$,
		rottenTomatoesScore: 89

	}];


/* GET Tous les films. */
router.get('/', (req, res) => {
	res.status(200).json({movies});
});

/*UPDATE via id movies*/
router.post('/:id', (req, res) => {

	const {id}= req.params;

	const {movies}=req.body;

	const moviesToUpdate = _.find(movies, ["id", id]);

	moviesToUpdate.movies = movies;

	res.json({
		message: 'Movie updated',
	});

});

/*PUT un movie */
router.put('/', (req, res) =>{

	const {movies}= req.body;

	const id = _.uniqueId();

	movies.push({movies, id});

	res.json({
		message: 'Movie added',
		movies: {movies, id}
	});
});

/*DELETE un movie via son id*/
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.remove(movies, ['id', id]);
    res.status(200).json({
        message: `Movie has been removed`,
    });
});


module.exports = router;



