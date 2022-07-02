import React, { createContext, useContext, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import { Button } from '../UI/Buttons';

const HeaderContext = createContext<boolean | null>(null);

const StyledHeader = styled.header`
  align-items: center;
  display: grid;
  grid-template-columns: min-content min-content min-content;
  grid-template-areas: 'theme logo burger';
  gap: 2.5rem;
  justify-content: space-between;
  padding: calc(0.5rem * 1.5);
  position: relative;

  & img {
    grid-area: logo;
  }

  & .hamburger {
    z-index: 1;
    grid-area: burger;
  }

  & nav {
    grid-area: nav;
    position: absolute;
    right: 0;
    top: 0;
    background: hsl(var(--clr-neutral-900));
    padding: 64px 32px 32px;
    height: 100vh;
    box-shadow: rgba(0, 0, 0, 0.19) -10px 0px 20px,
      rgba(0, 0, 0, 0.23) -6px 0px 6px;
    transition: transform 450ms ease-in;
    width: 50%;

    &.close {
      transform: translateX(150%);
    }
  }

  & nav ul {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 48rem) {
    grid-template-columns: min-content 1fr min-content;
    grid-template-areas: 'logo nav theme';

    & .hamburger {
      display: none;
    }

    & nav {
      position: static;
      height: auto;
      padding: 0;
      box-shadow: none;
      width: auto;
    }

    & nav.close {
      transform: none;
    }

    & nav ul {
      flex-direction: row;
    }
  }
`;

function Header({
  children,
  logoSrc,
  logoAlt,
}: {
  children: React.ReactElement[];
  logoSrc: string;
  logoAlt: string;
}) {
  const [isClosed, setIsClosed] = useState(true);

  const handleClick = () => {
    setIsClosed((prev) => !prev);
  };

  return (
    <HeaderContext.Provider value={isClosed}>
      <StyledHeader>
        {/* TODO: Cambiar para usar directamente el svg */}
        <img src={logoSrc} alt={logoAlt} />
        {children}
        <Button className='hamburger' onClick={handleClick}>
          <FiMenu />
        </Button>
      </StyledHeader>
    </HeaderContext.Provider>
  );
}

Header.Nav = function Nav({
  children,
}: {
  children: React.ReactElement[];
}): React.ReactElement {
  const isClosed = useContext(HeaderContext);

  return (
    <nav className={`${isClosed ? 'close' : 'open'}`}>
      <ul>{children}</ul>
    </nav>
  );
};

Header.NavItem = function NavItem({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}): React.ReactElement {
  return <li>{children}</li>;
};

export default Header;
