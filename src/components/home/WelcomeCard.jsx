import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";

export default function WelcomeCard() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Welcome to <br />
            <Text as={"span"} color={"green.400"}>
              PANS, UNIUYO CHAPTER
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            PANS uniuyo owns this site Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque iusto sapiente architecto aspernatur earum
            fugit, quis ducimus dolorum ab cumque cupiditate, natus fuga, ipsam
            ratione sequi provident.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
