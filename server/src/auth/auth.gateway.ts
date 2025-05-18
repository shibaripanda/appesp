import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Inject, UsePipes } from '@nestjs/common';
import { WSValidationPipe } from 'src/utils/wsPipeValid';
import { AuthService } from './auth.service';
import { AuthClientDto } from './dto/authClient.dto';

@WebSocketGateway()
export class AuthGateway {

  constructor(
    @Inject() private authService: AuthService
  ){}

  @WebSocketServer() server: Server;

  @UsePipes(new WSValidationPipe())
  @SubscribeMessage('authClientTelegram')
  async authTelegramHash(client: Socket, payload: AuthClientDto): Promise<boolean> {
    console.log(payload)
    return await this.authService.authTelegramHash(payload)
  }
}
