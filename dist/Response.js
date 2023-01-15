export class Response {
    res;
    constructor(res) {
        this.res = res;
    }
    status(code) {
        this.res.statusCode = code;
        return this;
    }
    sendStatus(code) {
        this.res.statusCode = code;
        this.res.end();
    }
    json(content) {
        this.set("Content-Type", "application/json");
        this.res.end(JSON.stringify(content));
    }
    send(content) {
        this.setContentType(content);
        this.res.end();
    }
    setContentType(content) {
        const isBuffer = content instanceof Buffer;
        const isObject = typeof content === "object";
        if (isBuffer)
            this.set("Content-Type", "application/octet-stream");
        else if (isObject)
            this.set("Content-Type", "application/json");
        else
            this.set("Content-Type", "text/html");
    }
    set(name, value) {
        this.res.setHeader(name, value);
    }
}
//# sourceMappingURL=Response.js.map