import gql from "graphql-tag";

const typeDefs = gql`
    type User {
        id:ID,
        userName:String,
        firstName:String,
        lastName:String,
        password:String
    }
    type Query {
        greetings:String,
        welcome (name:String!):String
        blogs:[BlogsDefinition]
        blog(id:ID):BlogsDefinition
    }
    #blogs object
    type BlogsDefinition {
        id: ID,
        author: String,
        header:String,
        body:String
    }
    #all mutations
    type Mutation{
        create(header:String,author:String,body:String):BlogsDefinition
        update(id:ID,header:String,author:String,body:String):BlogsDefinition
        delete(id:ID):BlogsDefinition
        login(userName:String!,password:String!):User
        signUp(
            firstName:String!,
            lastName:String!,
            userName:String!,
            password:String!
        ):User
    }
`
export {
    typeDefs
}