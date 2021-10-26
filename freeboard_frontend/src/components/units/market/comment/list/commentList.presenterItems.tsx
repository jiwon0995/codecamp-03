import {
  Wrapper,
  CommentWrapper,
  ProfileImg,
  Contents,
  Text,
  CommentButton,
} from "./commentList.styles";
import {
  DELETE_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./commnetList.queries";
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { useMutation } from "@apollo/client";
import { IMutation, IMutationDeleteUseditemQuestionArgs } from "../../../../../commons/types/generated/types";
import CommentWrite from '../write/commentWrit'
import { GlobalContext } from "../../../../../../pages/_app";

export default function CommentListUIItem(props:any) { 
  const router = useRouter()
  const [isEdite, setIsEdite] = useState(false)
  
  const { userInfo } : any = useContext(GlobalContext)
  
  const [deleteUseditemQuestion] = useMutation<Pick<IMutation,"deleteUseditemQuestion">,IMutationDeleteUseditemQuestionArgs>(DELETE_QUESTION);

  const onClickUpdate = () => {
    setIsEdite(true)
  }
  const onClickQuestionDelete = async() => { 
    
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: String(props.el?._id) },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.boardId) },
          },
        ],
      }); 
      alert("삭제완료!")
    } catch (error) { console.log(error.message) }
  }


  return (
    <>
      {!isEdite && (
        <Wrapper>
          <CommentWrapper>
            <ProfileImg src={"/msagent.png"} />
            <Contents>
              <Text>{props.el?.user.name} :</Text>
              <Text>{props.el?.contents}</Text>
            </Contents>
            {props.el?.user._id ===
              userInfo?.fetchUserLoggedIn?._id ? (
                <>
                <CommentButton onClick={onClickUpdate}>Edit</CommentButton>
                <CommentButton onClick={onClickQuestionDelete}>Delete</CommentButton>
                </>
              ): (<img src="/question.png"></img>)}
            
          </CommentWrapper>
        </Wrapper>
      )}
      {isEdite && (
        <CommentWrite isEdite={isEdite} setIsEdite={setIsEdite} el={props.el} />
      )}
    </>
  );
}