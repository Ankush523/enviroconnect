import Image from 'next/image'
import { ChakraProvider, CSSReset, Box, VStack, Heading } from '@chakra-ui/react';
import Homepage from '@/components/Homepage';

export default function Home() {
  return (
    <main>
      <Homepage/>
    </main>
  )
}
