import {
  Wrapper,
  CommentInput,
  CommentWrapper,
  ButtonBox,
  TextCount,
  SubmitButton,
} from "./commentWrite.styles";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./commentWrite.queries";

export default function CommentWrite() {
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION);

  const [contents, setContenst] = useState("");

  const router = useRouter();
  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContenst(e.target.value);
  };
  const { data}= useQuery<Pick<IQuery,"fetchUseditemQuestions">,IQueryFetchUseditemQuestionsArgs>(FETCH_USEDITEM_QUESTIONS)

  const onClickComment = async () => {
    try { 
      const result = await createUseditemQuestion({
      variables: {
        useditemId: String(router.query.boardId),
        createUseditemQuestionInput: {
          contents,
        }
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { 
              // page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1, 
              useditemId: String(router.query.boardId) 
            }
          }
        ]
    })
      console.log("댓글", result);
    } catch (error) {
      console.log(alert(error.messate));
    }
  };

  return (
    <Wrapper>
      <CommentWrapper>
        <CommentInput
          onChange={onChangeContents} maxLength={100}
        ></CommentInput>
        <ButtonBox>
          <TextCount>{contents.length} / 100 </TextCount>
          <SubmitButton onClick={onClickComment}>문의하기</SubmitButton>
        </ButtonBox>
      </CommentWrapper>
    </Wrapper>
  );
}
