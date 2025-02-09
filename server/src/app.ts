import express, { Request, Response } from "express";
import cors from 'cors';
import globalErrorHandler from "./middlewares/globalErrorHandler";
import router from "./routers";

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials:true
}));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Server running....' });
});


app.use(globalErrorHandler)

export default app;
