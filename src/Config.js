const queryString = require('query-string');
const query = queryString.parse(location.search);
export default class Config {
  static init() {
    Config.socket = query.ip || "127.0.0.1:3000";
    // Config.socket = query.ip || "192.168.11.171:3000";
  }
}
