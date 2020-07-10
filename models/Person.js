const mongoose = require('mongoose')


const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]
})
personSchema.static.findByNameAndUpdate = function(personName) {
   this.findOneAndUpdate({
    name: personName
   },
{
    age: 20
},
{
    new: true,
    runValidators: true
},
callback
)

}

module.exports = mongoose.model('Person', personSchema)