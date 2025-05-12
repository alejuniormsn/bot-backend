import axios from "axios";
import { resp } from "../utils/messages/resp";
import { env } from "../environment/variables";

class escalaService {
  async getEscala(chapa: string) {
    try {
      const res = await axios.get(
        `${env.BASE_URL_API_GLOBUS}/consulta-escala/${chapa}`
      );
      return resp(200, res.data);
    } catch (error: any) {
      throw new Error(`Failed to get Scale: ${error.message}`);
    }
  }
}

export default escalaService;
