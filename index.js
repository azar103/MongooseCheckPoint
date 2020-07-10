const mongoose = require('mongoose')

const Person = require('./models/Person')

//create an instance of person

 createPerson = (callback) => {
    const person = new Person({
        name: 'anis',
        age: 23,
        favoriteFoods: [
            'Milk', 'Meat', 'Couscous'
        ]})

        person.save((err, data) => {
          if(err) {
              return callback(err)
          }
          callback(null, data)
        })
       
}



//add new person



//add many persons

const createManyPerson = ( callback) => {
    const arrayOfPersons = [{
        name: 'anis',
            age: 23,
            favoriteFoods: [
                'Milk', 'Meat', 'Couscous'
            ]
    },
    {
        name: "Mike",
        age: 40,
        favoriteFoods: [
            'aa', "bb", "cc"
        ]
    },
    {
        name: "John",
        age: 44,
        favoriteFoods: [
            "kk", "vv", "ee"
        ]
    }
    
    ]
    Person.create(arrayOfPersons, (err, data) => {
        if(err) return done(err)
        callback(null, data)
    })
}

createManyPerson()


//find person By Name
const findPersonByName = (personName, callaback) => {
    Person.find(personName,(err, data) => {
        if(err) {
            return callaback(err)
        }
        callaback(null, data)
    })
}


//Find just one person which has a certain food in the person's favorites

const findPerson = (food, callback) => {
    Person.findOne({favoriteFoods: food}, (err, data) => {
        if(err) {
            callback(err)
        }
        callback(null, data)
    })
}

const findOnePerson = (food, callback) => {
    Person.findOne(food, (err, data) => {
        if(err) {
            callback(err)
        }

        callback(null, data)
    })
}

//find person By Id
const findPersonById = (personId, callback) => {

    Person.findById({_id: personId}, (err, data) => {
        if(err) {
            callback(err)
        }
        callback(null, data)
    })
}


//find edit and save
const findPersonEditAndSave = (personId, callback) => {
    Person.findById({_id: personId}, (err, data) => {
        if(err) {
            callback(err)
        }
        data.favoriteFoods.push('Hamburger')
        data.save()
        callback(null, data)
    })
}


//findOneAndUpdate
const findPersonAndUpdate = (personName,callback) => {
    Person.findOneAndUpdate({name: personName},{age: 20}, {new: true, runValidators: true}, (err, data) => {
        if(err) {
            callback(err)
        }
        callback(null, data)
    })
}






const findAndRemove = (personId, callback) => {
    Person.findByIdAndRemove({_id: personId},(err, data) => {
        if(err) {
            callback(err)
        }

        callback(null, data)
    })

}



const removeManyPersons = (callback) => {
   
    Person.remove({name: 'Marry'}, (err, data) => {
        if(err) {
            callaback(err)
        }

        callback(null, data)
    } )
}
const querySearch = (name, callback) => {
   Person.find({name: name}, (err, data) => {
       if(err) {
           callback(err)
       }      
       callback(null, data).exec()

   })
   .sort({name: 'asc'})
   .limit(2)
   .select("-age")
}