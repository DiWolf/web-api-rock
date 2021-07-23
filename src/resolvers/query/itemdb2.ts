import { ITEMDB2_LIST_WEAPONS } from "./../../sql/SQL_ITEM_DB";
import { ITEMDB2_LIST } from "../../sql/SQL_ITEM_DB";
import { IResolvers } from "graphql-tools";

const resolverQueryItemDb2: IResolvers = {
  Query: {
    //OBTENER TODOS LOS ITEMS
    async getItemDb2(_, __, { sql }) {
      const sentencia = ITEMDB2_LIST;
      const item = Array(0);
      try {
        const [rows]: any[] = await sql.execute(sentencia);
        return rows;
      } catch (error: any) {
        throw new Error(error);
      }
    },

    //OBTENER ITEMS ARMAS
    async getItemWeapon(_, { type, view }, { sql }) {
      const sentencia = ITEMDB2_LIST_WEAPONS;

      const item = Array(0);
      try {
        const [rows]: [any] = await sql.execute(sentencia, [type, view]);
        return rows;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  },
};

export default resolverQueryItemDb2;
