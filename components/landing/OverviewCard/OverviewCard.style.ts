import styled from 'styled-components';

const CardWrapper = styled.div<any>`
  display: flex;
  flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const HeaderDescription = styled.div`
  font-size: 20px;
`;

const HeaderContainer = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ContentContainer = styled.div`
  flex: 2 0 0;
  border: 1px solid lightgray;
  border-radius: 20px;
  padding: 30px;
`

const Title = styled.div`
  font-size: 20px;
`

const Description = styled.p`
  font-size: 16px;
`;

const Wrapper = styled.div`
  flex: 2 0 0;
`;

export default {
  CardWrapper,
  Header,
  HeaderDescription,
  HeaderContainer,
  ContentContainer,
  Title,
  Description,
  Wrapper,
}