import { Injectable } from '@nestjs/common';
import { AuthDataValidator, objectToAuthDataMap } from '@telegram-auth/server';

@Injectable()
export class AuthService {


    async authTelegramHash(telegramData: Record<string, any>){

        const validator = new AuthDataValidator({ botToken: process.env.TELEGRAM_BOT_TOKEN ?? '' })

        const data = objectToAuthDataMap(telegramData)

        try{
            const user = await validator.validate(data)
            console.log(user)
            return true
        }
        catch(e){
            console.log(e)
            return false
        }
    }
}
