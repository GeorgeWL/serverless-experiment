import express, { Request, Response } from 'express';
import { createDevice, getDeviceById, updateDevice, removeDeviceById, getDevices } from '../controllers/database.controller';
import { IDeviceScan, IRemoteDevice } from '../interfaces/device.interface';

const devicesRoute = express.Router();

devicesRoute.get('/', async (req: Request, res: Response) => {
  const { minDate, maxDate } = req.query;
  const parsedMin = !!minDate ? new Date(minDate as string) : undefined;
  const parsedMax = !!maxDate ? new Date(maxDate as string) : undefined;
  const options = (minDate || maxDate) ? { minDate: parsedMin, maxDate: parsedMax } : undefined;
  try {
    const devices = await getDevices(options)
    res.status(200).send(devices)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

devicesRoute.get('/:deviceId', async (req: Request, res: Response) => {
  const { deviceId } = req.params;
  try {
    const device = await getDeviceById(deviceId)
    res.status(200).send(device)
  } catch (error) {
    res.status(404).send(error.message)
  }
})

devicesRoute.post('/create', async (req: Request, res: Response) => {
  const data: IRemoteDevice = req.body;
  try {
    createDevice(data)
    res.status(201).send({ accepted: true })
  } catch (error) {
    res.status(400).send({
      accepted: false,
      error: error.message
    })
  }
});
devicesRoute.post('/update', async (req: Request, res: Response) => {
  const data: IRemoteDevice = req.body;
  try {
    updateDevice(data)
    res.status(201).send({ accepted: true })
  } catch (error) {
    res.status(401).send({
      accepted: false,
      error: error.message
    })
  }
});
devicesRoute.post('/remove/:deviceId', async (req: Request, res: Response) => {
  const { deviceId } = req.params;
  try {
    removeDeviceById(deviceId)
    res.status(201).send({ accepted: true })
  } catch (error) {
    res.status(401).send({
      accepted: false,
      error: error.message
    })
  }
});

export default devicesRoute;
