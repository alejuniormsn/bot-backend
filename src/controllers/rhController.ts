import { Request, Response } from "express";
import { messages } from "../utils/messages/message";
import rhService from "../services/rhService";
import {
  employeeForm,
  importHolerite,
  manager,
  question,
} from "./validations/schema";

class rhController {
  private service = new rhService();

  async getHolerite(req: Request, res: Response) {
    try {
      const { chapa, dataComp } = req.query;
      const { status, message } = await this.service.getHolerite(
        String(chapa),
        String(dataComp)
      );
      res.status(status).json(messages(status, message));
    } catch (error) {
      res.status(404).json(messages(404, { error: "User Not Found" }));
    }
  }

  async postImportHolerite(req: Request, res: Response) {
    try {
      const { error } = importHolerite.validate(req.body);
      if (error) {
        return res.status(400).json(messages(400, { error: error.message }));
      }
      const { status, message } = await this.service.postImportHolerite(
        req.body
      );
      res.status(status).json(messages(status, message));
    } catch (error: any) {
      res.status(400).json(messages(400, { error: error.message }));
    }
  }

  async getManager(req: Request, res: Response) {
    try {
      const { chapa } = req.query;
      const { status, message } = await this.service.getManager(String(chapa));
      res.status(status).json(messages(status, message));
    } catch (error) {
      res.status(404).json(messages(404, { error: "User Not Found" }));
    }
  }

  async postManager(req: Request, res: Response) {
    try {
      const { error } = manager.validate(req.body);
      if (error) {
        return res.status(400).json(messages(400, { error: error.message }));
      }
      const { status, message } = await this.service.postManager(req.body);
      res.status(status).json(messages(status, message));
    } catch (error: any) {
      res.status(400).json(messages(400, { error: error.message }));
    }
  }

  async putManager(req: Request, res: Response) {
    try {
      const { error } = manager.validate(req.body);
      if (error) {
        return res.status(400).json(messages(400, { error: error.message }));
      }
      const { id } = req.params;
      const { status, message } = await this.service.putManager(
        req.body,
        Number(id)
      );
      res.status(status).json(messages(status, message));
    } catch (error: any) {
      res.status(400).json(messages(400, { error: error.message }));
    }
  }

  async getQuestion(req: Request, res: Response) {
    try {
      const { id } = req.query;
      const { status, message } = await this.service.getQuestion(String(id));
      res.status(status).json(messages(status, message));
    } catch (error) {
      res.status(404).json(messages(404, { error: "Question Not Found" }));
    }
  }

  async postQuestion(req: Request, res: Response) {
    try {
      const { error } = question.validate(req.body);
      if (error) {
        return res.status(400).json(messages(400, { error: error.message }));
      }
      const { status, message } = await this.service.postQuestion(req.body);
      res.status(status).json(messages(status, message));
    } catch (error: any) {
      res.status(400).json(messages(400, { error: error.message }));
    }
  }

  async putQuestion(req: Request, res: Response) {
    try {
      const { error } = question.validate(req.body);
      if (error) {
        return res.status(400).json(messages(400, { error: error.message }));
      }
      const { id } = req.params;
      const { status, message } = await this.service.putQuestion(
        req.body,
        String(id)
      );
      res.status(status).json(messages(status, message));
    } catch (error: any) {
      res.status(400).json(messages(400, { error: error.message }));
    }
  }

  async getEmployeeForm(req: Request, res: Response) {
    try {
      const { chapa, period } = req.query;
      const { status, message } = await this.service.getEmployeeForm(
        String(chapa),
        Number(period)
      );
      res.status(status).json(messages(status, message));
    } catch (error) {
      res.status(404).json(messages(404, { error: "EmployeeForm Not Found" }));
    }
  }

  async postEmployeeForm(req: Request, res: Response) {
    try {
      const { error } = employeeForm.validate(req.body);
      if (error) {
        return res.status(400).json(messages(400, { error: error.message }));
      }
      const { status, message } = await this.service.postEmployeeForm(req.body);
      res.status(status).json(messages(status, message));
    } catch (error: any) {
      res.status(400).json(messages(400, { error: error.message }));
    }
  }

  async putEmployeeForm(req: Request, res: Response) {
    try {
      const { error } = employeeForm.validate(req.body);
      if (error) {
        return res.status(400).json(messages(400, { error: error.message }));
      }
      const { id } = req.params;
      const { status, message } = await this.service.putEmployeeForm(
        req.body,
        String(id)
      );
      res.status(status).json(messages(status, message));
    } catch (error: any) {
      res.status(400).json(messages(400, { error: error.message }));
    }
  }
}
export default rhController;
