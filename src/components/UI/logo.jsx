import { chakra, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";

const Logo = () => {
  const showSm = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <NextLink href="/">
        <chakra.a
          href="/"
          color={showSm === false && "gray.200"}
          userSelect="none"
          fontSize="2rem"
          fontWeight="700"
        >
          PANS
        </chakra.a>
      </NextLink>
    </>
  );
};

export default Logo;
