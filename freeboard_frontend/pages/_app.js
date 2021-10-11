// import '../styles/globals.css'
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client'
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { globalStyles } from '../src/commons/styles/globalStyles'
import Layout from '../src/components/commons/layout'
import { createUploadLink } from 'apollo-upload-client'
import { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext("")

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("")
  const [userInfo, setUserInfo] = useState({});

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  }
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    setAccessToken(accessToken);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache()
  })

  return (
    <>
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  )
}

export default MyApp
