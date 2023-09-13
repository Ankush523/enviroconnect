import { Box, Heading, VStack, Center,Text } from '@chakra-ui/react';
import Header from './Header';

const Homepage = () => {
  return (
    <Box 
      bgImage="url(/trash.png)"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="100vh"
    >
      <VStack spacing={0} align="stretch" h="100vh">
        <Header />

        <Center flexGrow={1}>
          <Box
            pos="relative" 
            bg="transparent"
            p={8}
            borderRadius="md"
            zIndex={1}
            maxWidth="800px"
            textAlign="center"
          >
            {/* This creates the blurred and darkened background for the text and heading */}
            <Box 
              content='""'
              pos="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="blackAlpha.600"
              backdropFilter="blur(2px)"
              borderRadius="lg"
              zIndex={-1}
            />
            <Heading 
              size="2xl"
              fontWeight="bold"
              color="whiteAlpha.900"
              fontFamily="Arial, sans-serif"
            >
              Waste Handling
            </Heading>
            <Text 
              fontSize="lg"
              color="whiteAlpha.900"
              mt={4}
              fontFamily="Georgia, serif"
            >
              To create a cleaner, more sustainable environment by leveraging technology to empower communities and streamline the process of reporting and resolving trash and litter issues, ultimately fostering a sense of responsibility and engagement in environmental conservation.
            </Text>
          </Box>
        </Center>
      </VStack>
    </Box>
  );
};

export default Homepage;
