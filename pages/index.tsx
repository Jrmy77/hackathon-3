// pages/index.tsx
import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import SearchBar from '../components/SearchBar';
import LocalStorageData from '../components/LocalStorageData'; // Importez le composant LocalStorageData

const Home: NextPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
      <Box w="90%" maxW="1200px" mx="auto" pt="20px">
        {/* Placez la barre de recherche où vous le souhaitez */}
        <SearchBar />
        {/* Ajoutez le composant LocalStorageData ici */}
        <LocalStorageData />
        {/* Le reste du contenu de votre page */}
      </Box>
    </Flex>
  );
};

export default Home;
