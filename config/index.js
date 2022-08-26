import { w3cwebsocket as W3CWebSocket } from "websocket";

export const client = new W3CWebSocket(`wss://${process.env.NEXT_PUBLIC_BASE_URL}`);