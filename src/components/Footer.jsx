import { Box, Text, Image, HStack } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/bby_logo.png';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={4} px={8}>
      <HStack spacing={4} justify="center" align="center">
        <Image src={logo} alt="Best Buy Logo" h="50px" w="85px" />
        <Text fontSize="sm" textAlign="left">
          © 2024 Best Buy All rights reserved, <br/> BEST BUY and BESTBUY.COM are trademarks of Best Buy and its affiliated companies.
        </Text>
      </HStack>
    </Box>
  );
};

export default Footer;
