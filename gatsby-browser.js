import React from "react"

import TestContextProvider from './src/context/TestContext'
import GlobalContextProvider from './src/context/GlobalContext'

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>
    <TestContextProvider>
      {element}
    </TestContextProvider>
  </GlobalContextProvider>
)
