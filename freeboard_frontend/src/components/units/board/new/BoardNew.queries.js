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

export const UPDATE_PRODEUT = gql`
  mutation updateBoard(
    $boardId: ID!
    $password: String
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(
      boardId: $boardId
      password: $password
      updateBoardInput: $updateBoardInput
    ) {
      _id
    }
  }
`