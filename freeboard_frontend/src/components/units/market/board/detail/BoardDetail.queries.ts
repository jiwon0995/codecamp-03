import { gql } from '@apollo/client'

export const FETCH_BOARD = gql`
  query fetchUseditem($useditemId:ID!){
    fetchUseditem(useditemId:$useditemId){
      _id
      name
      remarks
      contents
      price
      seller{name}
      createdAt
      images
      pickedCount

    }
  }
`