import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import MarketBoardListUI from "./boardlist.presenter";
import { FETCH_USED_ITEMS } from "./boardlist.queries";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../commons/types/generated/types";
import { GlobalContext } from "../../../../../../pages/_app";

export default function MarketBoardList() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isSoldout, setIsSoldout] = useState(false);
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS, {
    variables: { isSoldout: isSoldout },
  });
  const { accessToken } = useContext(GlobalContext);
  const getDebounce = _.debounce((data): any => {
    refetch({ search: data });
    setSearch(data);
  }, 500);

  const onClickMoveBoardWrite = (e: any) => {
    router.push("/market/new");
  };

  const onClickMoveDetail = (e: any) => {
    router.push(`/market/${e.currentTarget.id}`);
  };
  const onClickSoldOut = () => {
    setIsSoldout(true);
  };
  const onClickSelling = () => {
    setIsSoldout(false);
  };
  //infinitiscroll
  const onLoadeMore = () => {
    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        // if (Array.isArray(prev)) {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
        // }
      },
    });
  };

  const onchangeSearch = (e: any) => {
    getDebounce(e.target.value);
  };

  return (
    <MarketBoardListUI
      onClickMoveBoardWrite={onClickMoveBoardWrite}
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onLoadeMore={onLoadeMore}
      onchangeSearch={onchangeSearch}
      isSoldout={isSoldout}
      onClickSoldOut={onClickSoldOut}
      onClickSelling={onClickSelling}
    />
  );
}
