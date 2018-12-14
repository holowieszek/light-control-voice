import App from '../models/app.model';
import { Request } from 'express';
import * as Promise from 'bluebird';

export class AppService {
    createAction = (req: Request) => {
        return new Promise((resolve, reject): Promise<{}> => {
            return App.create(req.body)
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                })
        });
    }

    findAction = (keyword: string) => {
        return App.findOne({ keyword: keyword }).exec();
    }
}