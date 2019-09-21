// ****************** Fake data returned from database ******************
import { uniqueId } from 'lodash';

export const users = [
    { 
        id: uniqueId(),
        profile_id: '1',
        status: 'ACTIVE',
        name: 'Anderson Cruz',
        email: 'andersoncscz@hotmail.com',
        profession: 'Full Stack Developer',
        monthlySalary: 8500 //This field in our database might be different from our schema, if so, we need to resolve it.
    },
    { 
        id: uniqueId(),
        profile_id: '2',
        status: 'BLOCKED',
        name: 'Patricia Aguiar',
        email: 'patriciaaguiar@hotmail.com',
        profession: 'Social Worker Specialist',
        monthlySalary: 9500
    },
    { 
        id: uniqueId(),
        profile_id: '3',
        status: 'INACTIVE',
        name: 'Alex Cruz',
        email: 'alexcruz@hotmail.com',
        profession: 'Commercial Manager',
        monthlySalary: 7500
    },
]

export const profiles = [
    {
        id: '1',
        name: 'Owner',
    },
    {
        id: '2',
        name: 'Admin',
    },
    {
        id: '3',
        name: 'Client',
    }        
]


export const products = [
    {
        id: '1',
        name: 'Coca-Cola',
        price: 3,
        discountPercentage: 5,
    },
    {
        id: '2',
        name: 'Orange Juice',
        price: 6,
        discountPercentage: 4,
    },
    {
        id: '3',
        name: 'Lime Juice',
        price: 7,
        discountPercentage: 3,
    },
    {
        id: '4',
        name: 'Grape Juice',
        price: 3,
        discountPercentage: 5,
    }, 
    {
        id: '5',
        name: 'Grape Juice',
        price: 3,
        discountPercentage: undefined,
    },                
]