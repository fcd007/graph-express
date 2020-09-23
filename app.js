const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

const MessageSchema = buildSchema(`
    type Query{
        message: String
        name: String
        age: Int
    }
`);

const schemaRoot = {
  message: () => "Hello from graphQL",
  name: () => "Claudeilton Dantas",
  age: () => 30.0,
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MessageSchema,
    rootValue: schemaRoot,
    graphiql: true,
  })
);

app.listen(3000, () => console.log("running porta 3000"));
