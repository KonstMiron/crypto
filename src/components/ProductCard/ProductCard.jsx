import Icon from '../Icon/Icon';
import './ProductCard.scss';

const ProductCard = ({ category, title, categoryName, count, seller, date, time }) => {
  return (
    <div className="product-card">
      <div className="product-card__icon">
        <Icon name={category} category="categories" size={24} />
      </div>
      
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__meta">
          <span className="product-card__category">{categoryName}</span>
          <span className="product-card__count">{count}</span>
          <span className="product-card__seller">{seller}</span>
        </div>
      </div>

      <div className="product-card__timestamp">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default ProductCard;
