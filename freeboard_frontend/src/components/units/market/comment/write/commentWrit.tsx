import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from "../../../../../commons/types/generated/types";
import { CREATE_USEDITEM_QUESTION } from "./commentWrite.queries";

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

  const onClickComment = async () => {
    try {
      const result = await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents,
          },
          useditemId: String(router.query.boardId),
        },
      });
      console.log("댓글등록", result);
    } catch (error) {
      console.log(error.messate);
    }
  };

  return (
    <>
      <input onChange={onChangeContents}></input>
      <button onClick={onClickComment}>등록!</button>
    </>
  );
}
