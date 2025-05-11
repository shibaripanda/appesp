import { io, Socket } from 'socket.io-client'

export class SocketApt {
  static socket: Socket | null = null

  static createConnections(token?: string): void {
    const options: any = {
      auth: {}
    }
    
    if (token) {
      options.auth.token = 'Bearer ' + token
    }

    this.socket = io(import.meta.env.VITE_LINK_SERVER, options)

    this.socket.on('connect', () => {
      console.log('Connected to server')
    })

    this.socket.on('message', (data) => {
      console.log('Received:', data)
    })

    this.socket.on('disconnect', () => {
      console.log('Disconnected from server')
    })
  }

  static disconnectConnections(): void {
    this.socket?.disconnect()
  }
}