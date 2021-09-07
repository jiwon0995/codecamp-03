import { gql } from "@apollo/client"

export const FETCH_BOARDS = gql`
  query{
    fetchBoards{
      writer
      title
      createdAt
      _id
    }
  }
`