import React from 'react'
import { Heading, Box, Flex, Grid} from '@chakra-ui/react'
import ProductFeature from './ProductFeature'
import { FcRating } from "react-icons/fc";
import { BsPatchCheck } from "react-icons/bs";
import {GiSandsOfTime} from "react-icons/gi"
import { MdOutlineLocationOn } from "react-icons/md";
import ImageFeature from './ImageFeature';
const WorkerImage = "/img/workers.png"
const PiggBank = "/img/piggy-bank.png"
const BackgroundCheck="/img/background-check.png"
const Map="/img/map.png"
const Rating = "/img/rating.png"
const Time = "/img/hourglass.png"
const Features = () => {
  return (
    <Box w="full" alignItems="center" backgroundColor={"#f5f6f7"}>
      <Flex mb="2" ml="96" p="16" alignItems="center">
        <Heading>What does Kuleni Provide?</Heading>
      </Flex>
        <Grid mt="-16" templateColumns="repeat(3, 1fr)" gap={15}>
          <ImageFeature image={WorkerImage}   feature="Hire & Build your own first-rate team" />
          <ImageFeature image={Time}   feature="Save time looking for talent" />
          <ImageFeature image={PiggBank}   feature="Save money by hiring your ideal worker(s)" />
          <ImageFeature image={Rating}   feature="Rate a worker’s performance" />
          <ImageFeature image={BackgroundCheck}   feature="Background checks are conducted on all workers on the platform" />
          <ImageFeature image={Map}  feature="Find the best workers in your area" />
        </Grid>
    </Box>
  )
}

export default Features