import React from 'react';
import Styles from './News.style';

interface NewsProps {
  author: string,
  date: string,
  title: string,
  Body: any;
}

const News: React.FC<NewsProps> = ({
  author,
  date,
  title,
  Body,
}) => {
  return (
    <Styles.NewsCard>
      <h1>{title}</h1>
      <div>Posted by {author} on {date}</div>
      <Body/>
    </Styles.NewsCard>
  )
};

export default News;