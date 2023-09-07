import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { ImportReclaimProofs } from '@reclaimprotocol/reclaim-react';

function App() {
  return (
    <ChakraProvider>
      <Flex alignItems='center' justifyContent='center' w='100%' h='100vh'>
      <ImportReclaimProofs label='Import from Reclaim' webHook='https://mybackend.com' isProofsReceived={true} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
