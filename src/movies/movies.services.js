// const {createMovie, getAllMovies, getMovieById} = require('./movies.controller')

const moviesControllers = require('./movies.controller')

const getAlMovies = (req, res) => {
    moviesControllers.getAllMovies()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
};

const postMovie = (req, res) => {
    const data= req.body;
    if(data.name && data.genre &&  data.duration && data.release_date){
        moviesControllers.createMovie(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err => res.status(400).json({message: err.message}))
    }else{
        res.status(400).json({message: 'Missing data'})
    }
};

const getMovieById = (req, res) => {
    const id = req.params.id;

    moviesControllers.getMovieById(id)
        .then(data => {
          if(data){
            res.status(200).json(data)
          }else {
            res.status(404).json({message: 'Invalid ID'})
          }
        })
        .catch(err => {
            res.status(404).json({message: err.message})
        })
}

//? Modification parcial
const patchMovie = (req, res) => {
    const id = req.params.id;
    const {name, genre, duration, release_date} = req.body;

    moviesControllers.editMovie(id, {name, genre, duration, release_date})
        .then(response => {
            res.status(200).json({
                message: `Movie with id: ${id}, edited succesfullly!`
            })
        })
        .catch(error =>{
            res.status(400).json({message: error.message})
        } )
}


//delete 

const deleteMovie = (req, res) => {
    const id = req.params.id;
    moviesControllers.deleteMovie(id)
        .then(response => {
            if(response){
                res.status(204).json() //dejar el json vacio
            }else{
                res.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
}
// put = full edit
const putMovie = ( req, res ) => {
    const id = req.params.id;
    const {name, genre, duration, release_date} = req.body
  
    //? Este if es para validar los datos, y generar error si no vienen todos los necesarios
    if(name && genre && duration && release_date){
      moviesControllers.editMovie(id, {name, genre, duration, release_date})
        .then((response) => {
          //? Este if valida si una pelicula existe o no (Valid or Invalid ID)
          if(response[0]){
            res.status(200).json({message: `Movie with ID: ${id}, edited succesfully!`})
          } else {
            res.status(404).json({message: 'Invalid ID'})
          }
        })
        .catch(err => {
          res.status(400).json({message: err.message})
        })
    } else {
      res.status(400).json({message: 'Missing data', fields : {
        name: 'string',
        genre: 'string',
        duration: 'integer',
        release_date: 'YYYY/MM/DD'
      }})
    }
  }
  

module.exports = {
    getAlMovies,
    getMovieById,
    postMovie,
    patchMovie,
    deleteMovie,
    putMovie
}