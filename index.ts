import express from 'express';
const app = express();
const port = parseInt(process.env.PORT_NUMBER as string, 10)


app.listen(port, () => `Server listening on port ${port}!`)
