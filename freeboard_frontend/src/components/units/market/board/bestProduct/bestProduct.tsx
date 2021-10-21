import {
  Wrapper,
  NonImg,
  BestitemWrapper,
  Top,
  BestitemImg,
  Price,
  BodyDiv,
} from "./bestProduct.styled";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../../commons/types/generated/types";
import { useRouter } from "next/router";


const FETCH_USEDITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
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

  const onClickMoceDetail =()=> router.push(`/market/${router.query.boradId}`)

  return (
    <Wrapper>
      {data?.fetchUseditemsOfTheBest.map((el: any | string, index: string) => (
        <BestitemWrapper onClick={onClickMoceDetail}>
          <Top>{el.name}</Top>
          <BodyDiv>
            <BestitemImg
              src={`https://storage.googleapis.com/${el.images[0]}`}
            />
            <Price>{el.price}원</Price>
          </BodyDiv>
            <div>{el.pickedCount}</div>
            <div>{el.remarks}</div>
        </BestitemWrapper>
      ))}
    </Wrapper>
  );
}
