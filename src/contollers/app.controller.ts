import { Request, Response } from 'express';
import * as Promise from 'bluebird';

var gpio = require('rpi-gpio');


export default class appController {
    private pinStatus: boolean = false;

    GPIO = (req: Request, res: Response): void => {
        if(req.body.message == "WŁĄCZ") {
            this.turnOn()
                .then(result => {
                    return res.status(201).json(result);
                })
                .catch(err => {
                    return res.status(201).json(err);
                });
        } else if (req.body.message == "WYŁĄCZ") {
            this.turnOff()
                .then(result => {
                    return res.status(201).json(result);
                })
                .catch(err => {
                    return res.status(201).json(err);
                });
        } else {
            return res.status(201).json('something else');
        }
    }

    private turnOn = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            if (!this.pinStatus) {
                this.pinStatus = true;
                gpio.setup(18, gpio.DIR_OUT);
                resolve('Turned on!');
            }
            reject('Is turned on!');
        });
    }

    private turnOff = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            if (this.pinStatus) {
                this.pinStatus = false;
                gpio.setup(18, gpio.DIR_IN);
                resolve('Turned off!');
            }

            reject('Is turned off!');
        });
    }
}