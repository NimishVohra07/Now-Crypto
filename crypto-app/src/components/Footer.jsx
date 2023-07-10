import {  Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";



const Footer = () => {
  return (
    <Box
      bgColor={"black"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
          
Now Crypto App is a mobile application project that provides essential information and guidance on cryptocurrency investments. This will help empowering individuals to make informed decisions and navigate the complex world of cryptocurrencies. 
          </Text>
        </VStack>

        <VStack>
        
          
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
