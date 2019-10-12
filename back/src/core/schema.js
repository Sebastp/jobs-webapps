import { merge } from 'lodash'
const blocks = require('~/database');


const typeDefs = []
const resolverArray = []

// define root types for extending later
// type Mutation
// type Subscription
typeDefs.push(`
  type Query
`)

for (const block of Object.values(blocks)) {
  if (block.typeDefs) {
    typeDefs.push(block.typeDefs)
  }
  if (block.resolvers) {
    resolverArray.push(block.resolvers)
  }
}


const resolvers = merge(...resolverArray)
export { typeDefs, resolvers }
