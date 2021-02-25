import socketClient from 'socket.io-client';
const SERVER = "http://localhost:3001";

const socket = socketClient(SERVER);
export default socket;