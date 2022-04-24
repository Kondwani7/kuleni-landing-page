import React,{useState} from 'react'
import { Box,Text, Grid, HStack, Flex, Heading, AspectRatio, Image, Input, Button, Select } from '@chakra-ui/react'
const Signup = () => {
     const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <Box 
        w="full"
        bg="blue.900" px="200px" py="130px"
        backgroundImage="/img/background.png"
        backgroundSize="cover" >
        <Grid  templateColumns="repeat(2, 1fr)" gap={52}>
            <Flex direction="column" alignItems="center" pb="40px"> 
                <Heading fontSize={74} letterSpacing="6px" color="white" mt="16">
                    Kuleni 365
                </Heading>
                <Heading color="blue.200" fontSize="3xl">Building For you</Heading>
                <Box maxW="600px" mt="16">
                    <Text color="whiteAlpha.800" pb="20px" fontSize="lg">
                        Access the construction hub for talented construction workers. 
                        we provide a platform that allows to hire,rate and assemble
                        construction team(s) that meets your current bulinding requirements.
                    </Text>
                </Box>
            </Flex>
            <Box  pb="20px" mt="20" alignItems="center">
                <form>
                     <Input
                        backgroundColor="#FAF3F3"
                        opacity="0.8"
                        focusBorderColor="white"
                        type="text"
                        variant='outline'
                        size="lg"
                        fontWeight="400"
                        width="100%"
                        required
                        placeholder='Enter your full name' mb="10"/>
                    <Input
                        backgroundColor="#FAF3F3"
                        opacity="0.8"
                        focusBorderColor="white"
                        type="email"
                        variant='outline'
                        required
                        size="lg"
                        fontWeight="400"
                        width="100%"
                        placeholder='Enter your Email address' mb="10"/>
                    <Select name="users"
                        backgroundColor="#FAF3F3"
                        opacity="0.8"
                        focusBorderColor="white"
                        type="email"
                        variant='outline'
                        required
                        size="lg"
                        fontWeight="400"
                        width="100%"
                        mb="10">
                        <option value="">User</option>
                        <option value="">Construction Worker</option>
                        <option value="">Both</option>
                    </Select>
                   
                    <Button onClick={()=> {handleSubmit}} color="#ffff"  ml="36" size="lg" type="submit" variant="outline">
                        Join the Kuleni Family
                    </Button>                    
                </form>
            </Box>         
        </Grid>
        
        
    </Box>
  )
}

export default Signup