import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
   0% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;


const BannerWrapper = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: 1s ease 0s 1 ${rotate};
`;

const Slogan = styled.div`
  font-family: Avenir Next, Montserrat, sans-serif body;
  font-size: 50px;
  max-width: 900px;
  margin-bottom: 20px;
  text-align: left;
`;

const Description = styled.div`
  font-size: 24px;
  max-width: 900px;
`;

export default {
  BannerWrapper,
  Slogan,
  Description
}