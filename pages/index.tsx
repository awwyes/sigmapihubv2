import { Flex } from "@chakra-ui/react";
import Main from "../components/Main/Main";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <Flex direction="column" flex="1">
      <Navbar />
      <Main />
      <Footer />
    </Flex>
  )
}