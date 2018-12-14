import { Response } from 'express';

export const returnResponse = (res: Response, status: number = 200, value) => {
    return res.status(status).json(value);
}
