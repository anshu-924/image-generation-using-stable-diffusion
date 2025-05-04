import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  mobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  active = false,
  mobile = false
}) => {
  return (
    <a 
      href={href}
      className={`
        ${mobile ? 'text-lg py-2' : 'text-base'} 
        font-medium transition-colors duration-200
        ${active 
          ? 'text-indigo-600' 
          : 'text-gray-700 hover:text-indigo-600'
        }
      `}
    >
      {children}
    </a>
  );
};