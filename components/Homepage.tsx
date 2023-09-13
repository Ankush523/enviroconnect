import { Box, Heading, VStack, HStack, SimpleGrid, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './Header';
import trash_img from '../images/trash.png';
import india from '../images/india.png';

const Homepage = () => {
  return (
    <VStack spacing={0} align="stretch" h="200vh" >
      <Header/>

      <SimpleGrid columns={2} p={8} spacing={10} flexGrow={1} mt={"2%"}>
        <VStack align="start" spacing={6}>
          <Heading 
            size="2xl"        // Increased font size
            ml={"160px"}
            fontWeight="bold" // Bolder font weight
            fontFamily="Arial, sans-serif"  // Using Arial font-family as an example. You can replace this with any font you like.
          >
            Waste Handling
          </Heading>
          <Text 
            fontSize="lg"      // Increased font size
            fontFamily="Georgia, serif"   // Using Georgia font-family as an example. You can replace this with any font you like.
          >
            Welcome to Trash Tagging Project. Our mission is to provide an easy and efficient platform for users to manage waste effectively. Users can tag trash, identify its location and contribute to a cleaner environment. Join us in making the world a better place.
          </Text>
        </VStack>

        <VStack align="center">
          <Image
            src={india}
            alt="Waste Management"
            width={600}
          />
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default Homepage;
