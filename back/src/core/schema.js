// import { merge } from 'lodash'
const blocks = require('@src/database');


const typeDefs = []
const resolverFragments = []



for (const block of Object.values(blocks)) {
  if (block.typeDefs) {
    typeDefs.push(block.typeDefs)
  }
  if (block.resolvers) {
    console.log(block.resolvers);
    resolverFragments.push(block.resolvers)
  }
}

console.log(resolverFragments);
export { typeDefs }
// export const resolvers = merge(...resolverFragments)
