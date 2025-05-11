import { sendToSocket } from "../unity/socket/pipSendSocket"

export class AppClass {
    link: string | undefined

    constructor(){
        this.link = import.meta.env.VITE_LINK_SERVER
    }

    authClientRequest(key: string, setToken: any){
        sendToSocket('authClient', {authKey: key}, (res: any) => setToken(res.token))
    }

}