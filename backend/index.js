import express from "express";
import router from "./routes/userRoutes.js"
import mongodb from "./db/dbconfig.js"
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

//middlewerw
app.use(express.json());

//middlewerw
app.use("/api",router);

mongodb();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});