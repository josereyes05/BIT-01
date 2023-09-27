const { Router } = require('express');

const usersControllers = require('../controllers/userController');

const router = Router();

router.post('/', usersControllers.createUser);
router.get('/', usersControllers.readAllUsers);
router.get('/:id', usersControllers.readUser);
router.put('/:id', usersControllers.updateUser);
router.delete('/:id', usersControllers.deleteUser);

module.exports = router;