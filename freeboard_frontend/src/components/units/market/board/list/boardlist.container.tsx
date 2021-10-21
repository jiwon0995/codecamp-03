import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MarketBoardListUI from "./boardlist.presenter";
import { FETCH_USED_ITEMS } from "./boardlist.queries";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../../commons/types/generated/types";

export default function MarketBoardList() {
  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery(FETCH_USED_ITEMS);
  const [search, setSearch] = useState("");

  const getDebounce = _.debounce((data) => {
    refetch({ search: data });
    setSearch(data);
  }, 500);

  const onClickMoveBoardWrite = (e: any) => {
    router.push("/market/new");
  };

  const onClickMoveDetail = (e: any) => {
    router.push(`/market/${e.currentTarget.id}`);
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
    />
  );
}
