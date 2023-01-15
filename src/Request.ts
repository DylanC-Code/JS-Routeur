import { IncomingMessage } from "node:http";

export class Request {
  constructor(private req: IncomingMessage) {}
}
