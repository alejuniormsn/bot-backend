import { Router } from "express";
import { verifyToken } from "../jwt/jwt";
import rhController from "../controllers/rhController";

const control = new rhController();

const rhRouter = Router();

rhRouter.get("/holerite", verifyToken, control.getHolerite.bind(control));
rhRouter.post(
  "/import-holerite",
  verifyToken,
  control.postImportHolerite.bind(control)
);

rhRouter.get("/manager", verifyToken, control.getManager.bind(control));
rhRouter.post("/manager", verifyToken, control.postManager.bind(control));
rhRouter.put("/manager/:id", verifyToken, control.putManager.bind(control));

rhRouter.get("/question", verifyToken, control.getQuestion.bind(control));
rhRouter.post("/question", verifyToken, control.postQuestion.bind(control));
rhRouter.put("/question/:id", verifyToken, control.putQuestion.bind(control));

rhRouter.get(
  "/employee-form",
  verifyToken,
  control.getEmployeeForm.bind(control)
);
rhRouter.post(
  "/employee-form",
  verifyToken,
  control.postEmployeeForm.bind(control)
);
rhRouter.put(
  "/employee-form/:id",
  verifyToken,
  control.putEmployeeForm.bind(control)
);

export default rhRouter;
