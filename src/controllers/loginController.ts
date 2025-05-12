import { Request, Response } from "express";
import { messages } from "../utils/messages/message";
import LoginService from "../services/loginService";
import { login } from "./validations/schema";

class LoginController {
  private service = new LoginService();

  async postLogin(req: Request, res: Response) {
    try {
      const { error } = login.validate(req.body);
      if (error) {
        return res.status(400).json(messages(400, { error: error.message }));
      }
      const { status, message } = await this.service.login(req.body);
      res.status(status).json(messages(status, message));
    } catch (error) {
      res.status(401).json(messages(401, { error: "Invalid Credentials" }));
    }
  }
}
export default LoginController;
