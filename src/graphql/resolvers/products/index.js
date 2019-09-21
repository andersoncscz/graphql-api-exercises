import { products } from '../../../data'

export const resolvers = {

    Others: {
        Product: {
            netValue: (product) => {
                //Applies the discount, if there's a % value to do so
                return product.discountPercentage 
                    ? product.price - (product.price * (product.discountPercentage / 100))
                    : product.price
            }
        },        
    },

    Query: {
        product: (_, { id }) => products.find(p => p.id === id),
        products: () => products
    }
}