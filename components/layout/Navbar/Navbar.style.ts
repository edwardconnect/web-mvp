import styled from 'styled-components';

const Nav = styled.nav`
  background: white;
  max-width: 1360px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  position: sticky;
  top: 0;
  padding: 25px 0px;
  justify-content: space-between;
`;

const NavImage = styled.img`
  max-height: 40px;
`;

const NavItem = styled.div`
  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }
`;

export default {
  Nav,
  NavImage,
  NavItem,
}