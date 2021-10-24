import { gql } from '@apollo/client'

export const FETCH_BOARD = gql`
  query fetchUseditem($useditemId:ID!){
    fetchUseditem(useditemId:$useditemId){
      _id
      name
      remarks
      contents
      price
      seller{
        name
        _id
      }
      useditemAddress {
        address
        addressDetail
        lat
        lng
      }
      createdAt
      images
      pickedCount

    }
  }
`
export const DELETE_USEDITEM = gql`
  mutation deleteUseditem($useditemId:ID!){
    deleteUseditem(useditemId:$useditemId)
  }
`
export const USEDITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId:ID!){
    toggleUseditemPick(useditemId:$useditemId)
  }
`