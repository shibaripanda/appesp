import { sendToSocket } from "../unity/socket/pipSendSocket"
import { LoginButton } from "@telegram-auth/react"

export class AppClass {
    link: string | undefined

    constructor(){
        this.link = import.meta.env.VITE_LINK_SERVER
    }

    authClientRequest(key: string, setToken: any){
        sendToSocket('authClient', {authKey: key}, (res: any) => setToken(res.token))
    }

    telegramLoginAuthClientRequest(){
        return (
        <div className="App">
            <LoginButton
                botUsername={import.meta.env.VITE_BOT_USERNAME || ''}
                onAuthCallback={(data) => {
                    console.log(data)
                    sendToSocket('authClientTelegram', data, (res: any) => {console.log(res)})
                }}
            />
        </div>
    )
    }

}