export const register = (req, res) => {
    console.log("register");
    res.send({ error: "Pas bien" });
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
export const test = (req, res, next) => {
    res.sendStatus(400);
};
export const getUser = (req, res, next) => {
    res.sendStatus(200);
};
//# sourceMappingURL=users.js.map