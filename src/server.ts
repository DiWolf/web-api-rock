//configuración de variables de entorno
import * as dotenv from "dotenv";
const path = "src/config/.env";
dotenv.config({ path });
//Configuraciones de Apollo Server
import { ApolloServer } from "apollo-server";
import sql from "./config/mysql.persistence";
//activar playground local
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import schema from "./schema";

server();

function server() {
  //creamos el servidor apollo
  const serverApollo = new ApolloServer({
    schema,
    //puedes remover esto cuando vayas a pasar a producción
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
    context: async () => {
      return {
        sql,
      };
    },
  });

  serverApollo.listen(process.env.PORT).then((url) => {
    console.log(`Conexión exitosa: ${url.url}`);
  });
}
