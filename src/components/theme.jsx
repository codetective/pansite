import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const colors = {
  primary: {
    100: "#3F4688",
    200: "#E8694F",
    300: "#9CA4B4",
    400: "#9C9CB4",
  },
};

export const theme = extendTheme({ config, colors });
