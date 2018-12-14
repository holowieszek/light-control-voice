import App from '../models/app.model';
import { Request } from 'express';

export default class AppService {
    createAction = (req: Request) => {
        return App.create(req.body);
    }

    findAction = (keyword: string) => {
        return App.findOne({ keyword: keyword }).exec();
    }
}