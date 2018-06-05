const queryString = require('query-string');
const query = queryString.parse(location.search);
export default class Util {
  static init() {
    Util.socket = query.ip || "192.168.11.91";
  }
}
