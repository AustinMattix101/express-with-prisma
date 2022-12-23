import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const rootValue = { hello: () => 'Hello world!' };

const source = '{ hello }';

graphql({ schema, source, rootValue }).then((response) => {
  // tslint:disable-next-line:no-console
  console.log(response);
});