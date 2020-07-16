export enum EnumDeviceInterface {
  'WIFI',
  'BTLE'
}
export interface IDevice {
  time: Date;
  interface: EnumDeviceInterface;
  level: number;
}

export interface IRemoteDevice extends IDevice {
  remoteDeviceId: string;
}

export interface InputtedDevice {
  deviceId: string;
  neighbours: IRemoteDevice[]
}

export interface IDevices {
  devices: IDevice[]
  averageLevel: number;
}

export interface IDeviceFilterOptions {
  min: Date;
  max: Date;
}
