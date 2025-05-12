import { Request, Response } from "express";
import { messages } from "../utils/messages/message";
import escalaService from "../services/escalaService";

class escalaController {
  private service = new escalaService();

  async getEscala(req: Request, res: Response) {
    try {
      const { chapa } = req.params;
      const { status, message } = await this.service.getEscala(String(chapa));
      res.status(status).json(messages(status, message));
    } catch (error) {
      res.status(404).json(messages(404, { error: "Escala Not Found" }));
    }
  }
}
export default escalaController;
