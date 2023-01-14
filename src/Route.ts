import { Controller } from "./types";

export class Route {
  constructor(private path: string, private controller: Controller) {}

  public match(url: string) {
    url = this.trimSlash(url);

    let path = this.path.replace(/:([\w]+)/, "([^/]+)");
    const regex = new RegExp(path);

    const urlMatch = regex.test(url);

    if (urlMatch) this.run();
  }

  private trimSlash(url: string) {
    let urlTrimed: string = url;

    if (url.at(0) === "/") urlTrimed = urlTrimed.slice(1);
    if (url.at(-1) === "/") urlTrimed = urlTrimed.slice(0, -1);

    return urlTrimed;
  }

  private run() {}
}
