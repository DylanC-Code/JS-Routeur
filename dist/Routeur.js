import { Route } from "./Route.js";
import { Server } from "./Server.js";
export class Routeur {
    configs;
    routes = {};
    constructor(configs) {
        this.configs = configs;
    }
    get(path, ...controllers) {
        this.new(path, controllers, "GET");
    }
    post(path, ...controllers) {
        this.new(path, controllers, "POST");
    }
    delete(path, ...controllers) {
        this.new(path, controllers, "DELETE");
    }
    put(path, ...controllers) {
        this.new(path, controllers, "PUT");
    }
    new(path, controllers, method) {
        this.initialisezMethod(method);
        const route = new Route(path, controllers);
        this.routes[method]?.push(route);
    }
    initialisezMethod(method) {
        const methodIsInitialised = Object.hasOwn(this.routes, method);
        if (!methodIsInitialised)
            this.routes[method] = [];
    }
    run(callback) {
        const server = new Server(this.configs, this.routes);
        server.listen(callback);
    }
}
//# sourceMappingURL=Routeur.js.map