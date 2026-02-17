import Icon from '../Icon/Icon';
import './Header.scss';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header__left">
        <button className="header__menu-btn" onClick={toggleSidebar}>
          <Icon name="menu" category="header" size={20} />
        </button>
        
        <div className="header__logo">
          <div className="header__logo-icon">
            <Icon name="logo" category="header" size={64} />
          </div>
        </div>

        <div className="header__seller-panel">
          <Icon name="seller" category="header" size={20} />
          <span>Seller panel</span>
          <span className="header__balance">$1669.25</span>
        </div>
      </div>

      <div className="header__right">
        <div className="header__cart-balance">$0.0</div>
        
        <button className="header__btn header__btn--primary">
          <Icon name="wallet" category="header" size={20} />
          <span>Add Funds</span>
        </button>

        <button className="header__btn header__btn--secondary">
          <Icon name="shopping-bag" category="header" size={20} />
          <span>My orders</span>
        </button>

        <button className="header__icon-btn">
          <Icon name="cart" category="header" size={40} />
        </button>

        <button className="header__menu-right">
          <Icon name="menu-right" category="header" size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
