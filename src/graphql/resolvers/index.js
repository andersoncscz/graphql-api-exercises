import { resolvers as users } from './users'
import { resolvers as profiles } from './profiles'
import { resolvers as products } from './products'

export const rootResolvers = {

    //Others Resolvers
    ...users.Others,
    ...profiles.Others,
    ...products.Others,

    //Queries Resolvers
    Query: {
        ...users.Query,
        ...profiles.Query,
        ...products.Query,
    },

    //Mutations Resolvers
    Mutation: {
        ...users.Mutation
    }    
}