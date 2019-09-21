import { profiles } from '../../../data'

export const resolvers = {
    Others: null,
    
    Query: {
        profile: (_, { id }) => profiles.find(p => p.id === id),
        profiles: () => profiles
    }
}