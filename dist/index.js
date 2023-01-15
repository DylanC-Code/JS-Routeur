import * as dotenv from "dotenv";
import { Routeur } from "./Routeur.js";
import * as UsersControllers from "./Controllers/users.js";
dotenv.config({ path: "./.env" });
const app = new Routeur({ port: process.env.PORT, protocol: "HTTP" });
app.get("/users/register", UsersControllers.middleware, UsersControllers.middleware2, UsersControllers.middleware3, UsersControllers.middleware4, UsersControllers.middleware5, UsersControllers.register);
app.get("/users/test", UsersControllers.test);
app.post("/users/register", UsersControllers.register);
app.delete("/users/delete", UsersControllers.register);
app.post("/users/:name", UsersControllers.getUser);
app.run(() => console.log("Server Listening on PORT :", process.env.PORT));
//# sourceMappingURL=index.js.map