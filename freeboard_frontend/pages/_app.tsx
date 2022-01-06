// import '../styles/globals.css'
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { createContext, useState, useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import { AppProps } from "next/app";

export const GlobalContext = createContext("");
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  const value:any = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };
  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // setAccessToken(accessToken);
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(
    // 객체 구조분해할당 graphQL 에러, 실행했던 쿼리, 재전송(요청)할 forward
    ({ graphQLErrors, operation, forward }) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          if (err.extensions?.code === "UNAUTHENTICATED") {
            // 기존의 header 정보 operation.getContext().headers
            // header에 authorization 관련부분만 바꾸기
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                authorization: `Bearer ${getAccessToken(setAccessToken)}`,
              },
            });
            // 실패한 쿼리 재요청
            return forward(operation);
          }
        }
      }
    }
  );

  const uploadLink = createUploadLink({
    uri: "https://backend03.codebootcamp.co.kr/graphql17",
    headers: { authorization: `Bearer ${accessToken}` }, // Bearer ""하면 비회원으로 처리됨
    credentials: "include", // 중요한 정보들을 포함시켜줘. 이거 해야 쿠키에 저장됨
  }); // 필요한 부분만 따로 만들어서 조립하는 방식

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
        {/* 모든 컴포넌트에서 mutation, query 사용하기 위해서 */}
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
