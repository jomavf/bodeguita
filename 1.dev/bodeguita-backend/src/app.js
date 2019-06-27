// import express from 'express'
// import appConfig from './config/app-config'
// import routes from './routes/routes'

// const app = express();
// appConfig(app, true);
// routes(app);
// appConfig(app)
// if(process.env.NODE_ENV !== 'test') {
//     let port = 8000
//     app.listen(port)
//     console.log("Listening to port " + port)
// }

// export default app;

import express from 'express'
import appConfig from './config/app-config'
import routes from './routes/routes'

const appFunc = function(port){
    const app = express();
    appConfig(app, true);
    routes(app);
    appConfig(app)
    if(process.env.NODE_ENV !== 'test') {
        app.listen(port)
        console.log("Listening to port " + port)
    }
    return app;
}

appFunc(8000)

export default appFunc;