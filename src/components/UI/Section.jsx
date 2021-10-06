import React from "react";
import { Box } from "@chakra-ui/react";

function Section({ children, ...rest }) {
  return (
    <Box
      as="section"
      maxW="1440px"
      py="4"
      px={[4, 6, 10, 14, 20]}
      mx="auto"
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Section;
