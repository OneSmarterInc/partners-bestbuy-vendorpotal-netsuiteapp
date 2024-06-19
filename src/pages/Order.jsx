import React from 'react';
import { Box, Heading, Text, Button, VStack, HStack, Image } from '@chakra-ui/react';
import group from '../assets/group.jpg';
import inventory from './Inventory.json';
import Navbar from '../components/Navbar';
const Order = () => {
  return (
    <Box >
      {/* Header */}
     <Navbar />

      {/* Main Section */}
    <Heading p={'10px'}>Inventory </Heading>

    
      </Box>

      
  );
};

export default Order;
