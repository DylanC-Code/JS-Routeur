import { createServer as createServerHTTP, } from "node:http";
import * as https from "node:https";
export class Server {
    config;
    routes;
    server;
    constructor(config, routes) {
        this.config = config;
        this.routes = routes;
        this.createServer();
    }
    createServer() {
        const isHTTP = this.config.protocol === "HTTP";
        if (isHTTP)
            this.server = createServerHTTP;
        else
            this.server = https.createServer;
        this.serveRoad();
    }
    serveRoad() {
        this.server = this.server((req, res) => {
            if (typeof req.method !== "string" || typeof req.url !== "string")
                return;
            const route = this.findRoad(req.method, req.url);
            route?.run(req, res);
        });
    }
    findRoad(method, url) {
        const hasMethod = Object.hasOwn(this.routes, method);
        if (!hasMethod)
            return;
        const routes = this.routes[method];
        return routes?.find((route) => route.match(url));
    }
    listen(callback) {
        this.server.listen(this.config.port);
        if (callback)
            callback();
    }
}
//# sourceMappingURL=Server.js.map