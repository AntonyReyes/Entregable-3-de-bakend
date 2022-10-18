const {DataTypes} = require('sequelize')

const db = require('../utils/database')

// con dos puntos salgo para exportar algo de afuera

const Movies = db.define('movies', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false 
    },
    genre:{
        type: DataTypes.STRING, //varchar
        allowNull:false // not null
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    release_date:{
        type: DataTypes.DATEONLY,  //js = camelcase pero asqui DataTypes
        allowNull:false,
        field: 'release_date'
    }
})


module.exports = Movies

//movies = es el nombre de la 
//Movies va a estar guardado en js
