import { users, profiles } from '../../../data'
import { uniqueId } from 'lodash';

export const resolvers = {
    Others: {
        User: {
            salary: (user) => user.monthlySalary, //monthlySalary field resolved as 'salary'
            profile: (user) => profiles.find(p => p.id === user.profileId) //resolve for profile type. That allow us to navigate into profile data
        },
    },

    Query: {
        user: (_, { data: user }) => {
            return user.id
                ? users.find(u => u.id === user.id)
                : users.find(u => u.email === user.email)
        },
        users: () => users,
    },

    Mutation: {
        createUser: (_, { data }) => {
            const user = {
                id: uniqueId(),
                ...data
            }
            users.push(user)
            return user
        },

        updateUser: (_, { data: user }) => {
            if (user.id) {
                const index = users.findIndex(u => u.id === user.id) 
                if (index >= 0) {
                    users[index] = user
                    return user
                }
                throw new Error("User Not found")
            }
            
            throw new Error("The field 'ID' wasn't provided")
        },

        deleteUser: (_, { data: user }) => {
            const index = user.id 
                ? users.findIndex(u => u.id === user.id)
                : users.findIndex(u => u.email === user.email)
            
            if (index >= 0) {
                const deleted = users.splice(index, 1)
                return deleted[0]
            }
        }
    }
}