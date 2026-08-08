import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <main className="notfound-page container">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Looks like you've ventured into the abyss of the Dark Web.</p>
    <Link to="/" className="btn btn-primary">Back to Home</Link>
  </main>
);

export default NotFound;
