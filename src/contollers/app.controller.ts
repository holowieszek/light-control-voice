import { Request, Response } from 'express';
import  AppService from '../services/app.service';
import { AppInterface as IApp } from '../interfaces/app.interface';
import { returnResponse } from '../helpers/request.helper';

const gpio = require('onoff').Gpio;

export default class appController {
    readonly appService: AppService = new AppService();

    public callGPIO = (req: Request, res: Response) => {
        const { keyword } = req.body;

        return this.appService.findAction(keyword)
            .then(this.callAction)
            .finally(returnResponse(res, 201, true));
    }

    private callAction ({ pin, direction, value }: IApp) {
        const action = new gpio(pin, direction);
        return action.writeSync(value);
    }

    public createAction = (req: Request, res: Response) => {
        return this.appService.createAction(req)
            .then(result => returnResponse(res, 201, result))
            .catch(error => returnResponse(res, 400, error))
    }
}