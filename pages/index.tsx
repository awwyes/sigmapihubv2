import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
const Footer = dynamic(() => import("../components/Footer/Footer"))
const NavBar = dynamic(() => import("../components/Navbar/Navbar"))

export default function Home() {
  return (
    <>
    <Flex direction="column" flex="1">
      <NavBar />
      {/* <Footer /> */}
    </Flex>
    </>
  )
}