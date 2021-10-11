import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "../styles/app.css";

import Layout from "../components/layout";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, -apple-system",
    body: "Source Sans Pro, -apple-system",
  },
});

const MyApp = ({ Component, pageProps }) => (
  <>
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </>
);

export default MyApp;
