import IConfigFirebase from "../interfaces/config.interface";
import admin from 'firebase-admin';
export default class DatabaseService {
  private deviceStore: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

  constructor(config: IConfigFirebase) {
    admin.initializeApp({
      databaseURL: config.databaseURL,
    })
    const db = admin.firestore()
    this.deviceStore = db.collection('devices')
  }

  public get DeviceStore() {
    return this.deviceStore
  }
}
