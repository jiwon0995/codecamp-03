import { gql } from '@apollo/client'

export const CREAT_BOARD = gql`
  mutation ($createBoardInput:CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput)
    {
      _id
      writer
      title
    }     
}
`