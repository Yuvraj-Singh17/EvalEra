const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
// const auth = require('../../middleware/auth'); 
 


// Public Routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Private Routes
router.get('/me', userController.getMe);
router.get('/:id', userController.getUserById);
router.get('/students', userController.getAllStudents);
router.get('/teachers', userController.getAllTeachers);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
