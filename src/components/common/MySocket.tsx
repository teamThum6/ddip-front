import io, { Socket } from 'socket.io-client'

const isServer = typeof window === 'undefined'

class WebSocket {
  io: any | null = null

  constructor() {
    if (isServer) return

    this.io = io('http://13.239.29.240:8080', {
      transports: ['websocket'],
      withCredentials: true,
      reconnection: true,
      reconnectionDelay: 500,
    })
  }

  timer_in(event: string, roomName: any, userId: string) {
    this.io?.emit(event, roomName, userId)
  }

  timer_start(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.io?.on('timer_start', (targetTime: number) => {
        resolve(targetTime)
      })
    })
  }

  time_check(roomName: any, userTime: any, done: any) {
    this.io?.emit('time_check', roomName, userTime, done)
  }

  timer_ended(): Promise<[]> {
    return new Promise((resolve, reject) => {
      this.io?.on('timer_ended', (users: any) => {
        resolve(users)
      })
    })
  }
}

export default new WebSocket()
