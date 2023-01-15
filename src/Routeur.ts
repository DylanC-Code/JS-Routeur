import { Route } from "./Route.js";
import { Server } from "./Server.js";
import { Controller, Routes, ServerConfig } from "./types.js";

export class Routeur {
  private routes: Routes = {};
  constructor(private configs: ServerConfig) {}

  get(path: string, controller: Controller) {
    this.new(path, controller, "GET");
  }
  post(path: string, controller: Controller) {
    this.new(path, controller, "POST");
  }
  delete(path: string, controller: Controller) {
    this.new(path, controller, "DELETE");
  }
  put(path: string, controller: Controller) {
    this.new(path, controller, "PUT");
  }

  private new(path: string, controller: Controller, method: string) {
    this.initialisezMethod(method);

    const route = new Route(path, controller);
    this.routes[method as keyof Routes]?.push(route);
  }

  private initialisezMethod(method: string) {
    const methodIsInitialised = Object.hasOwn(this.routes, method);
    if (!methodIsInitialised) this.routes[method as keyof Routes] = [];
  }

  public run(callback?: Function) {
    const server = new Server(this.configs, this.routes);
    server.listen(callback);
  }
}
