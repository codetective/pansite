import React from "react";
import {
  chakra,
  Box,
  Stack,
  HStack,
  Flex,
  Text,
  Circle,
} from "@chakra-ui/react";
import Section from "../UI/Section";
import TimelineContainer from "../UI/timeline/TimeLineContainer";

export default function UpcomingEvents() {
  return (
    <>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Flex justify="center" w="full">
          <Box
            w={{ base: "full", md: "75%", lg: "50%" }}
            px={4}
            textAlign="center"
          >
            <chakra.span letterSpacing="tight" lineHeight="shorter" mb={6}>
              <chakra.span
                display="block"
                mb="5"
                letterSpacing="widest"
                textTransform="uppercase"
                fontWeight="500"
                color="gray.600"
                fontFamily="Source Sans Pro"
              >
                Don't miss out!
              </chakra.span>
              <chakra.span
                color="black"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                display="block"
                letterSpacing="wide"
                fontFamily="Poppins"
              >
                Upcoming Events
              </chakra.span>
            </chakra.span>
          </Box>
        </Flex>
      </Flex>
      <TimelineContainer />
    </>
  );
}
