import "antd/dist/antd.css";
// import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink } from '@apollo/client'
import Layout from '../src/components/commons/layout'
import { Global } from "@emotion/react";
import { globalStyles } from '../src/commons/styles/globalStyles'
import { initializeApp } from 'firebase/app'
import { createUploadLink } from 'apollo-upload-client'
import { createContext, useEffect, useState } from "react";


export const firebaseApp = initializeApp({
  apiKey: "AIzaSyB2B72_d-oKpVZBLuWR6fD9oTWGEe5AAMA",
  authDomain: "codecapm-03.firebaseapp.com",
  projectId: "codecapm-03",
  storageBucket: "codecapm-03.appspot.com",
  messagingSenderId: "878744663043",
  appId: "1:878744663043:web:d23a085e21f06364828a36",
  measurementId: "G-24YYM7VV6E"
});
export const GlobalContext = createContext(null)
function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState("")
  const [userInfo, setUserInfo] = useState({})
  
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo : setUserInfo,
  }
  useEffect(() => { 
    const accessToken = localStorage.getItem('accessToken')||""
    setAccessToken(accessToken)
  }, [])
  
  const uploadLink = createUploadLink({
    uri: "http://backend03.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}`}
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache()
  })

  return (
    <GlobalContext.Provider value={value}>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
