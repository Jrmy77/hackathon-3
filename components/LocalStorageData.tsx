import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  FormControl,
  Heading,
  FormLabel,
  Input,
  Textarea,
  Button,
  Checkbox,
  SimpleGrid,
  VStack,
  Center,
  GridItem,
} from '@chakra-ui/react';

export default function Project() {
  const router = useRouter();

  // ... (your existing code)

  // Function to retrieve data from local storage
  const getFormDataFromLocalStorage = () => {
    const retrievedData = localStorage.getItem('allFormResponses');
    if (retrievedData) {
      return JSON.parse(retrievedData);
    }
    return [];
  };

  // State to store the retrieved data
  const [formDataFromLocalStorage, setFormDataFromLocalStorage] = useState(
    getFormDataFromLocalStorage()
  );

  // Load data from local storage when the component mounts
  useEffect(() => {
    setFormDataFromLocalStorage(getFormDataFromLocalStorage());
  }, []);

  return (
    <Box maxW="1000px" my={10} mx={10}>
      {/* Your existing form code here */}
      
      {/* Display cards for data from local storage */}
      {formDataFromLocalStorage.length > 0 && (
        <Box my={5}>
        
          <SimpleGrid columns={3} spacing={4}>
            {formDataFromLocalStorage.map((data, index) => (
              <GridItem key={index}>
                <VStack
                  spacing={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  p={4}
                  align="left"
                >
                  <Heading size="md">{data.title}</Heading>
                  <Box>
                    <strong>Location:</strong> {data.location}
                  </Box>
                  <Box>
                    <strong>Description:</strong> {data.description}
                  </Box>
                  <Box>
                    <strong>Description:</strong> {data.environmentalAction}
                  </Box>
                  
                  {/* Add more fields as needed */}
                </VStack>
              </GridItem>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}
