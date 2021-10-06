import { Box, useBreakpointValue, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import Logo from "../UI/logo";
import HeaderContact from "./headerContact";
import Navbar from "./navbar";
import HamburgerMenu from "../UI/header/hamburgerMenu";

const Header = () => {
  const showC = useBreakpointValue({ md: true });
  const fixHeader = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box bg="gray.50">
        <Box
          as="header"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={[4, 6, 10, 14, 20]}
          py="10"
          maxW="1440px"
          mx="auto"
          h="4rem"
          position={fixHeader && "fixed"}
          shadow={fixHeader && "lg"}
          backdropFilter={fixHeader && "blur(10px)"}
          top="0"
          w="100%"
          zIndex="11"
        >
          <Logo />
          <HStack>
            {showC && <HeaderContact />}
            {!showC && <HamburgerMenu />}
          </HStack>
        </Box>
      </Box>
      {showC && <Navbar />}
    </>
  );
};

export default Header;
