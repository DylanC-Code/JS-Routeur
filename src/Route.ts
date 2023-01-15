import { Controller } from "./types";
import { IncomingMessage, ServerResponse } from "node:http";

export class Route {
  private next;
  constructor(private path: string, private callable: Controller) {
    this.path = this.trimSlash(path);
    this.next = arguments;
    console.log(this.next);
  }

  public match(url: string) {
    url = this.trimSlash(url);

    let path = this.path.replace(/:([\w]+)/, "([^/]+)");
    const regex = new RegExp(path, "i");

    const urlMatch = regex.test(url);
    if (urlMatch) return true;
  }

  private trimSlash(url: string) {
    let urlTrimed: string = url;

    if (url.at(0) === "/") urlTrimed = urlTrimed.slice(1);
    if (url.at(-1) === "/") urlTrimed = urlTrimed.slice(0, -1);

    return urlTrimed;
  }

  public run(req: IncomingMessage, res: ServerResponse, next?: Function) {
    this.callable(req, res, next);
  }
}
