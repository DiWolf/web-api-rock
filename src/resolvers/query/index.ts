const GMR  = require("@wiicamp/graphql-merge-resolvers");
import resolverQueryItemDb2 from "./itemdb2";

const mainResolver = GMR.merge([resolverQueryItemDb2]);

export default mainResolver;
