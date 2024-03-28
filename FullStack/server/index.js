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


mongoose.connect(process.env.MONGO_URL)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
  });
}).catch((err) => console.log(err.message));




