import { gql } from '@apollo/client'

export const USEDITEM = gql`
  mutation Useditem($createUseditemInput:CreateUseditemInput!){
    Useditem(createUseditemInput:$createUseditemInput){
      _id
    }
  }
`