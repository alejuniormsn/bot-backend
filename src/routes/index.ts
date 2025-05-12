import { Router } from "express";
import rhRouter from "./rhRouter";
import loginRouter from "./loginRouter";
import escalaRouter from "./escalaRouter";

const router = Router();

router.use(rhRouter);
router.use(loginRouter);
router.use(escalaRouter);

export default router;
