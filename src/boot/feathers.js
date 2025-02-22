import { feathers } from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

console.log('Boot: Feathers initializing')
const socket = io('http://localhost:3030')
const feathersClient = feathers()

feathersClient.configure(socketio(socket))

export default feathersClient  // exporting as feathersClient

