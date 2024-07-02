import React from 'react';
import { Flex, View, Heading, Text, Divider, ActionButton } from '@adobe/react-spectrum';
import { NavLink } from 'react-router-dom';


import './sidebar.css';
import dasboard from '../utility/Image/Icondasboard.png';
import home from '../utility/Image/home.png';

function Sidebar() {
    return (
        <View backgroundColor="gray-2000" UNSAFE_className='sidebar' padding="size-200" width="272"  marginTop="0px">
            <Flex direction="column" gap="size-200">
                <Flex alignItems="center" gap="size-100">
                <img src={home} alt="home" width="18px" height="18px" />
                    <Text fontSize="14px" >Home</Text>
                </Flex>
                <Flex alignItems="center" gap="size-100">
                   <img src={dasboard} alt="Das" width="18px" height="18px" />
                    <Text fontSize="14px">Dashboard</Text>
                </Flex>
                <Divider size="S" />
                <Heading level={3}>Services</Heading>
                <NavLink to="/" activeClassName="active-link" style={{backgroundColor:'#0000000F'}} className="sidebar-link">Airports</NavLink>
                <NavLink to="/" activeClassName="active-link"  style={{textDecoration:'none'}}>Videos</NavLink>
                <Divider size="S" />
                <Heading level={3}>Others</Heading>
                <Text fontSize="14px">List 1</Text>
                <Text fontSize="14px">List 2</Text>
                <Text fontSize="14px">List 3</Text>
            </Flex>
        </View>
    );
}

export default Sidebar;
