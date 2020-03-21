import express from 'express'
import MedicationController from '../controllers/medication.controller'

const router = express.Router()

router.post('/medications/',
  MedicationController.addMedication)

router.patch('/medications/:id',
  MedicationController.editMedication)

router.get('/medications/',
  MedicationController.getMedications)

router.delete('/medications/:id',
  MedicationController.deleteMedication)

export default router