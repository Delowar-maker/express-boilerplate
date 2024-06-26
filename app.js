import express from "express";

import cookieParser from "cookie-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import router from "./src/routes/api.js";


const app = express();



//Middleware

app.use(cors());
app.use(helmet());
app.use(hpp());


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});

app.use(limiter);
app.use(cookieParser());

//Disable Respose Cache
app.set('etag', false);


//Request Size Limit
app.use(express.json({ limit: "20MB" }));
app.use(express.urlencoded({ limit: false }));

//DataBase Connection
//mongoose.connect("", { autoIndex: true })


//Api route Connect

app.use("/api", router);



export default app;