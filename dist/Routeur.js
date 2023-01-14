import { Route } from "./Route.js";
export class Routeur {
    routes = {};
    get(path, controller) {
        this.new(path, controller, "GET");
    }
    post(path, controller) {
        this.new(path, controller, "POST");
    }
    delete(path, controller) {
        this.new(path, controller, "DELETE");
    }
    put(path, controller) {
        this.new(path, controller, "PUT");
    }
    new(path, controller, method) {
        this.initialisezMethod(method);
        const route = new Route(path, controller);
        this.routes[method]?.push(route);
    }
    initialisezMethod(method) {
        const methodIsInitialised = Object.hasOwn(this.routes, method);
        if (!methodIsInitialised)
            this.routes[method] = [];
    }
}
//# sourceMappingURL=Routeur.js.map