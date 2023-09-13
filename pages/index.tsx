import Image from "next/image";
import {
  ChakraProvider,
  CSSReset,
  Box,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Login from "../components/login";

export default function Home() {
  return (
    <main>
      <Login />
    </main>
  );
}
