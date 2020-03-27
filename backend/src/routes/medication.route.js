import express from 'express'
import MedicationController from '../controllers/medication.controller'
import auth from '../middlewares/auth/auth.middleware';
import permissions from '../middlewares/auth/role.middleware'

const router = express.Router()

router.post('/medications/',
  auth.verify,
  permissions.registeredOnly,
  MedicationController.addMedication)

router.patch('/medications/:id',
  auth.verify,
  permissions.registeredOnly,
  MedicationController.editMedication)

router.get('/medications/',
  auth.verify,
  permissions.registeredOnly,
  MedicationController.getMedications)

router.delete('/medications/:id',
  auth.verify,
  permissions.registeredOnly,
  MedicationController.deleteMedication)

export default router