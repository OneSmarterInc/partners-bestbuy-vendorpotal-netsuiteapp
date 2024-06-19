import React from 'react';
import { Box, Heading, Button, VStack, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/bby_logo.png';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router

const Navbar = () => {
    const navigate = useNavigate(); // Hook for navigation
    
    const styles = {
        nav:{
            height: '50px',
            width: '80px',
            marginRight:'10px',
        }
    };
    
    return (
        <Box bg="#6610f2" color="white" py={4} px={8}>
            <HStack justifyContent="space-between">
                <HStack>
                    <Image src={logo} style={styles.nav} alt="BestBuy Logo" /> 
                    <Heading as="h1" size="lg">|  Partner Portal</Heading>
                </HStack>
                <HStack spacing={4}>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/inventory') }}>Inventory</Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/order') }}>Order</Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/remittances') }}>Remittances</Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/planing') }}>Planing</Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/sustainability') }}>Sustainability</Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/news') }}>News</Button>
                    
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/login') }}> -  Logout</Button>
                </HStack>
            </HStack>
        </Box>
    );
};

export default Navbar;
