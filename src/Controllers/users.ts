import { Controller } from "../types";

export const register: Controller = (req, res) => {
  console.log("register");
  res.send({ error: "Pas bien" });
};
export const middleware: Controller = (req, res, next) => {
  console.log("middleware");
  next();
};
export const middleware2: Controller = (req, res, next) => {
  console.log("middleware2");
  next();
};
export const middleware3: Controller = (req, res, next) => {
  console.log("middleware3");
  next();
};
export const middleware4: Controller = (req, res, next) => {
  console.log("middleware4");
  next();
};
export const middleware5: Controller = (req, res, next) => {
  console.log("middleware5");
  next();
};
export const test: Controller = (req, res, next) => {
  res.sendStatus(400);
};

export const getUser: Controller = (req, res, next) => {
  res.sendStatus(200);
};
