const express = require("express");
const router = require("../routers");

class AppLoader {
  constructor({ port = 3000 } = {}) {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(router);
    this.port = port;
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server run at port ${this.port}`);
    });
  }
}

module.exports = AppLoader;
