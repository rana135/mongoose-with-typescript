import express from 'express';
import { createUser, getAdminUsers, getUser, getUserById } from './user.controller';
const router = express.Router();

//controller কে call দিবো:
router.post('/',createUser);
router.get('/',getUser);
router.get('/admins',getAdminUsers);
router.get('/:id',getUserById);


export default router;