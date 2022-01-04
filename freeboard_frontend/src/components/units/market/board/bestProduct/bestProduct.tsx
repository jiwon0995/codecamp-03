import {
  Wrapper,
  BestitemWrapper,
  Top,
  BestitemImg,
  Price,
  BodyDiv,
  LeftDiv,
  Remark,
  PickWrapper,
  ImgX,
} from "./bestProduct.styled";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";


const FETCH_USEDITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest{
      _id
      name
      remarks
      price
      images
      pickedCount
    }
  }
`;

export default function BestProductPage() {
  const router = useRouter()
  const { data }: any | string = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USEDITEMS_OF_THE_BEST);

  const onClickMoveDetail = (e: any) =>
    router.push(`/market/${e.currentTarget.id}`);
  
  return (
    <Wrapper>
      {data?.fetchUseditemsOfTheBest.map((el: any | string, index: string) => (
        <BestitemWrapper onClick={onClickMoveDetail} id={el._id} key={index}>
          <Top>
            Best Item {index + 1} : {el.name}
          </Top>
          <BodyDiv>
            {el.images[0] ? (
              <BestitemImg
                src={`https://storage.googleapis.com/${el.images[0]}`}
              />
            ) : (
              <ImgX>NoneImage</ImgX>
            )}
            <LeftDiv>
              <Remark>{el.remarks}</Remark>
              <PickWrapper>
                <img
                  src="/h.ico"
                  style={{ width: "20px", marginRight: "5px" }}
                ></img>
                {el.pickedCount}
              </PickWrapper>
              <Price>{el.price}원</Price>
            </LeftDiv>
          </BodyDiv>
        </BestitemWrapper>
      ))}
    </Wrapper>
  );
}
