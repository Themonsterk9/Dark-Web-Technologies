import React from 'react';
import './Button.css';
import type { LinkProps } from 'react-router-dom';

type ButtonProps = {
  primary?: boolean;
  as?: React.ElementType;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & Partial<LinkProps>;

const Button: React.FC<ButtonProps> = ({ primary = false, as: Component = 'button', children, ...rest }) => {
  const className = `btn ${primary ? 'btn-primary' : ''}`;
  return <Component className={className} {...rest}>{children}</Component>;
};

export default Button;
