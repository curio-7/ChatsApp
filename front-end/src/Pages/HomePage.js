import React, { useEffect } from 'react'
import { Container,Box,Text,Tab,TabList,TabPanel,TabPanels,Tabs } from "@chakra-ui/react"
import Login from "../components/Authentication/Login"
import SignUp from "../components/Authentication/SignUp"
import {useHistory} from "react-router-dom"

const HomePage = () => {

    const history = useHistory();
    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem("userInfo"));

      if (user) history.push("/chats");
    },[history]);

  return <Container maxW='xl' color='black' centerContent="true">
    <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
      <Text fontSize="4xl" fontFamily="Work sans" color="black">Chats-App</Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color="black">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
  </Container>
}

export default HomePage
