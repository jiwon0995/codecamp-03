import { gql } from '@apollo/client'

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($page:Int,$boardId:ID!){
    fetchBoardComments(boardId:$boardId,page:$page){
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`
export const DELET_BOARD_COMMNET = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!){
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`