import React, { useState } from 'react';
import { Box, Button, Image, Input, VStack, HStack, Text, Heading, FormControl, FormLabel, useToast, SimpleGrid } from '@chakra-ui/react';
import { ChakraProvider, Fade } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

type ImageDetails = {
    complaintNumber: number;
    dateOfComplaint: string;
    timeOfComplaint: string;
    imageUrl: string;
    location: string;
    status: 'submitted';
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
      const currentDate = new Date();
      const complaintNumber = imageDetails.length + 1; // Assign unique complaint numbers incrementally
  
      setImageDetails([...imageDetails, {
        complaintNumber,
        dateOfComplaint: currentDate.toLocaleDateString(),
        timeOfComplaint: currentDate.toLocaleTimeString(),
        imageUrl: currentImage,
        location,
        status: 'submitted'
      }]);
  
      setCurrentImage(null);
      setLocation("");
    }
  
    toast({
      title: "Complaint registered successfully.",
      description: "Your trash image and location are saved.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  

  return (
    <VStack spacing={0} align="stretch" h="100vh">
      <Header />
      <Fade in={true}>
        <SimpleGrid columns={2} spacing={10} p={4} gridTemplateColumns="1fr 3fr">
          
          {/* Thin Box for Uploading */}
          <Box                     
            borderWidth="1px" 
            borderRadius="lg" 

            p={4} 
            w="100%" 
            shadow="xl"
            boxShadow="6px 6px 6px 0px rgba(16,185,129,0.6)">
            <VStack align="start" spacing={4} h="2xl">
                <Heading>Upload Image</Heading>
                <hr/>
                <FormControl>
                <FormLabel>Image</FormLabel>
                <Input pt={"4px"} type="file" accept="image/*" onChange={handleImageChange} />
                </FormControl>
                <FormControl mt={4}>
                <FormLabel>Location</FormLabel>
                <Input value={location} onChange={(e) => setLocation(e.target.value)} />
                </FormControl>
                <Button mt={4} onClick={handleUpload}>
                Submit
                </Button>
            </VStack>
          </Box>
          
          {/* Fat Box for Complaints */}
         {/* Fat Box for Complaints */}
         <Box
            borderWidth="1px" 
            borderRadius="lg" 
            p={4} 
            w="100%" 
            shadow="xl"
            boxShadow="6px 6px 6px 0px rgba(16,185,129,0.6)">
            <VStack align="start" spacing={4}>
            <Heading>Complaint Details</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} w="100%">
                {imageDetails.map((detail) => (
                <Box 
                    key={detail.complaintNumber} 
                    borderWidth="1px" 
                    borderRadius="lg" 
                    p={4} 
                    w="100%" 
                    shadow="md"
                    _hover={{ shadow: "xl", transform: "translateY(-4px)", transition: "0.3s" }}
                >
                    <Text><b>Complaint No : </b>{detail.complaintNumber}</Text>
                    <Text><b>Date: </b>{detail.dateOfComplaint}</Text>
                    <Text><b>Time: </b>{detail.timeOfComplaint}</Text>
                    <Box mt={2} mb={2}>
                    <Image src={detail.imageUrl} alt="Uploaded Trash" boxSize="200px" />
                    </Box>
                    <Text><b>Location: </b>{detail.location}</Text>
                    <Text><b>Status: </b>{detail.status}</Text>
                </Box>
                ))}
            </SimpleGrid>
            </VStack>
         </Box>

        </SimpleGrid>
      </Fade>
      <Footer />
    </VStack>
  );
  

};

export default UploadContent;
