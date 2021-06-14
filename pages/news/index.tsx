import { NextPage } from 'next';
import React from 'react';
import PageLayout from '../../components/layout/PageLayout/PageLayout';
import NewsList from '../../components/news/NewsList/NewsList';


const News: NextPage = () => {
  return (
    <PageLayout>
      <NewsList />
    </PageLayout>
  );
};

export default News;