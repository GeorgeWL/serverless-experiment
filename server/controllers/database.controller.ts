import DatabaseService from "../services/database.service";
import IConfigFirebase from "../interfaces/config.interface";

const serviceConfig: IConfigFirebase = JSON.parse(process.env.FIREBASE_CONFIG as string);

const db = new DatabaseService(serviceConfig);

export const getDeviceById = async (deviceId: string) => {
  if (!deviceId) { throw new Error('Provide a deviceID'); }
  throw new Error('Device Not Found');
}

export const createDevice = async (deviceId: string, data: object) => {
  if (!deviceId) { throw new Error('Provide a deviceID'); }
  if (!data) {
    throw new Error('No Data Provided');
  }
  throw new Error('Device Not Found');
}

export const updateDevice = async (deviceId: string, data: object) => {
  if (!deviceId) { throw new Error('Provide a deviceID'); }
  if (!data) {
    throw new Error('No Data Provided');
  }
  throw new Error('Device Not Found');
}

export const removeDeviceById = async (deviceId: string) => {
  if (!deviceId) { throw new Error('Provide a deviceID'); }
  throw new Error('Device Not Found, Unable to delete');
}
