import { Routes, ServerConfig } from "./types.js";
import {
  IncomingMessage,
  ServerResponse,
  createServer as createServerHTTP,
} from "node:http";
import * as https from "node:https";
import { Response } from "./Response.js";

export class Server {
  private server: any;
  constructor(private config: ServerConfig, private routes: Routes) {
    this.createServer();
  }

  private createServer() {
    const isHTTP = this.config.protocol === "HTTP";

    if (isHTTP) this.server = createServerHTTP;
    else this.server = https.createServer;

    this.serveRoad();
  }

  private serveRoad() {
    this.server = this.server((req: IncomingMessage, res: ServerResponse) => {
      if (typeof req.method !== "string" || typeof req.url !== "string") return;
      const response = new Response(res);

      const route = this.findRoad(req.method, req.url);
      route?.run(req, response);
    });
  }

  private findRoad(method: string, url: string) {
    const hasMethod = Object.hasOwn(this.routes, method);
    if (!hasMethod) return;

    const routes = this.routes[method as keyof Routes];
    return routes?.find((route) => route.match(url));
  }

  listen(callback?: Function) {
    this.server.listen(this.config.port);
    if (callback) callback();
  }
}
