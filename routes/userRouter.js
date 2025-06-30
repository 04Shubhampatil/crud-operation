

// routes/userRouter.js

import { Router } from "express";
import User from "../models/userModel.js";

const router = Router();

router.get("/getlist", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch users", error });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found with given ID" });
        }
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching user by ID", error });
    }
});

router.post("/add", async (req, res) => {
    const { fristName, lastName, age, city } = req.body;

    const newUser = new User({
        fristName,
        lastName,
        age,
        city,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        return res.status(500).json({ message: "Failed to add user", error });
    }
});

router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { fristName, lastName, age, city } = req.body;

    try {

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.fristName = fristName;
        user.lastName = lastName;
        user.age = age;
        user.city = city;


        const updatedUser = await user.save();

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: "Failed to update user", error });
    }
});


router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params; 

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user", error });
  }
});







export default router;
