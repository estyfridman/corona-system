import express from "express";
import expressAsyncHandler from "express-async-handler";
import Member from "../models/memberModel.js";

const memberRouter = express.Router();

memberRouter.post(
  "/new",
  expressAsyncHandler(async (req, res) => {
    try {
        const newMember = new Member ({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            id_number: req.body.id_number,
            email: req.body.email,
            city: req.body.city,
            street: req.body.street,
            house_number: req.body.house_number,
            birth_date: req.body.birth_date,
            phone_number: req.body.phone_number,
            mobile_number: req.body.mobile_number,
            image: req.body.image
        });
        const member = await newMember.save();
        res.status(201).send({ message: "Member created", member });
      } catch (err) {
        res.status(500).send({ message: "new member not added succsesfuly" });
      }
    })
);

memberRouter.delete(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const idNumber = req.params.id;
      const memberToDelete = await Member.findOne({ id_number: idNumber });

      // Check if member exists before deletion
      if (!memberToDelete) {
        return res.status(404).send({ message: "Member not found" });
      }
      await memberToDelete.deleteOne();

      res.status(200).send({ message: "Member deleted successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: "Error deleting member" });
    }
  })
);

//get all members
memberRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    try {
      const members = await Member.find();

      // Check if member exists
      if (!members) {
        return res.status(404).send({ message: "Member not found" });
      }

      // Return the member
      res.status(200).send(members);
    } catch (err) {
      res.status(500).send({ message: "Error retrieving member" });
    }
  })
);


memberRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const memberId = req.params.id;
      const member = await Member.findOne({ id_number: memberId });

      // Check if member exists
      if (!member) {
        return res.status(404).send({ message: "Member not found" });
      }

      // Return the member
      res.status(200).send(member);
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: "Error retrieving member" });
    }
  })
);

//update
memberRouter.patch(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    try {
      const memberId = req.params.id;
      const { first_name, last_name, email, city, street, house_number, birth_date, phone_number, mobile_number, image } = req.body;

      // Find the member by ID
      const memberToUpdate = await Member.findOne({ id_number: memberId });

      if (!memberToUpdate) {
        return res.status(404).send({ message: "Member not found" });
      }

      // Update member fields
      if (first_name) memberToUpdate.first_name = first_name;
      if (last_name) memberToUpdate.last_name = last_name;
      if (email) memberToUpdate.email = email;
      if (email) memberToUpdate.email = email;
      if (city) memberToUpdate.city = city;
      if (street) memberToUpdate.street = street;
      if (house_number) memberToUpdate.house_number = house_number;
      if (birth_date) memberToUpdate.birth_date = birth_date;
      if (phone_number) memberToUpdate.phone_number = phone_number;
      if (mobile_number) memberToUpdate.mobile_number = mobile_number;
      if (email) memberToUpdate.email = email;
      if (image) memberToUpdate.image = image;

      // Save the updated member
      await memberToUpdate.save();

      res.status(200).send({ message: "Member updated successfully", member: memberToUpdate });
    } catch (err) {
      console.error(err.message);
      res.status(500).send({ message: "Error updating member" });
    }
  })
);

export default memberRouter;


