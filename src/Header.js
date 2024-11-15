import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Fibula</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
