import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ChakraProvider, CSSReset, Box, VStack, Heading } from '@chakra-ui/react';
import UploadComponent from '@/components/UploadContent';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <Box textAlign="center" fontSize="xl">
        <VStack spacing={8}>
          <UploadComponent />
        </VStack>
      </Box>
    </main>
  )
}
