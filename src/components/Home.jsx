import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenue !</h1>
      <Link to="/menu">
        <button>Commencer</button>
      </Link>
    </div>
  );
}

export default Home;
