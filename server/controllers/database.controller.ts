import DatabaseService from "../services/database.service";
import IConfigFirebase from "../interfaces/config.interface";
import * as dotenv from 'dotenv';

dotenv.config();
const unparsedConfig = process.env.FIREBASE_CONFIG as string;
const serviceConfig: IConfigFirebase = JSON.parse(unparsedConfig);
const db = new DatabaseService(serviceConfig);

export interface IOptions {
  minDate: Date;
  maxDate: Date;
  withRelations: boolean;
}

export const getDeviceById = async (deviceId: string) => {
  if (typeof deviceId !== 'string') {
    throw new Error('Provide a deviceID');
  }
  try {
    const device = await db.DeviceStore.doc(deviceId).get()
      .catch(err => {
        console.error('error', err);
        throw new Error('Device Not Found');
      })
    return device;
  } catch (error) {
    throw error;
  }
}

// technically in the JSON DB used, Create-Update are the same action, as it's evetnually consistent
export const createDevice = async (deviceId: string, data: object) => {
  if (!deviceId || typeof deviceId !== 'string') {
    throw new Error('Provide a deviceID');
  }
  if (!data) {
    throw new Error('No Data Provided');
  }
  throw new Error('Device Not Found');
}

export const updateDevice = async (deviceId: string, data: object) => {
  if (!deviceId || typeof deviceId !== 'string') {
    throw new Error('Provide a deviceID');
  }
  if (!data) {
    throw new Error('No Data Provided');
  }
  throw new Error('Device Not Found');
}

export const removeDeviceById = async (deviceId: string) => {
  if (!deviceId || typeof deviceId !== 'string') {
    throw new Error('Provide a deviceID');
  }
  throw new Error('Device Not Found, Unable to delete');
}

export const getDevices = async (options?: IOptions) => {
  if (options && !options.minDate || options && !options.maxDate) {
    throw new Error('If provide options, minDate and/or maxDate is required');
  }
  throw new Error('Unable to fetch devices');
}
