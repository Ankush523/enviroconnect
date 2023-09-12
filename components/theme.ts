import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    teal: {
      500: "#31A6A0",
    },
  },
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
});

export default theme;
