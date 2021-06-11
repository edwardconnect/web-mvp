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
`;

const NavImage = styled.img`
  max-height: 40px;
`;

export default {
  Nav,
  NavImage
}