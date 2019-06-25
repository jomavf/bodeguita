import express from 'express'
import appConfig from './config/app-config'
import routes from './routes/routes'

const app = express();
appConfig(app, true);
routes(app);
appConfig(app)
if(process.env.NODE_ENV !== 'test') {
    let port = 8000
    app.listen(port)
    console.log("Listening to port " + port)
}

export default app;
