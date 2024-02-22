const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://root:root@cluster0.c4jxjyu.mongodb.net/", {
  // Supprimez les options useNewUrlParser et useUnifiedTopology dépréciées
}).then(() => {
  console.log("Connected to DB");
}).catch((error) => {
  console.log("Error to connect to DB", error);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const Employee = require("./models/employee");
const Attendance = require("./models/attendance");

//endpoint to register a emp
app.post("/addEmployee", async (req, res) =>{
    try{
        const { employeeName,employeeId, designation, phoneNumber,dateOfBirth, joiningDate, activeEmployee, salary, address,} = req.body;
        //create Emp
        const newEmployee = new Employee({
            employeeName,employeeId, designation, phoneNumber,dateOfBirth, joiningDate, activeEmployee, salary, address,
        });
        await newEmployee.save();
        res.status(201).json({ message: "Employee saved successfully", employee: newEmployee });
    }catch (error) {
        console.log("Error creating employee", error);
        res.status(500).json({ message: "Failed to add an employee" });
      }
});

//endpoint to fecth all emp

app.get("/employees", async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve the employees" });
    }
  });
