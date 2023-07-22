import express, { Request } from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers';
import { typeDefs } from './models/typeDefs';
import dotenv from 'dotenv';

dotenv.config();
const dbUrl:any = process.env.MONGO_URL
mongoose.connect(dbUrl).then(() => {
  console.log('DB Connected successfully');
}).catch(err => {
  console.error('Error connecting to the database:', err.message);
});

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: { req: Request }) => ({ req }), // Explicitly specify the type for req
});

async function startServer() {
  await server.start();

  server.applyMiddleware({ app });

  const port: number = 3000;

  app.listen(port, () => {
    console.log(`Server is ready at http://localhost:${port}${server.graphqlPath}`);
  });
}

startServer().catch(err => {
  console.error('Error starting the server:', err.message);
});