import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faUserGroup ,faSeedling,faHandHoldingDollar,faHeart,faLeaf} from '@fortawesome/free-solid-svg-icons'; // Importez l'icône faUserGroup

const FilterMenu: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    // Dispatchez une action Redux ou effectuez d'autres opérations en fonction du filtre sélectionné
  };
  const iconStyle = { fontSize: '126px' };
  return (
    <Box border="1px solid white" borderRadius="md" p="1rem">
     


      <Flex align="center" >
        <Flex>
        <Button variant={activeFilter === 'ALL' ? 'solid' : 'outline'} onClick={() => handleFilterClick('ALL')}>
            ALL
          </Button>
         
        <FontAwesomeIcon icon={faUserGroup} onClick={() => handleFilterClick('filter1')} style={{fontSize: '126px' , marginRight: '10px' }} />
          <FontAwesomeIcon icon={faSeedling} onClick={() => handleFilterClick('filter1')} style={{ marginRight: '10px' }} />
          <FontAwesomeIcon icon={faHandHoldingDollar} onClick={() => handleFilterClick('filter1')} style={{ marginRight: '10px' }} />
          <FontAwesomeIcon icon={faHeart} onClick={() => handleFilterClick('filter1')} style={{ marginRight: '10px' }} /> 
       
          
        </Flex>

        
        
        <Flex ml="auto" align="center">
        <FontAwesomeIcon icon={faLeaf} onClick={() => handleFilterClick('filter1')} style={{ marginRight: '10px' }} />
          <Button variant={activeFilter === 'ALL' ? 'solid' : 'outline'} onClick={() => handleFilterClick('ALL')}>
            ALL
          </Button>
        </Flex>
      </Flex>






      
         
        
    </Box>
  );
};

export default FilterMenu;




