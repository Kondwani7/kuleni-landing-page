import React from 'react'
import {Text,Image, Container,Table, Th, Link,
  Tfoot, Tr, Td, Thead, Tbody, TableContainer, 
  Box, Heading, HStack, Icon } from "@chakra-ui/react";
import {MdCancel} from "react-icons/md"
import {BsFillCheckCircleFill} from "react-icons/bs"
const CompetitiveAdvantage = () => {
  return (
    <Box w="full" backgroundColor="#509D66" p="24" alignItems="center" d="col">
       <Heading fontSize={40} ml="64" mb="20" fontWeight={"thin"}>
        <Text color={"white"}>What differentiates Kuleni from the competition? </Text>
        </Heading>
      <Container maxW="1080px" backgroundColor="white"  maxWidth="container.xl">
       
        <TableContainer  maxWidth="6xl">
          <Table variant='simple'>
            <Thead>
              <Tr >
                <Th  textAlign="center" > 
                  <Text color={"#093045"} fontWeight="bold" fontSize={"md"}>
                    Product Feature
                  </Text></Th>
                <Th  textAlign="center">
                  <Text color={"#093045"} fontWeight="bold" fontSize={"md"}>
                    Physical Competitors
                    </Text>
                </Th>
                <Th  textAlign="center">
                  <Text color={"#093045"} fontWeight="bold" fontSize={"md"}>
                    Online Competitors
                  </Text>
                  </Th>
                <Th>
                  <HStack spacing={4}  _hover={{
                  textDecoration: 'none',
                  color: "CBE4F7",
                }}>
                    <Image src="/img/company_logo.png" alt="company logo" ml="2" w={14} h={14}/>
                  </HStack>
                </Th>
                
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td textAlign="center">
                  <Text color="#093045" fontWeight="400">
                    Craft a construction team based on your preferences online
                  </Text>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={MdCancel} width={12} height={12} color="#EB3223"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={BsFillCheckCircleFill} width="10" height={10} color="#24C748"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={BsFillCheckCircleFill} width="10" height={10} color="#24C748"/>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">
                  <Text color="#093045" fontWeight="400">
                    Recieve personalized recommendations for
                     <br/>construction  worker(s)  & team(s)                  
                    </Text>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={MdCancel} width={12} height={12} color="#EB3223"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={MdCancel} width={12} height={12} color="#EB3223"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={BsFillCheckCircleFill} width="10" height={10} color="#24C748"/>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">
                  <Text color="#093045" fontWeight="400">
                    Access community-driven reviews on worker(s) performance
                  </Text>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={MdCancel} width={12} height={12} color="#EB3223"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={BsFillCheckCircleFill} width="10" height={10} color="#24C748"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={BsFillCheckCircleFill} width="10" height={10} color="#24C748"/>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">
                  <Text color="#093045" fontWeight="400">
                    All Workers on the platform are vetted via  
                    <Link
                      color="#24C748"
                      _hover={{
                      textDecoration: 'none',
                      color: "#509D66",
                    }} 
                      href="https://www.teveta.org.zm/"> TEVETA</Link>
                  </Text>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={MdCancel} width={12} height={12} color="#EB3223"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={MdCancel} width={12} height={12} color="#EB3223"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={BsFillCheckCircleFill} width="10" height={10} color="#24C748"/>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">
                  <Text color="#093045" fontWeight="400">
                    Rate a worker based on his/her performance
                  </Text>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={MdCancel} width={12} height={12} color="#EB3223"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={BsFillCheckCircleFill} width="10" height={10} color="#24C748"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={BsFillCheckCircleFill} width="10" height={10} color="#24C748"/>
                  </Box>
                </Td>
              </Tr>
              <Tr>
                <Td textAlign="center">
                  <Text color="#093045" fontWeight="400">
                    Join the platform as a worker or user via  SMS (USSD)
                  </Text>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={MdCancel} width={12} height={12} color="#EB3223"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={MdCancel} width={12} height={12} color="#EB3223"/>
                  </Box>
                </Td>
                <Td textAlign="center">
                  <Box >
                    <Icon as={BsFillCheckCircleFill} width="10" height={10} color="#24C748"/>
                  </Box>
                </Td>
              </Tr>
            </Tbody>
            
          </Table>
        </TableContainer>
      </Container>
    </Box>
  )
}

export default CompetitiveAdvantage