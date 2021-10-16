import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../UI/logo";
import NextLink from "next/link";

import Section from "../../UI/Section";
import {
  Box,
  Container,
  chakra,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { links } from "../../../../config";
const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Section
      bg={"green.800"}
      color="white"
      fontFamily="Poppins"
      position="sticky"
      bottom="0"
      zIndex="1"
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} divider={<StackDivider />}>
          {links.slice(0, 4).map((link, i) => {
            return (
              <NextLink href={link.path}>
                <chakra.a
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
            );
          })}
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor="gray.900">
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2021 PANS Uniuyo. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </SocialButton>

            <SocialButton label={"Twitter"} href={"#"}>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </SocialButton>

            <SocialButton label={"Twitter"} href={"#"}>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Section>
  );
}
