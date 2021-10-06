import React from "react";
import {
  Box,
  HStack,
  StackDivider,
  Stack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import Counter from "../UI/Counter";

export default function CountUpStats() {
  return (
    <Box m="auto" px={[4, 6, 10, 14, 20]} w="full" py="40px">
      <Box px={[4, 6, 10, 10, 10]} shadow="xl" bg="white" p="20">
        <SimpleGrid
          columns={["1", "1", "2", "4"]}
          spacing={{ base: "40px", md: "40px", lg: "5" }}
          justifyContent="space-between"
        >
          <HStack divider={<StackDivider />} justifyContent="center">
            <Box textAlign="right" w="50%" pr={2}>
              <Text color="#363636" fontSize="45px" fontWeight="bold">
                <Counter end={210} />
              </Text>
            </Box>
            <Box w="50%" pl={2}>
              <Text
                fontWeight="bold"
                fontSize="small"
                textTransform="uppercase"
              >
                project
                <br /> achievement
              </Text>
            </Box>
          </HStack>
          <HStack divider={<StackDivider />} justifyContent="center">
            <Box textAlign="right" w="50%" pr={2}>
              <Text color="#363636" fontSize="45px" fontWeight="bold">
                <Counter end={121} />
              </Text>
            </Box>
            <Box w="50%" pl={2}>
              <Text
                fontWeight="bold"
                fontSize="small"
                textTransform="uppercase"
              >
                another
                <br /> achievement
              </Text>
            </Box>
          </HStack>
          <HStack divider={<StackDivider />} justifyContent="center">
            <Box textAlign="right" w="50%" pr={2}>
              <Text color="#363636" fontSize="45px" fontWeight="bold">
                <Counter end={21} />
              </Text>
            </Box>
            <Box w="50%" pl={2}>
              <Text
                fontWeight="bold"
                fontSize="small"
                textTransform="uppercase"
              >
                project
                <br /> engagement
              </Text>
            </Box>
          </HStack>
          <HStack divider={<StackDivider />} justifyContent="center">
            <Box textAlign="right" w="50%" pr={2}>
              <Text color="#363636" fontSize="45px" fontWeight="bold">
                <Counter end={50} />
              </Text>
            </Box>
            <Box w="50%" pl={2}>
              <Text
                fontWeight="bold"
                fontSize="small"
                textTransform="uppercase"
              >
                another
                <br /> engagement
              </Text>
            </Box>
          </HStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
