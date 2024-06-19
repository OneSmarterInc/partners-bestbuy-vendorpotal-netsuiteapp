import React from 'react';
import { Box, Heading, Button, VStack, HStack, Image } from '@chakra-ui/react';
import logo from '../assets/bby_logo.png';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router
import { FaHome } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';

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
        <Box bg="#060270" color="white" py={4} px={8}>
            <HStack justifyContent="space-between">
                <HStack>
                    <Image src={logo} style={styles.nav} alt="BestBuy Logo" onClick={() => { navigate('/home') }} title='home' cursor={'pointer'}/> 
                    <Heading as="h1" size="lg" onClick={() => { navigate('/home') }} title='home' cursor={'pointer'}>   Partner Portal</Heading>
                    {/* <Button variant="link" colorScheme="white" onClick={() => { navigate('/home') }}> <FaHome size={30} style={{ marginRight: '10px' }} /></Button> */}
                </HStack>
                <HStack spacing={4}>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/inventory') }}>Inventory</Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/order') }}>Order</Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/remittances') }}>Remittances</Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/planing') }}>Planing</Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/sustainability') }}>Sustainability</Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/news') }}>News</Button>
                    <Button variant="link" colorScheme="white" onClick={() => { navigate('/') }}> <MdLogout size={30} style={{ marginRight: '10px' }} /></Button>
                </HStack>
            </HStack>
        </Box>
    );
};

export default Navbar;
