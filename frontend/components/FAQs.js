import { Box, Flex, Select, Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FAQs = () => {
  return (
<Box w="full" alignItems="center"  backgroundColor={"#f5f6f7"} p="24" >
    <Box ml="24" maxW="6xl" alignItems="center">
      <Stack size spacing={6}>
          <Select size="lg" textAlign="center" placeholder='When is Kuleni Launching'>
            <option>We are launching soon</option>
          </Select>
          <Select size="lg" textAlign="center" placeholder='Where are we located?'>
            <option>Primarily in lusaka with the contact details provided below</option>
          </Select>
          <Select size="lg" textAlign="center" placeholder='Do I have to pay to join'>
            <option>No! join the Kuleni Family for free as a user or construction worker</option>
          </Select>
          <Select size="lg" textAlign="center" placeholder='If I register as a construction worker under Kuleni is it full time employment'>
            <option>No. They are under a freelauncher agreement attached Provided here 
            </option>
          </Select>
          <Select size="lg" textAlign="center" placeholder='When is Kuleni Launching'>
            <option>We only charge customers a commission fee (percentage) when they want to hire a worker</option>
          </Select>
      </Stack>
    </Box>
        
    </Box>
  )
}

export default FAQs