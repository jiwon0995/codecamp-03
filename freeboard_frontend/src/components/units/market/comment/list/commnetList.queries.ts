import { gql } from '@apollo/client'

export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page:Int, $useditemId:ID! ){
    fetchUseditemQuestions(page:$page,useditemId:$useditemId){
      _id
      contents
      createdAt
      user {name}
    }
  }
`
export const DELETE_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId:ID!){
    deleteUseditemQuestion(useditemQuestionId:$useditemQuestionId)
  }
`