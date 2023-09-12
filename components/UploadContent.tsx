import React, { useState } from 'react';
import { Box, Button, Image, Input, VStack, HStack, Text, Heading, FormControl, FormLabel, useToast, SimpleGrid } from '@chakra-ui/react';
import { ChakraProvider, Fade } from '@chakra-ui/react';
import theme from './theme';
import Header from './Header';
import Footer from './Footer';

type ImageDetails = {
  imageUrl: string;
  location: string;
};

const UploadContent = () => {

    const [imageDetails, setImageDetails] = useState<ImageDetails[]>([]);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [location, setLocation] = useState<string>("");
    const toast = useToast();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCurrentImage(reader.result as string);
    };
  };

  const handleUpload = () => {
    if (currentImage && location) {
      setImageDetails([...imageDetails, { imageUrl: currentImage, location }]);
      setCurrentImage(null);
      setLocation("");
    }
    toast({
      title: "Image uploaded successfully.",
      description: "Your trash image and location are saved.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack
      spacing={0}
      align="stretch"
      bg={`url('https://path-to-your-background-image.jpg') no-repeat center center`}
      bgSize="cover"
      h="100vh"
    >
      <Header />
      <Fade in={true}>
        <Box
          w="100%"
          m="0 auto"
          p={4}
          bg="white"
          borderRadius="md"
          boxShadow="lg"
        >
          <SimpleGrid columns={2} spacing={10} p={4} gridTemplateColumns="2fr 3fr" >
            <VStack align="start" spacing={4} borderRight={"4px"} pr={4}>
              <Heading>Upload Trash</Heading>
              <FormControl>
                <FormLabel>Upload Image</FormLabel>
                <Input type="file" accept="image/*" onChange={handleImageChange} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input value={location} onChange={(e) => setLocation(e.target.value)} />
              </FormControl>
              <Button mt={4} onClick={handleUpload}>
                Upload
              </Button>
            </VStack>
            <VStack align="start" spacing={4}>
              <Heading>Uploaded Trash Details</Heading>
              <VStack spacing={4} w="100%">
                {imageDetails.map((detail, index) => (
                  <Box key={index} borderWidth="1px" borderRadius="lg" p={4} w="100%">
                    <Image src={detail.imageUrl} alt="Uploaded Trash" boxSize="200px" />
                    <Text mt={2}>Location: {detail.location}</Text>
                  </Box>
                ))}
              </VStack>
            </VStack>
          </SimpleGrid>
        </Box>
      </Fade>
      <Footer />
    </VStack>
);

};

export default UploadContent;
