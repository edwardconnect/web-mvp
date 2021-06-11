import React from 'react';

import Navbar from '../Navbar/Navbar';
import Styles from './PageLayout.style'

const PageLayout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <Styles.ChildrenContainer>
      {children}
    </Styles.ChildrenContainer>
  </>
);

export default PageLayout;