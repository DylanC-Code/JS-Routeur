import * as dotenv from "dotenv";
import { Routeur } from "./Routeur.js";
import * as UsersControllers from "./Controllers/users.js";
import { Server } from "./Server.js";

dotenv.config({ path: "./.env" });

const app = new Routeur({ port: process.env.PORT, protocol: "HTTP" });

app.get(
  "/users/register",
  // () => console.log("holla"),
  UsersControllers.register
);
app.get("/users/test", UsersControllers.register);
app.post("/users/register", UsersControllers.register);
app.delete("/users/delete", UsersControllers.register);
app.put("/users/update", UsersControllers.register);

app.run(() => console.log("Server Listening on PORT :", process.env.PORT));
