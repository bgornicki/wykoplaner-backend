import { Request, Response } from 'express';
import { handleResponseError } from '../../../submodules/engrave-shared/hof/handleResponseError';
import * as os from 'os';

const middleware: any[] =  [
];
async function handler(req: Request, res: Response) {
    return handleResponseError(async () => {
        return res.json({
            message: 'pong',
            instance: os.hostname()
        });
    }, req, res);
}

export default {
    middleware,
    handler
}