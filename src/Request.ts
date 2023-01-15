import { IncomingMessage } from "node:http";
import { Route } from "./Route";

export class Request {
  path;
  params: { [key: string]: string } = {};
  constructor(private req: any, private route: string) {
    this.path = req.url;
    this.manageParams(route);
  }

  private manageParams(url: string) {
    const wrongParams = this.extractWrongParams(url);
    const paramsName = url.match(/:([^/]+)/g)?.map((param) => param.slice(1));

    let params = this.path?.match(/([^/]+)/g);
    params = params.filter((param: string) =>
      this.notInArray(wrongParams, param)
    );

    if (paramsName) this.addParams(paramsName, params);
  }

  private extractWrongParams = (url: string) =>
    url.split("/").filter((group: string) => /^([\w_-]+)$/.test(group));

  private notInArray = (array: string[], toFind: string) =>
    array.find((element) => element === toFind);

  private addParams(paramsName: string[], paramsValue: string[]) {
    paramsName.forEach(
      (name, index) => (this.params[name] = paramsValue[index])
    );
  }
}

new Request({ url: "/users/42" }, "/users/:id/:name");
