const bcrypt = require("bcrypt");
//bcrypt es pa encriptar
const UserModel = require("../models/userModels");
const getToken = require("../helpers/gets");

const usersControllers = {
  createUser: async (request, response) => {
    try {
      const { name, email, password } = request.body;
      const hashpassword = await bcrypt.hash(password, 10);
      //el 10 son las capas de encriptacion

      const newUser = new UserModel({
        name: name,
        email: email,
        password: hashpassword,
        /*y asi creamos el usuario con la contra enciptada
        porque no debemos ver las contraseñas desde la base de datos
        nadie debe verlas :)*/
      });
      const userCreated = await newUser.save();
      const token = await getToken({
        id: userCreated.id,
        name: userCreated.name,
      });

      response.json({
        message: token,
      });

      console.log(userCreated);
      console.log(newUser);
    } catch (error) {
      response.json({
        message: `An error just ocurred on the creation 
        of the user :(, ${console.error(error)}`,
      });
    }
  },
  readAllUsers: async (request, response) => {
    try {
      const allUsers = await UserModel.find();
      response.json({ allUsers });
      console.log(allUsers);
    } catch (error) {
      response.json({ message: "error al leer los usuarios", error });
    }
  },
  readUser: async (request, response) => {
    try {
      const user = await UserModel.findById(request.params.id);
      if (user) response.json({ user });
      else {
        throw new Error("Usuario no encontrado :(");
      }
    } catch (error) {
      response.json({ message: Error.message || "error al encontrar el usuario" });
    }
  },
  updateUser: async (request, response) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(request.params.id, 
            request.body);
            
    } catch (error) {
        response.json({ message: Error.message || "error al encontrar el usuario" });
    }
  },
  deleteUser: async (request, response) => {
    try {
        const userDeleted = await UserModel.findByIdAndDelete(request.params.id);
        if (userDeleted) response.json({userDeleted: userDeleted._id})
         else {
        throw new Error('User not found')
        }
    } catch (error) {
        response.json({ message: Error.message || "error al encontrar el usuario" });
    }
  },
};

module.exports = usersControllers;
