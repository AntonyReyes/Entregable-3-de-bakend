const Movies = require('../models/movies.models')

const uuid = require('uuid')


const getAllMovies = () => {
    const data = Movies.findAll() //traer todas las peliculas
    // select * from movies;
    return data
}

//await // esperar hasta que te de una respuesta


// getAllMovies()
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))

const createMovie = async (data) => {
    const newMovie = await Movies.create({
        id: uuid.v4(),
        name: data.name,
        genre: data.genre,
        duration: data.duration,
        release_date: data.release_date
    })
    //? insert into movies (id, name, genre, duration, releaseDate) values (uuid.v4(), data.name, data.genre, data.duration, data.releaseDate)
    return newMovie
}

// createMovie({
//     id: '1',
//     name: 'Pacific Rim',
//     genre: 'Action, SciFi',
//     duration: 120,
//     release_date: '2012/10/30'
// })
// .then(response => console.log(response))
// .catch(err => console.log(err))

const getMovieById = async (id) => {
    const data = await Movies.findOne({
        where: {
            id: id,
        }
    });
    //? select * from movies where id = id
    return data;  //? Si el where no encuentra nada, retorna null
}

// getMovieById('1')
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

// {
//     title: "Nuevo Titutlo";
// }

const editMovie = async(id,  data) => {
    const response = await Movies.update(data, {
        
        where: {
            id: id,
            // name: name
        }
    } )
    return response //? Si el where no encuentra nada, retorna null
};

const deleteMovie = async (id) => {
    const data = await Movies.destroy({
        where:{
            id
        }
    })
    return data;
}

// editMovie("ad96f6f3-9822-4483-b7af-d7aa30bc8500",{
//     name: "Sharek 1",
//     duration: 130
// })
// .then(response => console.log(response))
// .catch(err => console.log(err) )

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    editMovie,
    deleteMovie
}