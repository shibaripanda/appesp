import { useEffect } from 'react'
import { SocketApt } from '../api/socket-api'

export const useConnectSocket = (token?: string) => {
  useEffect(() => {
    SocketApt.createConnections(token)
    console.log('createConnections')

    return () => {
      SocketApt.disconnectConnections()
    }
  }, [token])
}