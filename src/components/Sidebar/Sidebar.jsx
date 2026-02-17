import { useState } from 'react';
import Icon from '../Icon/Icon';
import './Sidebar.scss';

const homeItem = { icon: 'home', label: 'Home', id: 'home' };

const menuItems = [
  { icon: 'shop', label: 'Shops', id: 'shops' },
  { icon: 'bank', label: 'Banks', id: 'banks' },
  { icon: 'phone', label: 'Phone Banking', id: 'phone-banking' },
  { icon: 'pers-info', label: 'Personal Info', id: 'personal-info' },
  { icon: 'look-info', label: 'LockUp Info', id: 'lockup-info' },
  { icon: 'document', label: 'Real Documents', id: 'real-documents' },
  { icon: 'paypal', label: 'Paypal', id: 'paypal' },
  { icon: 'collection', label: 'Basses Collection', id: 'basics-collection' },
  { icon: 'rdp', label: 'RDP', id: 'rdp' },
  { icon: 'users', label: 'Self-made Accounts', id: 'self-made-accounts' },
  { icon: 'google', label: 'Google Voice', id: 'google-voice' },
  { icon: 'email', label: 'Emails USA', id: 'emails-usa' },
  { icon: 'admin', label: 'Web Admains', id: 'web-admins' },
  { icon: 'cpn', label: 'Pre-made CPN', id: 'pre-made-cpn' },
  { icon: 'call', label: 'Bomber Call', id: 'bomber-call' },
];

const Sidebar = ({ isOpen, onClose }) => { 
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (id) => {
    setActiveItem(id);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && <div className="sidebar__overlay" onClick={onClose} />}
      
      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <nav className="sidebar__nav">
          <button
            className="sidebar__item sidebar__item--home"
            onClick={() => handleItemClick('home')}
          >
            <span className="sidebar__icon">
              <Icon name={homeItem.icon} category="sidebar" size={20} />
            </span>
            <span className="sidebar__label">{homeItem.label}</span>
          </button>

          <div className="sidebar__divider">
            <Icon name="line" category="sidebar" />
          </div>

          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`sidebar__item ${activeItem === item.id ? 'sidebar__item--active' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="sidebar__icon">
                <Icon name={item.icon} category="sidebar" size={20} />
              </span>
              <span className="sidebar__label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
