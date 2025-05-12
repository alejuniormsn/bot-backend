import axios from "axios";
import { sing } from "../jwt/jwt";
import { resp } from "../utils/messages/resp";
import { env } from "../environment/variables";

interface ILogin {
  phoneNumber: number;
}

interface IUser {
  id: string;
  chapa: string;
  nome_func: string;
  nome_mae: string;
  telefone: string;
  cpf: string;
  email: string;
}

class UserService {
  async login(user: ILogin) {
    try {
      const res = await axios.get(
        `${env.BASE_URL_API_GLOBUS}/fonefunc/${user.phoneNumber}`
      );
      if (Array.isArray(res.data) && res.data.length > 0) {
        const result: IUser = res.data[0];
        const { chapa, nome_func } = result;
        const jwt = sing({ chapa, nome_func });
        return resp(200, { ...result, token: jwt });
      } else {
        return resp(404, "not found");
      }
    } catch (error: any) {
      throw new Error(`Failed to login: ${error.message}`);
    }
  }
}

export default UserService;
