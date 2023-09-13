import React, { useState } from 'react';
import { Box, Button, Image, Input, VStack, HStack, Text, Heading, FormControl, FormLabel, useToast, SimpleGrid } from '@chakra-ui/react';
import { ChakraProvider, Fade } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

type ImageDetails = {
    complaintNumber: number;
    dateOfComplaint: string;
    timeOfComplaint: string;
    imageUrl: string;
    location: string;
    status: 'submitted';
    api_Response: any;
  };
  
const UploadContent = () => {

    const [imageDetails, setImageDetails] = useState<ImageDetails[]>([]);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [location, setLocation] = useState<string>("");
    const [apiResponse, setApiResponse] = useState<any>(null);
    const toast = useToast();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCurrentImage(reader.result as string);
    };
  };

  const handleUpload = async () => {
    if (currentImage && location) {
        const currentDate = new Date();
        const complaintNumber = imageDetails.length + 1;

        // Start by making the API call
        try {
            const response = await axios({
                method: "POST",
                url: "https://detect.roboflow.com/garbage-classification-qmp4x/11",
                params: {
                    api_key: "UZKg5qOB4uV1SEipe4ec"
                },
                data: currentImage.split(',')[1],  // Splitting to send only the Base64 data without the prefix (data:image/png;base64,)
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });

            if (response && response.data) {
                console.log(response.data?.predictions[0]?.class); // You can further process this data if needed
                setApiResponse(response.data?.predictions[0]?.class);
            }

            setImageDetails([...imageDetails, {
                complaintNumber,
                dateOfComplaint: currentDate.toLocaleDateString(),
                timeOfComplaint: currentDate.toLocaleTimeString(),
                imageUrl: currentImage,
                location,
                status: 'submitted',
                api_Response : response.data?.predictions[0]?.class,  // Storing the API response, if you want to display any specific data from it.
            }]);

            setCurrentImage(null);
            setLocation("");

            toast({
                title: "Complaint registered successfully.",
                description: "Your trash image and location are saved.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });

        } catch (error : any) {
            console.error("Error uploading image:", error.message);
            toast({
                title: "Error uploading image.",
                description: error.message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }
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
                  {/* Example to display a specific field from the response, adjust accordingly */}
                  {detail.api_Response && <Text><b>Trash category: </b>{(detail.api_Response)}</Text>}
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
