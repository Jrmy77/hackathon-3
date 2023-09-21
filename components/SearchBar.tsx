// components/SearchBar.tsx
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = () => {
  // Votre code pour gérer la recherche ici

  return (
    <form>
      <InputGroup>
        <Input placeholder="Rechercher..." />
        <InputRightElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
