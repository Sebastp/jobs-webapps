import gql from 'graphql-tag'

export const getCharact = gql`
  query{
    characteristics{
      title
      description
    }
  }
`
