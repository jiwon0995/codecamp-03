import {
  Wrapper,
  CommentWrapper,
  ProfileImg,
  Contents,
  Text,
} from "./commentList.styles";
import { useRouter } from "next/router"
import { useState } from "react"

export default function CommentListUIItem(props:any) { 
  const router = useRouter()
  const [isEdite, setIsEdite] = useState(false)
  





  return (
    <>
      {!isEdite && (
        <Wrapper>
          <CommentWrapper>
            <ProfileImg />
            <Contents>
              <Text>{props.el?.user.name} :</Text>
              <Text>{props.el?.contents}</Text>
            </Contents>
          </CommentWrapper>
        </Wrapper>
      )}
    </>
  );
}