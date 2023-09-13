import React from 'react';
import { Box, VStack, SimpleGrid, Text, Image } from '@chakra-ui/react';
import { useImage } from '@/components/ImageContext';

const ReviewComplaints = () => {
  const { imageDetails } = useImage();

  return (
    <VStack align="start" spacing={4}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} w="100%">
        {imageDetails.map((detail : any) => (
          <Box
            key={detail.complaintNumber}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            w="100%"
            shadow="md"
            _hover={{ shadow: "xl", transform: "translateY(-4px)", transition: "0.3s" }}
          >
            <Text><b>Complaint No: </b>{detail.complaintNumber}</Text>
            <Text><b>Date: </b>{detail.dateOfComplaint}</Text>
            <Text><b>Time: </b>{detail.timeOfComplaint}</Text>
            <Box mt={2} mb={2}>
              <Image src={detail.imageUrl} alt="Uploaded Trash" boxSize="200px" />
            </Box>
            <Text><b>Location: </b>{detail.location}</Text>
            <Text><b>Status: </b>{detail.status}</Text>
            {detail.api_Response && (
              <Text>
                <b>API Data: </b>
                {detail.api_Response.predictions.map((pred: any, index: any) => (
                  <React.Fragment key={index}>
                    {pred.class}{index !== detail.api_Response.predictions.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </Text>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default ReviewComplaints;
