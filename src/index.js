const app = require("./app");

app.listen(app.get("port"), () => {
  console.log(`Server is up on port ${app.get("port")}`);
});
