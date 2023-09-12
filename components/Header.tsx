import { Box, Button, Flex } from '@chakra-ui/react';
import Link from 'next/link';

const Header = () => {
  return (
    <Flex justify="space-between" p={8} boxShadow="md" bgColor={"green.200"}>
      <Box>
        <p className='text-4xl'>Trash tagging</p>
      </Box>
      <Flex>
        <Link href="/">
          <Button variant="ghost" mr={2}>
            Home
          </Button>
        </Link>
        <Link href="/how-it-works">
          <Button variant="ghost" mr={2}>
            How It Works
          </Button>
        </Link>
        <Link href="/complain">
          <Button variant="ghost" mr={2}>
            Complaint
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost">
            Contact
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
