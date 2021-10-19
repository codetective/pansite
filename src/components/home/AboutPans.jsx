import React from "react";
import { chakra, Box, Flex, Icon, Stack } from "@chakra-ui/react";
import Section from "../UI/Section";

export default function AboutPans() {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            bg={"brand.500"}
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            color={"gray.900"}
            fontFamily="Poppins"
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color={"gray.500"}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Section bg="white">
      <Flex bg={"#F9FAFB"} w="auto" justifyContent="center" alignItems="center">
        <Box py={12} bg={"white"} rounded="xl">
          <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
            <Box textAlign={{ lg: "center" }}>
              <chakra.h2
                color={"brand.600"}
                fontWeight="semibold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                You should know
              </chakra.h2>
              <chakra.p
                mt={2}
                fontSize={{ base: "3xl", sm: "4xl" }}
                lineHeight="8"
                fontWeight="extrabold"
                letterSpacing="tight"
                color={"gray.900"}
                fontFamily="Poppins"
              >
                A brief history of PANS
              </chakra.p>
              <chakra.p
                mt={4}
                maxW="2xl"
                fontSize="xl"
                mx={{ lg: "auto" }}
                color={"gray.500"}
                fontFamily="Source Sans Pro"
              >
                The Pharmaceutical Association Of Nigerian Students (P.A.N.S)
                was established in the year 1972. It is found in every approved
                school by the Pharmacists Council Of Nigeria (P.C.N). However,
                there is a national body of PANS made up of members from various
                universities in Nigeria. Members generally call themselves
                'PANSites'. The sole aim(s) of PANS include:
              </chakra.p>
            </Box>

            <Box mt={10}>
              <Stack
                spacing={{ base: 10, md: 0 }}
                display={{ md: "grid" }}
                gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                gridColumnGap={{ md: 8 }}
                gridRowGap={{ md: 10 }}
              >
                <Feature
                  title="Cultivating Unity"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  }
                >
                  To promote and encourage mutual relationships interaction ad
                  healthy rivalry among pharmacy students through the
                  organisation of activities as national convention
                </Feature>

                <Feature
                  title="Balanced Education"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  }
                >
                  Collecting opinions and info on the subject of pharmacy
                  education and by suggesting improvements where necessary with
                  the aim of having unification of and optimal pharmaceutical
                  education.
                </Feature>

                <Feature
                  title="Creating Awareness"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  }
                >
                  PANS promotes interest in the study and application of the
                  profession through symposium, seminars, lectures and pharmacy
                  exhibition, also encourages exchange of ideas by inter-school
                  correspondence and by encouraging full dissemination of
                  scientific and professional knowledge
                </Feature>

                <Feature
                  title="Exchange of Ideas"
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  }
                >
                  Promotion and exchange of ideas by inter-school correspondence
                  and by encouraging full dissemination of scientific and
                  professional knowledge
                </Feature>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Section>
  );
}
