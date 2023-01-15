export class Route {
    path;
    callables;
    req;
    res;
    constructor(path, callables) {
        this.path = path;
        this.callables = callables;
        this.path = this.trimSlash(path);
        this.callables = callables;
    }
    match(url) {
        url = this.trimSlash(url);
        let path = this.path.replace(/:([\w]+)/, "([^/]+)");
        const regex = new RegExp(path, "i");
        const urlMatch = regex.test(url);
        if (urlMatch)
            return true;
    }
    trimSlash(url) {
        let urlTrimed = url;
        if (url.at(0) === "/")
            urlTrimed = urlTrimed.slice(1);
        if (url.at(-1) === "/")
            urlTrimed = urlTrimed.slice(0, -1);
        return urlTrimed;
    }
    run(req, res) {
        this.req = req;
        this.res = res;
        this.next();
    }
    next() {
        if (!this.req || !this.res)
            return;
        const nextBinded = this.next.bind(this);
        const callable = this.callables.shift();
        if (callable)
            callable(this.req, this.res, nextBinded);
    }
}
//# sourceMappingURL=Route.js.map