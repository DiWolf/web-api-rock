import { IResolvers } from "graphql-tools";
import query from "./query";

//resolvers
const resolvers: IResolvers = {
  ...query,
};

export default resolvers;
