import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { GenerateProof } from '@reclaimprotocol/reclaim-connect-react';

function App() {

  return (
    <ChakraProvider>
      <Flex alignItems='center' justifyContent='center' w='100%' h='100vh'>
        {/* <ImportReclaimProofs label='Import from Reclaim' webHook='https://mybackend.com' isProofsReceived={true} /> */}
        <GenerateProof
          appID='1bbd6649-deb5-4e60-8dd4-0d6bc8bf7855'
          onProofSubmission={(proofs, sessionId) => { 
            console.log(sessionId)
            console.log(proofs)
            console.log('Proof submitted')
           }}
          onProofSubmissionFailed={() => { }}
          customize = { 
            {
              triggerButton: { 
              text: 'Click here', 
              style: { 

                } 
            },
            modalHeader: { 
              text: 'SCAN the QR to submit proof', 
              style: { 

                } 
            },
            proofSubmissionDetails: { 
              successText: 'Success', 
              failureText: 'Failed', 
              style: { 

                } 
            }} 
          } 
        />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
