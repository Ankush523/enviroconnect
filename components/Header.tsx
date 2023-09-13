import { Box, Button, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import enviroconnect from "../images/enviroconnect.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <Flex justify="space-between" p={5} boxShadow="md" bgColor={"green.200"}>
        <Box>
          <Image src={enviroconnect} alt="EnviroConnect" width={200} height={50} />
        </Box>
        <Flex mt="3">
          <Link href="/">
            <Button variant="ghost" mr={2}>
              Home
            </Button>
          </Link>
          <Button variant="ghost" mr={2}>
            How It Works
          </Button>
          <Link href="/complain">
            <Button variant="ghost" mr={2}>
              Complaint
            </Button>
          </Link>
          <Button variant="ghost" mr={2}>
            Contact
          </Button>
          <Button variant="outline" onClick={onOpen}>
            Sign In
          </Button>
        </Flex>
      </Flex>

      <SignInModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const SignInModal = ({ isOpen, onClose }) => {
  const router = useRouter();
  
  const [signInType, setSignInType] = useState(null); // 'user' or 'authority'

  const handleSignIn = () => {
    if (signInType === 'user') {
      // handle user sign-in logic (if any)
    } else if (signInType === 'authority') {
      // handle authority sign-in logic (if any)
    }
    
    onClose();
    router.push('/complain');  // Navigate to the complain page
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign In</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {!signInType && (
            <Flex flexDirection="column">
              <Button mb={3} onClick={() => setSignInType('user')}>Sign in as User</Button>
              <Button onClick={() => setSignInType('authority')}>Sign in as Authority</Button>
            </Flex>
          )}

          {signInType === 'user' && (
            <>
              <FormControl>
                <FormLabel>Aadhar Number</FormLabel>
                <Input placeholder="Enter Aadhar Number" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Phone Number</FormLabel>
                <Input placeholder="Enter Phone Number" />
              </FormControl>
            </>
          )}

          {signInType === 'authority' && (
            <FormControl>
              <FormLabel>Authority ID</FormLabel>
              <Input placeholder="Enter Authority ID" />
            </FormControl>
          )}
        </ModalBody>

        <ModalFooter>
          {signInType && (
            <>
              <Button colorScheme="blue" mr={3} onClick={handleSignIn}> 
                Sign In
              </Button>
              <Button variant="ghost" mr={3} onClick={() => setSignInType(null)}>
                Back
              </Button>
            </>
          )}
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Header;
