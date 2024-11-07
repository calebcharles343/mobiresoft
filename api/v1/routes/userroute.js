import express from 'express';
import userController from '../controllers/usercontroller';
import { requireAuth, adminAuth } from '../middleware/authmiddleware';
import idValidation from '../validations/idvalidation';

const {
  getAllUsers, getUserById, getCurrentUser, deleteUser,
} = userController;
const { idValid } = idValidation;

const router = express.Router();

router.get('/', requireAuth, adminAuth, getAllUsers);
router.get('/profile', requireAuth, getCurrentUser);
router.get('/:id', requireAuth, adminAuth, idValid, getUserById);
router.delete('/:id', requireAuth, adminAuth, idValid, deleteUser);

export default router;
