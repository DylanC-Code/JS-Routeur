export class Route {
    path;
    callable;
    next;
    constructor(path, callable) {
        this.path = path;
        this.callable = callable;
        this.path = this.trimSlash(path);
        this.next = arguments;
        console.log(this.next);
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
    run(req, res, next) {
        this.callable(req, res, next);
    }
}
//# sourceMappingURL=Route.js.map