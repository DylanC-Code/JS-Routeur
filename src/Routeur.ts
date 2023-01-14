import * as UsersControllers from "./Controllers/users.js";
import { Controller, Routes, HTTPMethod } from "./types.js";

export class Routeur {
  private routes: Routes = {};

  get(uri: string, controller: Controller) {
    this.new(uri, controller, "GET");
  }
  post(uri: string, controller: Controller) {
    this.new(uri, controller, "POST");
  }
  delete(uri: string, controller: Controller) {
    this.new(uri, controller, "DELETE");
  }
  put(uri: string, controller: Controller) {
    this.new(uri, controller, "PUT");
  }

  private new(uri: string, controller: Controller, method: HTTPMethod) {
    this.initialisezMethod(method);
    this.routes[method]?.push({ uri, controller });
  }

  private initialisezMethod(method: HTTPMethod) {
    const methodIsInitialised = Object.hasOwn(this.routes, "GET");
    if (!methodIsInitialised) this.routes.GET = [];
  }
}