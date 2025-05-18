import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AppDto } from './dto/esc.dto';
import { UsePipes } from '@nestjs/common';
import { WSValidationPipe } from 'src/utils/wsPipeValid';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
// import { tableDataView } from 'src/utils/tableDataView';
import { ClientDto } from './dto/client.dto';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@WebSocketGateway({ cors: { origin: '*' } })
export class AppGateway {
  constructor(
    @InjectBot() private bot: Telegraf<Context>
  ) {}
  
  @WebSocketServer() server: Server;

  // @UseGuards(JwtAuthGuard)
  handleConnection(@ConnectedSocket() client: Socket) {
    console.log('connect', client.id);
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log('disconnect', client.id);
    client.disconnect(true);
  }

  @UsePipes(new WSValidationPipe())
  @SubscribeMessage('connect_start')
  connectStart(@ConnectedSocket() client: Socket, @MessageBody() payload: Pick<AppDto, 'id'>){
    console.log(payload)
    if(payload.id === '8C4F00E07B6D-00E07B6D'){
      client.emit('accesstoken', { accesstoken: payload.id })
    }
  }

  @UsePipes(new WSValidationPipe())
  @SubscribeMessage('badtoken')
  badToken(@ConnectedSocket() client: Socket, @MessageBody() payload: Pick<AppDto, 'status'>){
    console.log(payload)
  }

  @UsePipes(new WSValidationPipe())
  @SubscribeMessage('sensorinformation')
  deleteImage(@ConnectedSocket() client: Socket, @MessageBody() payload: Omit<AppDto, 'ff'>){
    console.log(payload)
    // await this.bot.telegram.sendMessage(599773731, tableDataView(payload))
    // client.emit('servo_move', { angle: 90 });
  }

  @UsePipes(new WSValidationPipe())
  @SubscribeMessage('authClient')
  authClient(@ConnectedSocket() client: Socket, @MessageBody() payload: Pick<ClientDto, 'authKey'>){
    console.log(payload)
    return {token: 'JE7FDS9788GGSG7SG7S9G'}
  }
}
