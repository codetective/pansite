import { Box } from "@chakra-ui/react";
import NextHead from "next/head";

import Header from "../header";
import Footer from "./footer/Footer";

const Layout = ({ children }) => (
  <>
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    </NextHead>
    <Header />
    <Box as="main" maxW="1440px" mx="auto" pos="relative">
      <Box bg="gray.50" pos="relative" zIndex="2">
        {children}
      </Box>
      <Footer />
    </Box>
  </>
);

export default Layout;
