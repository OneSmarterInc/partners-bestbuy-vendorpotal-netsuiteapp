import { Text, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import plan from '../assets/buy 3.png';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Plan = () => {

    return(
        <>
        <Navbar/>
        <Image src={plan} w={'91%'} m={'auto'}></Image>
        {/* <Image src={plan} w={'72%'} m={'auto'}></Image> */}
        </>
    )};
export default Plan;