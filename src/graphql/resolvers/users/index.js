import { users, profiles } from '../../../data'
import { uniqueId } from 'lodash';

export const resolvers = {
    Others: {
        User: {
            salary: (user) => user.monthlySalary, //monthlySalary field resolved as 'salary'
            profile: (user) => profiles.find(p => p.id === user.profile_id) //resolve for profile type. That allow us to navigate into profile data
        },
    },

    Query: {
        user: (_, { id }) => users.find(user => user.id === id),
        users: () => users,
    },

    Mutation: {
        createUser: (_, { name, email }) => {
            const user = {
                id: uniqueId(),
                name,
                email,
                profile_id: '1',
                status: 'ACTIVE',
                profession: 'Software Engineer',
                monthlySalary: 6500
            }
            users.push(user)
            return user
        }        
    }
}