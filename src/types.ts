import { IncomingMessage, ServerResponse } from "http";

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

export type Route = { uri: string; controller: Controller };

export type HTTPMethod = "GET" | "POST" | "DELETE" | "PUT";
