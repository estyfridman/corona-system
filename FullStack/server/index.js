import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRouters.js";
import memberRouter from "./routes/membersRouters.js";
import coronaDetailRouter from "./routes/coronaDetailRouters.js";

const PORT = process.env.PORT || 5050;

const app = express();
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/members", memberRouter);
app.use("/api/seed", seedRouter);
app.use("/api/corona", coronaDetailRouter);


mongoose.connect(process.env.MONGO_URL || "mongodb://ehshpiner:kdExc6PGtpz4xYts@ac-vlnvcjo-shard-00-00.3hwmtbz.mongodb.net:27017,ac-vlnvcjo-shard-00-01.3hwmtbz.mongodb.net:27017,ac-vlnvcjo-shard-00-02.3hwmtbz.mongodb.net:27017/?replicaSet=atlas-13bqn0-shard-0&tls=true&authSource=admin")
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
  });
}).catch((err) => console.log(err.message));




