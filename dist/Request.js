export class Request {
    req;
    route;
    path;
    params = {};
    constructor(req, route) {
        this.req = req;
        this.route = route;
        this.path = req.url;
        this.manageParams(route);
    }
    manageParams(url) {
        const wrongParams = this.extractWrongParams(url);
        const paramsName = url.match(/:([^/]+)/g)?.map((param) => param.slice(1));
        let params = this.path?.match(/([^/]+)/g);
        params = params.filter((param) => this.notInArray(wrongParams, param));
        if (paramsName)
            this.addParams(paramsName, params);
    }
    extractWrongParams = (url) => url.split("/").filter((group) => /^([\w_-]+)$/.test(group));
    notInArray = (array, toFind) => array.find((element) => element === toFind);
    addParams(paramsName, paramsValue) {
        paramsName.forEach((name, index) => (this.params[name] = paramsValue[index]));
    }
}
new Request({ url: "/users/42" }, "/users/:id/:name");
//# sourceMappingURL=Request.js.map