import { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
// Completed

import { Container, StyledButton } from './styles';

export const DropdownMenu = ({
  isLoading = false,
}): JSX.Element => {

const [open, setOpen] = useState(false);

  return (
    <Container>
      <FaEllipsisV onClick={() => setOpen((state) => !state)} size={22} />
      <ul className={`options ${open ? 'menu-visible' : ''}`}>
        <StyledButton  className="student-doubt">
          <li>{isLoading ? 'Carregando...' : ''}</li>
        </StyledButton>
      </ul>
    </Container>
  );

};
