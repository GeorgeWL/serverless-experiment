import { getDevices, getDeviceById, createDevice, updateDevice, removeDeviceById } from "./database.controller";

import { v4 } from 'uuid'

const getDaysAgoFromNow = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days)
  return new Date(date)
}

const device = {
  interface: "BTLE",
  level: 90,
  neighbours: [],
  time: new Date().toISOString(),
  remoteDeviceId: v4()
}
describe('Succesful Requests', () => {
  it('should get all devices, without options object', async () => {
    expect(await getDevices()).toEqual();
  });
  it('should get all devices, with options which filter the devices by date', async () => {
    expect(await getDevices({ minDate: getDaysAgoFromNow(4) })).toEqual();
    expect(await getDevices({ maxDate: getDaysAgoFromNow(1) })).toEqual();
  })
  it('should create a device when provided with a valid data', async () => {
    expect(await createDevice(device)).toEqual({ accepted: true });
  })
  it('should update a device when provided with a valid data', async () => {
    expect(await updateDevice({ ...device, level: 30 })).toEqual({ accepted: true });
  })
  it('should get a device when provided with a valid id', async () => {
    expect(await getDeviceById(device.remoteDeviceId)).toEqual(device);
  });
  it('should remove device when provided with a valid id', async () => {
    expect(await removeDeviceById(device.remoteDeviceId)).toEqual({ deleted: true });
  })
});
describe('Failure Tests', () => {
  it('should error and not return for getDevices if provided with a malformed options', async () => {
    expect(await getDevices({}).catch(err => err.message)).toEqual('If provide options, minDate and/or maxDate is required');
  })
  it('should fail to get a device when provided with invalid or none-existent id', async () => {
    expect(await getDeviceById(undefined).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await getDeviceById(null).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await getDeviceById({}).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await getDeviceById(1).catch(err => err.message)).toEqual('Provide a deviceID');
  });
  it('should fail to create a device when provided with invalid or none-existent id', async () => {
    expect(await createDevice(undefined).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await createDevice(null).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await createDevice({}).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await createDevice(1).catch(err => err.message)).toEqual('Provide a deviceID');
  });
  it('should fail to update a device when provided with invalid or none-existent id', async () => {
    expect(await updateDevice(undefined).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await updateDevice(null).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await updateDevice({}).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await updateDevice(1).catch(err => err.message)).toEqual('Provide a deviceID');
  });
  it('should fail to remove device when provided with invalid or none-existent id', async () => {
    expect(await removeDeviceById(undefined).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await removeDeviceById(null).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await removeDeviceById({}).catch(err => err.message)).toEqual('Provide a deviceID');
    expect(await removeDeviceById(1).catch(err => err.message)).toEqual('Provide a deviceID');
  })
});
