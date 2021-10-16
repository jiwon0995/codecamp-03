import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketBoardListUI from "./boardlist.presenter";
import { FETCH_USED_ITEMS } from "./boardlist.queries";

export default function MarketBoardList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  console.log(data);
  const onClickMoveBoardWrite = (e: any) => {
    router.push("/market/new");
  };

  const onClickMoveDetail = (e: any) => {
    router.push(`/market/${e.currentTarget.id}`);
  };

  const onLoadeMore = () => {
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <MarketBoardListUI
      onClickMoveBoardWrite={onClickMoveBoardWrite}
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onLoadeMore={onLoadeMore}
    />
  );
}
