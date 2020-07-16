import * as dotenv from 'dotenv';
import helmet from 'helmet'; //useful helper library - makes require less setup for security
import cors from 'cors'; //security
import express, { Request, Response } from 'express';
import devicesRoute from './routes/devices.route';

dotenv.config();
const app = express();
// app config
app.use(cors());
app.use(helmet());
app.use(express.json());

// on local use default port, else use passed-in from env
let portNumber: number;
if (process.env.NODE_ENV === 'local') {
  portNumber = 4000;
} else {
  portNumber = parseInt(process.env.PORT_NUMBER as string, 10)
}

app.use('/api/devices', devicesRoute)

app.get("/api", (req: Request, res: Response): void => {
  res.status(200).send({ isTest: true });
})

app.listen(portNumber, () => `Server listening on port ${portNumber}!`)
