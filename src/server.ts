import express from 'express';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import { resolvers } from './resolvers';
import { typeDefs } from './models/typeDefs';

const mongoUrl = 'mongodb+srv://admin:QccKEqI85NyX6FhC@crud.ftmm9en.mongodb.net/blog?retryWrites=true&w=majority'
mongoose.connect(mongoUrl).then(() => {
    console.log(`Db Connected successfuly`);
  })
  .catch(err => {
    console.log(err.message);
  });
const port:number = 3000
const server = new ApolloServer({typeDefs,resolvers})
startStandaloneServer(server,{
    listen:{port:port}
}).then(({url})=>{
    console.log(`server is ready at ${url}`);
    
})