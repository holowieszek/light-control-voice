import { Request, Response } from 'express';
import { AppService } from '../services/app.service';

const gpio = require('onoff').Gpio;

export default class appController {
    appService: AppService = new AppService();

    GPIO = (req: Request, res: Response) => {
        this.appService.findAction(req.body.keyword)
            .then(result => this.callAction(result))
            .finally(() => res.status(201).json(true))
    }

    callAction = (result: { pin: number, direction: string, value: number }) => {
        const action = new gpio(result.pin, result.direction);
        action.writeSync(result.value);
    }

    createAction = (req: Request, res: Response) => {
        this.appService.createAction(req)
            .then(result => res.status(201).json(result))
            .catch(error => res.status(400).json(error))
    }
}