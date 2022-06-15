import React from 'react'
import {Heading,Box,Image,Flex,Text,Spacer,Tag,Button,Icon} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import * as API from './services/launches'
import logo from '../src/img/img.png'
import {BsFillCalendarMonthFill} from "react-icons/bs";

const Home = () => {
const [launches,setLaunches]= useState([])
useEffect(()=>{
  API.getAllLaunches().then(setLaunches)
},[])
  return (
    <>
    <Image  margin="4" src={logo} width="300"/>    
    <Heading as="h1" size="lg" margin="4">
      SpaceX launches 
    </Heading>
    <section>
      {
        launches.map(launch=>(
          <Box key ={launch.flight_number} bg="gray.100" padding={4} margin={4} borderRadius='lg'>
          <Flex display="flex">   
          <Text fontSize="2xl">
            Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
          </Text>
          <Spacer></Spacer>
          <Tag p={4} colorScheme={launch.launch_success?"green":"red"}>
          {launch.launch_success?"Success":"Failure"}
          </Tag>
          </Flex>
           <Flex align="center">
            <Icon as={BsFillCalendarMonthFill} color="gray.500"></Icon>
            {""}
            <Text fontSize="sm" ml={1} color="gray.500"> 
            {launch.launch_date_local.split("T")[0]}
            </Text>
           </Flex>
           <Button mt ={2} colorScheme="blue">
            More Details
           </Button>
          </Box>
        ))
        }
    </section>
    </>
  )
}
export default Home;
