import DomainBanner from '../../components/DomainBanner/DomainBanner';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.scss';

const products = [
  {
    id: 1,
    category: 'bank',
    title: 'city.com',
    categoryName: 'Banks',
    count: '+137 pcs',
    seller: 'Dantenifinity',
    date: '23/09/2025',
    time: '16:47',
  },
  {
    id: 2,
    category: 'shop',
    title: 'creditkarma.com',
    categoryName: 'Shops',
    count: '+107 pcs',
    seller: 'Smesz',
    date: '23/09/2025',
    time: '16:37',
  },
  {
    id: 3,
    category: 'bank',
    title: 'diskover.com',
    categoryName: 'Banks',
    count: '+31 pcs',
    seller: 'Smesz',
    date: '23/09/2025',
    time: '16:32',
  },
  {
    id: 4,
    category: 'bank',
    title: 'diskover.com',
    categoryName: 'Banks',
    count: '+12 pcs',
    seller: 'Smesz',
    date: '23/09/2025',
    time: '16:31',
  },
  {
    id: 5,
    category: 'business',
    title: 'TruistBank_PhoneBanking',
    categoryName: 'Bussines',
    count: '+7 pcs',
    seller: 'laporsh077',
    date: '23/09/2025',
    time: '15:05',
  },
  {
    id: 6,
    category: 'shop',
    title: 'creditkarma.com',
    categoryName: 'Shops',
    count: '+107 pcs',
    seller: 'Smesz',
    date: '23/09/2025',
    time: '16:37',
  },
  {
    id: 7,
    category: 'bank',
    title: 'city.com',
    categoryName: 'Banks',
    count: '+137 pcs',
    seller: 'Dantenifinity',
    date: '23/09/2025',
    time: '16:47',
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <DomainBanner />
        
        <div className="home__products">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
