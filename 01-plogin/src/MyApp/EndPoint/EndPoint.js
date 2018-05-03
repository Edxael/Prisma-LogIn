import ApolloClient from "apollo-boost"
 
const client = new ApolloClient({ uri: "https://us1.prisma.sh/public-ripplehoof-923/myplogin/dev" })
 
export { client }