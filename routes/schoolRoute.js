import express from "express";
import { createSchool, getSchoolList } from "../controllers/school.js";

const router = express.Router();

router.get("/", createSchool);

router.get("/schoolName", getSchoolList);

export default router;
