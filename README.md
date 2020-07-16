# serverless-experiment

node backend with express, webpack and typescript
react frontend - no typescript as I believe it's surplus to requirement for frontend
database hosted on cloud technology of firebase

# Required Environment Variables

Inide of a .env file at the root of the folder the following variables are required, see `.env.example` for an example

* `PORT_NUMBER` - A number between 0 - 65536 o nwhich the app will be hosted

**the following are required for the database to run [Guide](https://support.google.com/firebase/answer/7015592)**

<small>found under the heading **"Get config object for your web app"** at time of writing</small>

* `FIREBASE_DATABASE_URL`
* `FIREBASE_API_KEY`
* `FIREBASE_PROJECT_ID`
* `FIREBASE_STORAGE_BUCKET`
* `FIREBASE_MESSAGING_SENDER_ID`
* `FIREBASE_APP_ID`
