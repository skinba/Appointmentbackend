import express from "express"
import appointmentsController from "../api/controllers/appointments.controller";
import tokenconfigController from "../api/controllers/tokenconfig.controller";

export const router = express.Router();

// router.get('/appointments', appointmentsController.findAll);
router.post('/appointments', appointmentsController.create);
router.get('/appointments', appointmentsController.findall);
router.get('/appointments/:id', appointmentsController.findOne);
router.delete('/appointments/:id', appointmentsController.delete);
router.put('/appointments/:id', appointmentsController.update);
router.put('/appoint/:id', appointmentsController.updat);
router.get('/token', tokenconfigController.findall)
router.put('/token/:id', tokenconfigController.update)
//router.get('/token', tokenconfigController.create)