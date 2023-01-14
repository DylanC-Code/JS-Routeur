export class Routeur {
    routes = {};
    get(uri, controller) {
        this.new(uri, controller, "GET");
    }
    post(uri, controller) {
        this.new(uri, controller, "POST");
    }
    delete(uri, controller) {
        this.new(uri, controller, "DELETE");
    }
    put(uri, controller) {
        this.new(uri, controller, "PUT");
    }
    new(uri, controller, method) {
        this.initialisezMethod(method);
        this.routes[method]?.push({ uri, controller });
    }
    initialisezMethod(method) {
        const methodIsInitialised = Object.hasOwn(this.routes, "GET");
        if (!methodIsInitialised)
            this.routes.GET = [];
    }
}
//# sourceMappingURL=Routeur.js.map