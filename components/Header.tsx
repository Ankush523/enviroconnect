import { Box, Heading, Flex, Spacer } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Header = () => {
  return (
    <Flex bg="teal.500" w="100%" p={4} color="white" boxShadow="md">
      <Box p="2">
        <FaTrash />
      </Box>
      <Box p="2">
        <Heading size="md">Trash Tagging Project</Heading>
      </Box>
      <Spacer />
    </Flex>
  );
}

export default Header;
