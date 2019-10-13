import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'



const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: '/graphql',
  options: {
    reconnect: true
  }
})


const apollo = new ApolloClient({
  link: httpLink,
  cache,
  credentials: 'include'
})

export default apollo
