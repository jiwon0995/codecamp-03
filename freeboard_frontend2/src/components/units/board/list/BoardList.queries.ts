import { gql } from '@apollo/client'

export const FETCH_BOARDS = gql`
  query fetchBoards($page:Int,$search:String ){
    fetchBoards(page:$page,search:$search){
      writer
      title
      _id
      createdAt
    }
  }
`