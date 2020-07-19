import DatabaseService from "../services/database.service";
import IConfigFirebase from "../interfaces/config.interface";
import * as dotenv from 'dotenv';
import { IRemoteDevice } from "../interfaces/device.interface";

dotenv.config();
const unparsedConfig = process.env.FIREBASE_CONFIG as string;
const serviceConfig: IConfigFirebase = JSON.parse(unparsedConfig);
const db = new DatabaseService(serviceConfig);

export interface IOptions {
  minDate?: Date;
  maxDate?: Date;
}

export const getDeviceById = async (deviceId: string) => {
  if (typeof deviceId !== 'string') {
    throw new Error('Provide a deviceID');
  }
  try {
    const device = await db.DeviceStore.doc(deviceId).get()
      .catch((err: any) => {
        console.error('error', err);
        throw new Error('Device Not Found');
      })
    const data = device.data()
    return { ...data, remoteDeviceId: deviceId };
  } catch (error) {
    throw error;
  }
}

// technically in the JSON DB used, Create-Update are the same action, as it's evetnually consistent
export const createDevice = async (data: IRemoteDevice) => {
  if (!data) {
    throw new Error('No Data Provided');
  }
  try {
    await createUpdate(data)
    return { accepted: true }
  } catch (error) {
    throw new Error('Unable to update device');
  }
}
// to consider - nerge create/update, or instead check device exists before update?
export const updateDevice = async (data: IRemoteDevice) => {
  if (!data) {
    throw new Error('No Data Provided');
  }
  try {
    const device = getDeviceById(data.remoteDeviceId)
    const deviceExists = !!device;
    if (deviceExists) {
      await createUpdate(data)
      return { accepted: true }
    } else {
      throw new Error('Device not found');
    }
  } catch (error) {
    throw new Error('Unable to update device');
  }
}

const createUpdate = async (data: IRemoteDevice) => {
  const { remoteDeviceId } = data;
  const newData = { ...data };
  delete newData.remoteDeviceId;
  const createUpdatedDevice = db.DeviceStore.doc(remoteDeviceId)
  await createUpdatedDevice.set(newData)
}

export const removeDeviceById = async (deviceId: string) => {
  if (typeof deviceId !== 'string') {
    throw new Error('Provide a deviceID');
  }
  try {
    const res = await db.DeviceStore.doc(deviceId).delete().catch((err: any) => {
      console.error('error', err);
      throw new Error('Device Not Found');
    });
    return res
  } catch (error) {
    throw error;
  }
}

export const getDevices = async (options?: IOptions) => {
  if (options && !options.minDate || options && !options.maxDate) {
    throw new Error('If provide options, minDate and/or maxDate is required');
  }
  const devices: any[] = [];
  try {
    const collection = await db.DeviceStore.orderBy('time', 'desc').get().catch((err: any) => {
      console.error('error', err);
      throw new Error('Unable to fetch devices');
    });
    collection.forEach(async (device: any) => {
      devices.push({ remoteDeviceId: device.id, ...device.data() })
    });
    return devices
  } catch (err) {
    throw err;
  }
}
