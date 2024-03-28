import express from "express";
import expressAsyncHandler from "express-async-handler";
import CoronaDetail from "../models/coronaDetailModel.js";

const coronaDetailRouter = express.Router();

// create new
coronaDetailRouter.post(
  "/new",
  expressAsyncHandler(async (req, res) => {
    try {
        const newCoronaDetailData = {
            id_number: req.body.id_number,
            vaccinations: req.body.vaccinations || [],
            positive_corona: req.body.positive_corona || null,
            date_of_recovery: req.body.date_of_recovery || null
        };

        // Check if a resource with the ID already exists
        const existingCoronaDetail = await CoronaDetail.findOneAndUpdate(
            { id_number: req.body.id_number },
            newCoronaDetailData,
            { new: true, upsert: true }
          );
    
          res.status(201).send(existingCoronaDetail);
    } catch (err) {
      res.status(500).send({ message: "Adding the corona detail failed" });
    }
  })
);

//Adding a single vaccine 
coronaDetailRouter.put(
    "/vc/:id",
    expressAsyncHandler(async (req, res) => {
      try {
        const idNumber = req.params.id;
        const newVaccination = {
             date_of_vaccination: req.body.date_of_vaccination,
             manufacturer: req.body.manufacturer
        };
        const cdToUpdate = await CoronaDetail.findOne({ id_number: idNumber });
        if(cdToUpdate){
          cdToUpdate.vaccinations.push(newVaccination);
          await cdToUpdate.save();
          res.status(201).send({ message: 'Updated'});
        }else{
          const newDocument = {
            id_number: idNumber,
            vaccinations: [newVaccination]
          };
          await CoronaDetail.insertOne(newDocument);
        }
 
      res.status(201).send("");

    }catch (err) {
      res.status(500).send(err);
  }})
  );


  //Adding an event date
  coronaDetailRouter.put(
    "/event/:id",
    expressAsyncHandler(async (req, res) => {
        try {
          const id = req.params.id;
          const {positive_corona, date_of_recovery} = req.body;
          const cdToUpdate = await CoronaDetail.findOne({ id_number: id });

          if(cdToUpdate){
            if (positive_corona) cdToUpdate.positive_corona = positive_corona;
            if (date_of_recovery) cdToUpdate.date_of_recovery = date_of_recovery;
  
            await cdToUpdate.save();
          }else{
            const newCoronaDetail = new CoronaDetail ({
              id_number: id,
              positive_corona: req.body.positive_corona
            });
          await newCoronaDetail.save();
          
          }

          res.status(200).send({message: "Success"});
        } catch (err) {
            res.status(500).send({ message: "Failed to update the corona detail" });
        }
    })
  );
  
  coronaDetailRouter.delete(
    "/:id",
    expressAsyncHandler(async (req, res) => {
      try {
        const idNumber = req.params.id;
        const coronaDetailToDelete = await CoronaDetail.findOne({ id_number: idNumber });

        if (!coronaDetailToDelete) {
            return res.status(404).send({ message: "Corona Details not found" });
          }
          await coronaDetailToDelete.deleteOne();
    
          res.status(200).send({ message: "Corona details deleted successfully" });

    } catch (err) {
        console.error(err.message);
        res.status(500).send({ message: "Error deleting corona details" });
      }
    })
  );

  //get all
  coronaDetailRouter.get(
    "/",
    expressAsyncHandler(async (req, res) => {
      try {
        const coronaDetails = await CoronaDetail.find();

        if (!coronaDetails) {
            return res.status(404).send({ message: "Corona Details not found" });
          }    
        res.status(200).send(coronaDetails);

    } catch (err) {
        res.status(500).send({ message: "Error retrieving corona details" });
      }
    })
  );
  
  //get one
  coronaDetailRouter.get(
    "/:id",
    expressAsyncHandler(async (req, res) => {
      try {
        const idNumber = req.params.id;
        const coronaDetail = await CoronaDetail.findOne({ id_number: idNumber });
        
        if (!coronaDetail) {
            return res.status(404).send({ message: "Corona details not found" });
        }   

        res.status(200).send(coronaDetail);

    } catch (err) {
        res.status(500).send({ message: "Error retrieving corona details" });
      }
    })
  );

  
export default coronaDetailRouter;