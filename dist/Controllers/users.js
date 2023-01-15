export const register = (req, res) => {
    console.log("register");
    res.end("hello");
};
export const middleware = (req, res, next) => {
    console.log("middleware");
    next();
};
export const middleware2 = (req, res, next) => {
    console.log("middleware2");
    next();
};
export const middleware3 = (req, res, next) => {
    console.log("middleware3");
    next();
};
export const middleware4 = (req, res, next) => {
    console.log("middleware4");
    next();
};
export const middleware5 = (req, res, next) => {
    console.log("middleware5");
    next();
};
//# sourceMappingURL=users.js.map