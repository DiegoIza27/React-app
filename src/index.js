
import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react"
import App from "./App";
const divRoot= ReactDOM.createRoot( document.getElementById('root'))
divRoot.render(
    <React.StrictMode>
    <ChakraProvider>
    <App/>
    </ChakraProvider>
    </React.StrictMode>
)
