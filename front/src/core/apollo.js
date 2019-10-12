import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'



const {
  BACKEND_PORT=8080
} = process.env



const httpLink = new HttpLink({
  uri: '/graphql',
  options: {
    reconnect: true
  }
})



const apollo = new ApolloClient({
  link: httpLink,
  credentials: 'include'
})

export default apollo
