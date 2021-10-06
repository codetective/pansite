import { HStack, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faLocationArrow,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderContact() {
  return (
    <HStack spacing="5">
      <HStack spacing="3">
        <Box fontSize="25px" color="green.400">
          <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
        </Box>
        <Stack spacing="0">
          <Text
            as="small"
            fontSize="13px"
            fontWeight="600"
            fontFamily="Source Sans Pro"
            textTransform="uppercase"
          >
            call us
          </Text>
          <Text
            fontSize="13px"
            as="a"
            href="tel:+2349023510969"
            textTransform="uppercase"
            fontFamily="Source Sans Pro"
          >
            +2349023510969
          </Text>
        </Stack>
      </HStack>

      <HStack spacing="3">
        <Box fontSize="25px" color="green.400">
          <FontAwesomeIcon icon={faAt}></FontAwesomeIcon>
        </Box>{" "}
        <Stack spacing="0">
          <Text
            as="small"
            fontSize="13px"
            fontWeight="600"
            fontFamily="Source Sans Pro"
            textTransform="uppercase"
          >
            write us
          </Text>
          <Text
            as="a"
            fontSize="13px"
            href="mailto:iaminiodu@gmail.com"
            fontFamily="Source Sans Pro"
          >
            iaminiodu@gmail.com
          </Text>
        </Stack>
      </HStack>

      <HStack spacing="3">
        <Box fontSize="25px" color="green.400">
          <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
        </Box>{" "}
        <Stack spacing="0">
          <Text
            as="small"
            fontSize="13px"
            fontWeight="600"
            fontFamily="Source Sans Pro"
            textTransform="uppercase"
          >
            location
          </Text>
          <Text
            display="block"
            as="p"
            fontSize="13px"
            fontWeight="100"
            fontFamily="Source Sans Pro"
          >
            University of Uyo, Uyo
          </Text>
        </Stack>
      </HStack>
    </HStack>
  );
}
