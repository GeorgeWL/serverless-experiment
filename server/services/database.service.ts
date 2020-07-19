import IConfigFirebase from "../interfaces/config.interface";
import admin from 'firebase-admin';
export default class DatabaseService {
  private deviceStore: any

  constructor(config: IConfigFirebase) {
    if (admin.apps.length <= 0) {
      admin.initializeApp({ credential: admin.credential.cert(config.credential) })
    }
    const db = admin.firestore()
    this.deviceStore = db.collection('devices')
  }

  public get DeviceStore() {
    return this.deviceStore
  }
}
