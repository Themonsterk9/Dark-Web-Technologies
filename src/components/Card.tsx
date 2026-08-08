import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

type CardProps = {
  title: string;
  status: string;
  link?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, status, link, children }) => (
  <div className="card">
    <div className="card-image" aria-hidden="true" />
    <div className="card-content">
      <h3 className="card-title">
        {link ? <Link to={link}>{title}</Link> : title}
      </h3>
      <p className="card-status">Status: {status}</p>
      {children}
    </div>
  </div>
);

export default Card;
