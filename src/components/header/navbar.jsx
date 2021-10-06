import {
  Box,
  HStack,
  Stack,
  IconButton,
  StackDivider,
  Wrap,
  Flex,
} from "@chakra-ui/react";
import {
  faInstagram,
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from "./links";

const Navbar = () => {
  return (
    <>
      <Box pos="sticky" top="0" fontSize="18px" zIndex="10">
        <Box id="header" px={[4, 6, 10, 14, 20]} maxW="1440px" mx="auto">
          <HStack
            py="5"
            px="5"
            shadow="lg"
            as="nav"
            bg="white"
            justifyContent="space-between"
          >
            <Box w="70%">
              <Wrap>
                <Links />
              </Wrap>
            </Box>
            <Flex justifyContent="flex-end" w="25%" pr="3">
              <Stack direction="row" divider={<StackDivider />}>
                <IconButton
                  as="a"
                  target="_blank"
                  href="http://instagram.com"
                  aria-label="Instagram"
                  fontSize="30px"
                  variant="flushed"
                  color="#f46f30"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </IconButton>

                <IconButton
                  as="a"
                  target="_blank"
                  href="http://instagram.com"
                  aria-label="Telegram"
                  fontSize="30px"
                  color=" #0088cc"
                  variant="flushed"
                >
                  <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>
                </IconButton>
                <IconButton
                  as="a"
                  target="_blank"
                  href="http://instagram.com"
                  aria-label="Whatsapp"
                  fontSize="30px"
                  color="#25d366"
                  variant="flushed"
                >
                  <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                </IconButton>
              </Stack>
            </Flex>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
