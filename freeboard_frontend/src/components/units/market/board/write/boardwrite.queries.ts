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
