import React from 'react';
import './Icon.scss';

const Icon = ({ name, size = 24, className = '', category = 'ui', ...props }) => {
  const iconPath = `/icons/${category}/${name}.svg`;
  const isLogo = name === 'logo';
  const isCategory = category === 'categories';
  const isHeader = category === 'header';
  const isSidebar = category === 'sidebar';
  const iconClass = `icon ${isLogo ? 'icon--logo' : ''} ${isCategory ? 'icon--category' : ''} ${isHeader ? 'icon--header' : ''} ${isSidebar ? 'icon--sidebar' : ''} ${className}`.trim();
  
  return (
    <img
      src={iconPath}
      alt={name}
      width={size}
      height={size}
      className={iconClass}
      onError={(e) => {
        console.warn(`Icon not found: ${category}/${name}`);
        e.target.style.display = 'none';
      }}
      {...props}
    />
  );
};

export default Icon;
