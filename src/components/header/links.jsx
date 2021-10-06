import { Box, chakra } from "@chakra-ui/react";
import NextLink from "next/link";

import { links } from "../../../config";

const Links = () => (
  <>
    {links.map((link) => (
      <Box as="li" listStyleType="none" px={3} py="2" key={link.title}>
        <NextLink href={link.path}>
          <chakra.a
            color="gray.600"
            fontFamily="Poppins"
            transition="all .3s ease"
            _hover={{
              color: "orange",
            }}
            fontWeight="600"
            fontSize="14px"
            textTransform="uppercase"
            href={link.path}
          >
            {link.title}
          </chakra.a>
        </NextLink>
      </Box>
    ))}
  </>
);

export default Links;
