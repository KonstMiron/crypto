import Icon from '../Icon/Icon';
import './DomainBanner.scss';

const domains = [
  'CYPHER.MARKET.SH',
  'CYPHER.MARKET.WIN',
  'CYPHER.MARKET.WS',
  'CYPHER.MARKET.AC',
  'CYPHER.MARKET.LTD',
];
 
const torDomains = [
  'cqngd74mtjd5snnwq5uqd3qeok3hz36yrt2iu5mpzgxcqhbpbfpxyjid.onion',
  'blackbeto3pz57ufbispqovwe3wzglpfsiqw2wah24medx72bluclad onion',
];

const DomainBanner = () => {
  return (
    <div className="domain-banner">
      <div className="domain-banner__header">
        <h2 className="domain-banner__title">We use ONLY these domains!</h2>
        <button className="domain-banner__toggle">
          <Icon name="arrow" category="ui" size={24} />
        </button>
      </div>

      <div className="domain-banner__content">
        <p className="domain-banner__warning">
          <strong>Be careful and double-check it!</strong> We are not responsible for your purchases purchases outside of the marketplace!
        </p>

        <div className="domain-banner__domains">
          {domains.map((domain, index) => (
            <span key={index} className="domain-banner__domain">
              {domain}
            </span>
          ))}
        </div>

        <div className="domain-banner__line">
          <img src="/src/assets/icons/sidebar/line.svg" alt="" />
        </div>

        <div className="domain-banner__tor-section">
          <h3 className="domain-banner__tor-title">Tor domain:</h3>
          {torDomains.map((domain, index) => (
            <p key={index} className="domain-banner__tor-domain">
              {domain}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomainBanner;
