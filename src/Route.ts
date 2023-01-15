import { Response } from "./Response.js";
import { Controller } from "./types";
import { IncomingMessage } from "node:http";

export class Route {
  private req: IncomingMessage | undefined;
  private res: Response | undefined;

  constructor(private path: string, private callables: Controller[]) {
    this.path = this.trimSlash(path);
    this.callables = callables;
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

  public run(req: IncomingMessage, res: Response) {
    this.req = req;
    this.res = res;
    this.next();
  }

  private next() {
    if (!this.req || !this.res) return;

    const nextBinded = this.next.bind(this);
    const callable = this.callables.shift();

    if (callable) callable(this.req, this.res, nextBinded);
  }
}
