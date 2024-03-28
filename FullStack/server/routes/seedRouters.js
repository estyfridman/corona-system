import express from "express";
import Member from "../models/memberModel.js";
import CoronaDetail from "../models/coronaDetailModel.js";
import data from "./../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
    try {
        await Member.deleteMany({});
        await CoronaDetail.deleteMany({});

        await Member.insertMany(data.members);
        await CoronaDetail.insertMany(data.corona_Details);

        res.status(200).send({ message: "The information was successfully saved" });

    } catch (error) {
        console.log("failed" + error.message);
    }
});


export default seedRouter;