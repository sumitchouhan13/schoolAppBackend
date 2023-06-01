import { app } from "./app.js";
import { connectToMongo } from "./data/database.js";

connectToMongo();

app.listen(process.env.PORT, () => {
  console.log("Server is working");
});
