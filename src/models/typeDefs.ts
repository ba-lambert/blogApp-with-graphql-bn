import gql from "graphql-tag";

const typeDefs = gql`
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
    #blogs mutations
    type Mutation{
        create(header:String,author:String,body:String):BlogsDefinition
        update(id:ID,header:String,author:String,body:String):BlogsDefinition
        delete(id:ID):BlogsDefinition
    }
`
export {
    typeDefs
}