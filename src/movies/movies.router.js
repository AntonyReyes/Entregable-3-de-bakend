const router = require('express').Router()

const moviesServices = require('./movies.services')

//? Este es el prefijo :/movies

// const URL_BASE = 'https://google.com'

router.get('/', moviesServices.getAlMovies)
router.post('/', moviesServices.postMovie)

router.get('/:id', moviesServices.getMovieById)

router.patch('/:id', moviesServices.patchMovie)

router.delete('/:id', moviesServices.deleteMovie)

router.put('/:id', moviesServices.putMovie)
// router.post('/movies')

// router.get('/movies/:id')
// router.delete('/movies/:id')
// router.patch('/movies/:id')
// router.put('/movies/:id')

module.exports = router
