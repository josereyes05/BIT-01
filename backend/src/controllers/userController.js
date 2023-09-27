const UserModel = require('../models/userModels')

const usersControllers = {
    createUser: async (request, response) => {
        const newUser = new UserModel(request.body)
        const userCreated = await newUser.save()
        console.log(userCreated)
        console.log(newUser)
        response.json({ message: `User created with id: ${userCreated._id}`})
    },
    readAllUsers: (request, response) => {
        response.json({ message: 'reading...'})
    },
    readUser:  (request, response) => {
         response.json({ message: 'reading one user...'})
    },
    updateUser:  (request, response) => {
        response.json({ message: 'update...'})
    },
    deleteUser:  (request, response) => {
        response.json({ message: 'delete...'})
    }
}

module.exports = usersControllers;