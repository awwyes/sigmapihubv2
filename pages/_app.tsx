import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import React from 'react'
import theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}