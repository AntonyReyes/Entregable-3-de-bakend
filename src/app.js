const express = require('express')

const db = require('./utils/database')

const initModels = require('./models/initModels')

const config = require('./config')

// const port = 8000

const app = express()

const moviesRuter = require('./movies/movies.router')


//autenticar contraseñas. usuario
//accion informativa si las credenciales son correctas
db.authenticate()
    .then(() => console.log('DB Authentication Succesfully'))
    .catch((err) => console.log(err))

//sincroniza los modelos creando las tablas
db.sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err))

initModels()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'ok!'})
})




app.use('/movies', moviesRuter)


app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
})