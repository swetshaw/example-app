import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ImportReclaimProofs } from '@swetshaw/react-component'
import { ChakraProvider, Flex } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <Flex alignItems='center' justifyContent='center' w='100%' h='100vh'>
      <ImportReclaimProofs label='Import from Reclaim' webHook='jhvh' isProofsReceived={true} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
