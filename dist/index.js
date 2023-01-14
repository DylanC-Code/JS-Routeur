import * as dotenv from "dotenv";
import { Routeur } from "./Routeur.js";
import * as UsersControllers from "./Controllers/users.js";
dotenv.config({ path: "./.env" });
const app = new Routeur();
app.get("/users/register", UsersControllers.register);
app.post("/users/register", UsersControllers.register);
app.delete("/users/delete", UsersControllers.register);
app.put("/users/update", UsersControllers.register);
//# sourceMappingURL=index.js.map