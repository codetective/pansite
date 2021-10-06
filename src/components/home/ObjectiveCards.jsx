import React from "react";
import { Stack, Text, SimpleGrid, Box } from "@chakra-ui/react";
import Section from "../UI/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const images = ["/C1.jpg", "/C2.jpg", "/C3.jpg"];

export default function ObjectiveCards() {
  return (
    <Section>
      <SimpleGrid
        columns={[1, 1, 3]}
        spacing="40px"
        py="40px"
        width={{
          base: "90%",
          lg: "100%",
        }}
        m="auto"
        color="white"
      >
        <Stack
          spacing="40px"
          textAlign="center"
          py="120px"
          bgImg={`url('${images[0]}')`}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          bgColor="#384f17"
          bgBlendMode="soft-light"
          px="5"
          transition="all .5s ease"
          _hover={{
            bgColor: "#013300",
            bgBlendMode: "darken",
          }}
        >
          <Box fontSize="35px" color="white">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </Box>
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize={{ base: "xl", sm: "2xl", md: "md", lg: "2xl" }}
          >
            PURPOSE & OBJECTIVES
          </Text>
          <Text>
            We, the leading body of pharmacy students dedicated to promote
            unity, progress and strength...
          </Text>
        </Stack>
        {/*  */}
        <Stack
          spacing="40px"
          textAlign="center"
          py="120px"
          bgImg={`url('${images[1]}')`}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          bgColor="#ea6e23"
          bgBlendMode="soft-light"
          px="5"
          transition="all .5s ease"
          _hover={{
            bgColor: "#ff6600",
            bgBlendMode: "darken",
          }}
        >
          <Box fontSize="35px" color="white">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </Box>{" "}
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize={{ base: "xl", sm: "2xl", md: "md", lg: "2xl" }}
          >
            PURPOSE & OBJECTIVES
          </Text>
          <Text>
            We, the leading body of pharmacy students dedicated to promote
            unity, progress and strength...
          </Text>
        </Stack>
        {/*  */}
        <Stack
          spacing="40px"
          textAlign="center"
          py="120px"
          bgImg={`url('${images[2]}')`}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          bgColor="#384f17"
          bgBlendMode="soft-light"
          px="5"
          transition="all .3s ease"
          _hover={{
            bgColor: "#013300",
            bgBlendMode: "darken",
          }}
        >
          <Box fontSize="35px" color="white">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </Box>{" "}
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize={{ base: "xl", sm: "2xl", md: "md", lg: "2xl" }}
          >
            PURPOSE & OBJECTIVES
          </Text>
          <Text>
            We, the leading body of pharmacy students dedicated to promote
            unity, progress and strength...
          </Text>
        </Stack>
      </SimpleGrid>
    </Section>
  );
}
