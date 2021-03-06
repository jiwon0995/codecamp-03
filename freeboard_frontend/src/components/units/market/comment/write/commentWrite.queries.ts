import { gql } from '@apollo/client'

export const CREATE_USEDITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
      ) {
        _id
    }
  }
`
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
export const UPDATE_USEDITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput:UpdateUseditemQuestionInput!,
    $useditemQuestionId:ID!
    ){
    updateUseditemQuestion(
      updateUseditemQuestionInput:$updateUseditemQuestionInput,
      useditemQuestionId:$useditemQuestionId
      ){
        _id
        contents
        user {name}
      }
  }
`

