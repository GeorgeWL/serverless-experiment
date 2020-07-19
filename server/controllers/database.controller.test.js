import { getDevices, getDeviceById, createDevice, updateDevice, removeDeviceById } from "./database.controller";
const getDaysAgoFromNow = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days)
  return new Date(date)
}
describe('Succesful Requests', () => {
  it('should get all devices, without options object', async () => {
    expect(await getDevices()).toEqual();
  });
  it('should get all devices, with options which filter the devices by date', async () => {
    expect(await getDevices({ minDate: getDaysAgoFromNow(4) })).toEqual();
    expect(await getDevices({ maxDate: getDaysAgoFromNow(1) })).toEqual();
  })
  it('should create a device when provided with a valid id and data', () => {

  })
  it('should update a device when provided with a valid existing id and data', () => {

  })
  it('should get a device when provided with a valid id', () => {

  });
  it('should remove device when provided with a valid id', () => {

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
