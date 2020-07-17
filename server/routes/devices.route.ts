import express, { Request, Response } from 'express';
import { updateDevice } from '../controllers/database.controller';
import { IRemoteDevice, IDeviceScan } from '../interfaces/device.interface';

const devicesRoute = express.Router();

devicesRoute.post('/deviceScan', async (req: Request, res: Response) => {
  const data: IDeviceScan = req.body;
  const { deviceId } = data;
  try {
    updateDevice(deviceId, data)
  } catch (error) {

  }
});

export default devicesRoute;
