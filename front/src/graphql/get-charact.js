import gql from 'graphql'

export const getCharact = gql`
  query{
    characteristics{
      openId
      displayName
      balance
      avatar
      tradeurl
      won
      rank
      ban
      mute
      operator
      depositamountCC
    }
  }
`
