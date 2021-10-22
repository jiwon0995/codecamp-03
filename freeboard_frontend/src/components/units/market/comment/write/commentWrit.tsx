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
  IMutationUpdateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import {
  CREATE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_USEDITEM_QUESTION,
} from "./commentWrite.queries";

export default function CommentWrite(props) {
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
    >(CREATE_USEDITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation<Pick<IMutation,"updateUseditemQuestion">,IMutationUpdateUseditemQuestionArgs>(UPDATE_USEDITEM_QUESTION);

  const [contents, setContenst] = useState("");

  const router = useRouter();
  const onChangeContents = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContenst(e.target.value);
  };
  const { data }= useQuery<Pick<IQuery,"fetchUseditemQuestions">,IQueryFetchUseditemQuestionsArgs>(FETCH_USEDITEM_QUESTIONS)

  const onClickComment = async () => {
    try { 
      const result = await createUseditemQuestion({
        variables: {
          useditemId: String(router.query.boardId),
          createUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.boardId },
          },
        ],
      });
      // props.setIsEdite(false)
      console.log("댓글", result);
    } catch (error) {
      console.log(alert(error.messate));
    }
  };

  const onClickUpdate = async(e:any) => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.")
      return
    }
    try { 
      await updateUseditemQuestion({
        variables: {
          useditemQuestionId: e.target.id,
          updateUseditemQuestionInput: { contents },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: {
              useditemId: String(router.query.boardId),
            },
          },
        ],
      });
      props.setIsEdite?.(false);
      console.log("댓글수정");
    } catch (error) { console.log(error.message) }
  }

  return (
    <Wrapper>
      <CommentWrapper>
        <CommentInput
          onChange={onChangeContents} maxLength={100}
        ></CommentInput>
        <ButtonBox>
          <TextCount>{contents.length} / 100 </TextCount>
          <SubmitButton
            id={props.el?._id}
            onClick={props.isEdite ? onClickUpdate : onClickComment}>
            {props.isEdite ? "Edit" : "Submit"}
          </SubmitButton>
        </ButtonBox>
      </CommentWrapper>
    </Wrapper>
  );
}
