export class Client {
    /**
     * @param {import('../index.js').NodeWS | InstanceType<typeof import('ws').WebSocket> | Client} ws
     */
    constructor(ws: import('../index.js').NodeWS | InstanceType<typeof import('ws').WebSocket> | Client);
    ws: any;
    /**
     * @type { string }
     */
    id: string;
    closed: boolean;
    send(...args: any[]): this;
    close(): this;
}
