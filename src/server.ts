import app from "./app";
import ip from "ip";
import { env } from "./environment/variables";

const PORT = env.PORT || 3003;

app.listen(PORT, () =>
  console.log(
    `\nBackend em Node - Bot ETT\nHttp Server Running on IP Address = ${ip.address()}:${PORT} \nTo stop use Control + C\n`
  )
);
