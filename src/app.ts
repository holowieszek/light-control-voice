import * as express from 'express';
import * as bodyParser from 'body-parser';
import { appRouting } from './routes/app.routing';
import { Request, Response, NextFunction } from 'express';

class App {
    app: express.Application;
    private appRoutes: appRouting = new appRouting();

    constructor() {
        this.app = express();
        this.cors();
        this.config();
    }

    config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.appRoutes.routes(this.app);
    }

    cors(): void {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            );

            if(req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'POST');
                return res.status(200).json({});
            }

            next();
        });
    }
}

export default new App().app;