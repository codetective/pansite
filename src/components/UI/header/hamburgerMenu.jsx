import { Box } from "@chakra-ui/react";
import { IconButton, Stack, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { links } from "../../../../config";
import NextLink from "next/link";
import { useRef } from "react";

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box display={{ lg: "none" }}>
        <IconButton
          ref={btnRef}
          color="green.500"
          icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />}
          aria-label="Menu"
          fontSize="30px"
          variant="flushed"
          colorScheme="teal"
          onClick={onOpen}
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody px="0" py="0">
              <Stack>
                {links.map((link) => (
                  <NextLink key={link.path} href={link.path}>
                    <Box
                      transition="all .5s ease"
                      py="2"
                      px="7"
                      fontSize="18px"
                      _hover={{
                        bg: "gray.100",
                      }}
                      cursor="pointer"
                      as="a"
                    >
                      {link.title}
                    </Box>
                  </NextLink>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default HamburgerMenu;
