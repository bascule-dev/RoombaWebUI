import Config from "./Config"

export default class Socket {
  constructor() {
    console.log("[Socket] init", Config.socket);
    this.ws = new WebSocket(`ws://${Config.socket}/websocket`);
    this.wsOpen = false;

    this.ws.onopen = () => {
      console.log("connected");
      this.wsOpen = true;
    };

    this.ws.onclose = () => {
      this.wsOpen = false;
    };
  }

  emit(x, y, scale) {
    if (!this.wsOpen)
      return;
    console.log("[Socket] scale" , scale);
    x *= scale;
    y *= scale;
    this.ws.send(JSON.stringify({
      type: 'moveToward',
      data: {x: -y / 100, y: -x / 100}
    }));
  }
}

