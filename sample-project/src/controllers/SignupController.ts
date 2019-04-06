/**
 * Example Sending Email for the OvernightJS web library.
 *
 * created by Sean Maxwell Aug 28, 2018
 */

import { Request, Response } from 'express';
import { Controller, Post  } from '@overnightjs/core';
import MailPromise from 'mail-promise';


@Controller('api/signup')
export class SignupController {

    private readonly mailer: MailPromise;


    constructor() {
        this.mailer = new MailPromise();
    }


    @Post()
    private async signup(req: Request, res: Response): Promise<void> {

        let msg = 'problem_sending_email';
        let code = 400;

        try {
            const info = await this.mailer.send(req.body.email, 'Overnight Developers',
                'Thanks for signing up', null, '<h1>You are awesome</h1>');

            cinfo(info.response);
            msg = 'email_sent_to_' + req.body.email;
            code = 200;

        } catch (err) {
            cerr(err);
        } finally {
            res.status(code).json({msg});
        }
    }
}

export const someOtherVal = 'foo';
