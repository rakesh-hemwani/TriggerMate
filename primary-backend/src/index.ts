import express from "express"
import { userRouter } from "./routers/userRouter";
import { zapRouter } from "./routers/zapRouter";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())


app.use("/app/v1/user", userRouter);
app.use("/app/v1/zap", zapRouter);


app.listen(3000);