import React from 'react'
import {
  Box,Center, Icon,useColorModeValue,Heading,Text,Stack,Image,
} from '@chakra-ui/react';
const ImageFeature = ({image, feature}) => {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
            alignItems={"center"}
          rounded={'lg'}
          mt={-12}
          ml="20"
          py={24}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: "#d5e0de",
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
              <Box >
                  <Image  src={image} alt="" objectFit={"cover"} w="100" height={"100"}/>
              </Box>
        </Box>
        <Stack pt="-2" align={'center'} textAlign="center">
          <Heading color={'gray.400'} fontWeight="500" fontSize={'sm'} textTransform={'uppercase'}>
            Product Feature
          </Heading>
          <Heading fontSize={'md'} color="gray.700" >
            {feature}
          </Heading>
          
        </Stack>
      </Box>
    </Center>
  )
}

export default ImageFeature