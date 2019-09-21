import { users } from '../../../data'
import { uniqueId } from 'lodash';

export const resolvers = {
    createUser: (_, { name, email }) => {
        const user = {
            id: uniqueId(),
            name,
            email,
            profile_id: 1,
            status: 'ACTIVE',
            profession: 'Software Engineer',
            monthlySalary: 6500
        }
        users.push(user)
    }
}