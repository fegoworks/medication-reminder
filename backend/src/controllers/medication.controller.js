import {
  Medication
} from '../models';
import {
  handleErrorResponse,
  handleSuccessResponse
} from '../helpers/utils';

/**
 * @description Medication Controller
 * @class MedicationController
 */
class MedicationController {
  /**
   * @description Add Medication method
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} Medication
   * @member MedicationController
   */

  static async addMedication(req, res) {
    try {
      const {
        name,
        dose,
        timesDaily,
        hoursInterval,
        start,
        finish,
        description,
      } = req.body;

      const userId = req.id;
      const startMedication = new Date(start);
      const finishMedication = new Date(finish);

      const medication = await Medication.create({
        userId,
        name,
        dose,
        timesDaily,
        hoursInterval,
        start: startMedication,
        finish: finishMedication,
        description,
      });
      return handleSuccessResponse(res, medication, 201);
    } catch (error) {
      return handleErrorResponse(res, error.message, 403);
    }
  }

  /**
   * @description Edit Medication method
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} Medication
   * @member MedicationController
   */
  static async editMedication(req, res) {
    try {
      const {
        id
      } = req.params;
      const userId = req.id;
      const {
        name,
        dose,
        timesDaily,
        hoursInterval,
        start,
        finish,
        description,
      } = req.body;

      const found = await Medication.findByPk(id);
      if (found) {
        if (found.userId !== userId) {
          return handleErrorResponse(
            res,
            'Not authorized to update this medication'
          );
        }
        await Medication.update({
          userId,
          name,
          dose,
          timesDaily,
          hoursInterval,
          start,
          finish,
          description,
        }, {
          where: {
            id,
          },
        });

        return res.status(200).json({
          status: 'success',
          message: 'Medication updated successfully',
        });
      }
      return handleErrorResponse(res, 'Medication not found', 404);
    } catch (error) {
      return handleErrorResponse(res, error.message, 403);
    }
  }

  /**
   * @description Get all Medications
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {object} Medications
   * @member MedicationController
   */
  static async getMedications(req, res) {
    try {
      const userId = req.id;
      const Medications = await Medication.findAll({
        where: {
          userId,
        },
      });
      return handleSuccessResponse(res, Medications);
    } catch (error) {
      return handleErrorResponse(res, error.message, 500);
    }
  }

  /**
   * @description Delete Medication
   * @static
   * @param {object} req
   * @param {object} res
   * @returns {null} void
   * @member MedicationController
   */
  static async deleteMedication(req, res) {
    try {
      const {
        id
      } = req.params;

      const Medication = await Medication.findByPk(id);
      if (medication) {
        if (medication.userId !== userId) {
          return handleErrorResponse(
            res,
            'Not authorized to delete this medication'
          );
        }
        await Medication.destroy({
          where: {
            id,
          },
        });
        return res.status(204).json({
          status: 'success',
          message: 'Medication deleted successfully',
        });
      }
      return handleErrorResponse(res, 'Medication not found', 404);
    } catch (error) {
      return handleErrorResponse(res, error.message, 500);
    }
  }
}

export default MedicationController;