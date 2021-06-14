import React from 'react';
import Link from 'next/link';

import Styles from './Navbar.style';

const Navbar: React.FC = () => (
  <Styles.Nav>
    <Link href="/">
      <a>
        <Styles.NavImage src="images/kinaesis-log.png" />
      </a>
    </Link>
    <Styles.NavItem>
      <Link href="/news">
        <a>News</a>
      </Link>
    </Styles.NavItem>
  </Styles.Nav>
)

export default Navbar;