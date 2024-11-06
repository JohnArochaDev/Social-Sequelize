const Sequelize = require('sequelize')

    const db = new Sequelize({
        dialect: 'sqlite'
    })


module.exports = {
    db,
    
}