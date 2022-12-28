import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
          <h1>Bienvenue !</h1>
      <Link to="/team-selection">
        <button>Commencer</button>
      </Link>
    </div>
  );
}

export default Home;
