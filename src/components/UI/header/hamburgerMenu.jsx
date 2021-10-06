import { Box } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  // useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { links } from "../../../../config";
import NextLink from "next/link";

const HamburgerMenu = () => {
  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box display={{ lg: "none" }}>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={IconButton}
                color="green.500"
                icon={!isOpen ? <HamburgerIcon /> : <CloseIcon />}
                aria-label="Menu"
                fontSize="30px"
                variant="flushed"
              />
              <MenuList>
                {links.map((link) => (
                  <NextLink key={link.path} href={link.path}>
                    <MenuItem as="a">{link.title}</MenuItem>
                  </NextLink>
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    </>
  );
};

export default HamburgerMenu;
