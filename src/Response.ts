import { ServerResponse } from "node:http";

export class Response {
  constructor(private res: ServerResponse) {}

  status(code: number) {
    this.res.statusCode = code;
    return this;
  }

  sendStatus(code: number) {
    this.res.statusCode = code;
    this.res.end();
  }

  json(content: object) {
    this.set("Content-Type", "application/json");
    this.res.end(JSON.stringify(content));
  }

  send(content: any) {
    const dataFormated = this.formatData(content);
    this.res.end(dataFormated);
  }

  formatData(content: any) {
    const isBuffer = content instanceof Buffer;
    const isObject = typeof content === "object";

    if (isBuffer) this.set("Content-Type", "application/octet-stream");
    else if (isObject) {
      this.set("Content-Type", "application/json");
      return JSON.stringify(content);
    } else this.set("Content-Type", "text/html");

    return content;
  }

  set(name: string, value: string) {
    this.res.setHeader(name, value);
  }
}
