import React from 'react';
import { Flex, Heading, Image, View } from '@adobe/react-spectrum';
import NavImg from "../utility/Image/Navimg.png" 

function Navbar() {
    return (
        <View backgroundColor="gray-100" padding="size-200">
            <Flex direction="row" justifyContent="space-between" alignItems="center">
                <Heading level={1}>hava havai</Heading>
                <img 
                    src={NavImg}
                    alt="No_image" 
                    
                />
            </Flex>
            
        </View>
    );
}

export default Navbar;
