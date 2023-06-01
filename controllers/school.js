import { School } from "../models/schools.js";

export const createSchool = async (req, res) => {
  const school = await School.create({
    schoolNames: [
      {
        name: "Temp",
        email: "temp1@gmail.com",
        address: "temp , address",
      },
    ],
  });

  res.status(200).json({
    success: true,
  });
};

export const getSchoolList = async (req, res) => {
  const school = await School.find({});
  res.json({
    success: true,
    school: school,
  });
};
