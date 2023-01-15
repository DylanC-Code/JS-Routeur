import { Route } from "./Route.js";
import { Server } from "./Server.js";
import { Controller, Routes, ServerConfig } from "./types.js";

export class Routeur {
  private routes: Routes = {};
  constructor(private configs: ServerConfig) {}

  get(path: string, ...controllers: Controller[]) {
    this.new(path, controllers, "GET");
  }
  post(path: string, ...controllers: Controller[]) {
    this.new(path, controllers, "POST");
  }
  delete(path: string, ...controllers: Controller[]) {
    this.new(path, controllers, "DELETE");
  }
  put(path: string, ...controllers: Controller[]) {
    this.new(path, controllers, "PUT");
  }

  private new(path: string, controllers: Controller[], method: string) {
    this.initialisezMethod(method);

    const route = new Route(path, controllers);
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
