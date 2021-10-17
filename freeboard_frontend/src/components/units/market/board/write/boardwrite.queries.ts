import { gql } from '@apollo/client'

export const USEDITEM = gql`
  mutation createUseditem($createUseditemInput:CreateUseditemInput!){
    createUseditem(createUseditemInput:$createUseditemInput){
      _id
      createdAt
      updatedAt
      remarks
      images
    }
  }
`

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem($useditemId:ID!,$updateUseditemInput:UpdateUseditemInput!){
    updateUseditem(useditemId:$useditemId,updateUseditemInput:$updateUseditemInput){
      _id
    }
  }
`
