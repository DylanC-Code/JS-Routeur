import { IncomingMessage, ServerResponse } from "http";
import { Route } from "./Route.js";

export type Controller = (
  req: IncomingMessage,
  res: ServerResponse,
  next?: any
) => void;

export interface Routes {
  GET?: Route[];
  POST?: Route[];
  DELETE?: Route[];
  PUT?: Route[];
}

export interface ServerConfig {
  protocol: "HTTP" | "HTTPS";
  port: `${number}${number}${number}${number}${number | ""}` | any;
}
