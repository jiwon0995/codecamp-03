import { gql } from '@apollo/client'

export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      _id
      picture
      userPoint {
        _id
        amount
      }
    }
  }
`
export const POINT = gql`
  mutation createPointTransactionOfLoading($impUid:ID!){
    createPointTransactionOfLoading(impUid:$impUid){
      _id
    }
  }
`