export class Route {
    path;
    controller;
    constructor(path, controller) {
        this.path = path;
        this.controller = controller;
    }
    match(url) {
        url = this.trimSlash(url);
        let path = this.path.replace(/:([\w]+)/, "([^/]+)");
        const regex = new RegExp(path);
        const urlMatch = regex.test(url);
        if (urlMatch)
            this.run();
    }
    trimSlash(url) {
        let urlTrimed = url;
        if (url.at(0) === "/")
            urlTrimed = urlTrimed.slice(1);
        if (url.at(-1) === "/")
            urlTrimed = urlTrimed.slice(0, -1);
        return urlTrimed;
    }
    run() { }
}
//# sourceMappingURL=Route.js.map