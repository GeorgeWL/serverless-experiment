import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

const port = parseInt(process.env.PORT_NUMBER as string, 10)

app.use("/api", (req: Request, res: Response): void => {
  res.send("You have reached the API");
})

app.listen(port, () => `Server listening on port ${port}!`)
