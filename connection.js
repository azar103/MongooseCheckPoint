const mongoose = require('mongoose')
require('dotenv').config()
class Connection {
    constructor(){
        this._connect()
    }

    _connect() {
        mongoose.connect(process.env.MONG_URI, { useNewUrlParser: true, useUnifiedTopology: true })
                .then(() => console.log('Connexion à MongoDB réussie !'))
                .catch(() => console.log('Connexion à MongoDB échouée !'));

    }
}


module.exports = Connection