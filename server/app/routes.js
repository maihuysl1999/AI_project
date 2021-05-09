const express = require("express");
const { route } = require("..");
const router = express.Router();
const patient = require("./controllers/Patient");

router.get("/patient/patientsList",patient.getPatientsList);