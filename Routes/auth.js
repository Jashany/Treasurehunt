import Express from "express";
import { login } from "../controllers/auth.js";
import { signup } from "../controllers/auth.js";

const authroute = Express.Router();

authroute.post("/login", login);
authroute.post("/signup", signup);

export default authroute;