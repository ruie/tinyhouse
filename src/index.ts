require('dotenv').config();
import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';
import { connectDB } from './database';

const port = 9090;

const mount = async (app: Application) => {
  const db = await connectDB();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db })
  });

  server.applyMiddleware({ app, path: '/api' });

  app.listen(process.env.PORT, () =>
    console.log(`Server running at ${process.env.PORT}`)
  );
};

mount(express());
