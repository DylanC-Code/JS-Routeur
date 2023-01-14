import { Route } from "./Route.js";
import { Controller, Routes, HTTPMethod } from "./types.js";

export class Routeur {
  private routes: Routes = {};

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

  private new(path: string, controller: Controller, method: HTTPMethod) {
    this.initialisezMethod(method);

    const route = new Route(path, controller);
    this.routes[method]?.push(route);
  }

  private initialisezMethod(method: HTTPMethod) {
    const methodIsInitialised = Object.hasOwn(this.routes, method);
    if (!methodIsInitialised) this.routes[method] = [];
  }
}
