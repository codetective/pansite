import { useState } from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const images = ["/C1.jpg", "/C2.jpg", "/C3.jpg"];

export default function SplitScreen() {
  const showSm = useBreakpointValue({ base: false, md: true });
  const [img, setImg] = useState(0);
  function scroll() {
    setImg((prev) => (prev + 1) % images.length);
  }
  useEffect(() => {
    const int = setInterval(scroll, 3000);
    return () => {
      clearInterval(int);
    };
  }, []);
  return (
    <Stack minH={"75vh"} w="100%" direction={{ base: "column", md: "row" }}>
      <Flex
        pl={[4, 6, 10, 14, 20]}
        transition="all .6s ease"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImg={showSm === false && `url('${images[img]}')`}
        bgColor={showSm === false && "blackAlpha.600"}
        bgBlendMode="overlay"
        minH={{
          base: "100vh",
          md: "75vh",
        }}
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
      >
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "5xl", md: "5xl", lg: "5xl" }}>
            <Text
              color={showSm === false && "gray.200"}
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "orange.400",
                zIndex: -1,
              }}
            >
              Pansites!
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Catch Phrase
            </Text>{" "}
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={showSm ? "gray.500" : "gray.300"}
          >
            The project is an exclusive resource for uniuyo pansites. It's
            perfect for all use cases or ehatever.
          </Text>
        </Stack>
      </Flex>
      {showSm && (
        <Flex flex={1} h="75vh" pr={[4, 6, 10, 14, 20]}>
          {img === 0 && (
            <AnimatePresence>
              <motion.div
                initial={{ x: "-300px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: "+300px", opacity: 0 }}
              >
                <Box h="75vh">
                  <Image
                    h="100%"
                    w={{ base: "full", md: "45vw" }}
                    alt={"header image"}
                    objectFit={"cover"}
                    src={images[0]}
                  />
                </Box>
              </motion.div>
            </AnimatePresence>
          )}
          {img === 1 && (
            <AnimatePresence>
              <motion.div
                initial={{ x: "-300px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: "-300px", opacity: 0 }}
              >
                <Box h="75vh">
                  <Image
                    h="100%"
                    w={{ base: "full", md: "45vw" }}
                    alt={"header image"}
                    objectFit={"cover"}
                    src={images[1]}
                  />
                </Box>
              </motion.div>
            </AnimatePresence>
          )}
          {img === 2 && (
            <AnimatePresence>
              <motion.div
                initial={{ x: "-300px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ y: "+300px", opacity: 0 }}
              >
                <Box h="75vh" w="100%">
                  <Image
                    alt={"header image"}
                    objectFit={"cover"}
                    h="100%"
                    w={{ base: "full", md: "45vw" }}
                    src={images[2]}
                  />
                </Box>
              </motion.div>
            </AnimatePresence>
          )}
        </Flex>
      )}
    </Stack>
  );
}
