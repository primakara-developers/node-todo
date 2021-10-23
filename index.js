const AppLoader = require("./loaders/app");

const app = new AppLoader({ port: 3000 });
app.start();
