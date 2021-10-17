import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import BoardWritePage from "../../../../src/components/units/market/board/write/boardwrite.container";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        name
      }
      createdAt
    }
  }
`;

export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.boardId) },
  });
  return <BoardWritePage isEdit={false} data={data} />;
}
