import styled from 'styled-components';

const NewsCard = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }

  padding: 50px 0;

  img {
    max-width: 800px;
    margin: 0 auto;
    display: block;;
  }
`;

export default {
  NewsCard,
}