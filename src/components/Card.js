import React from 'react';
import PropTypes from 'prop-types';
import { GiCrossedSwords, GiHood, GiBrain } from 'react-icons/gi';
import './Card.css';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="preview">
        <section className="preview-section">
          <div className="img-div">
            {cardImage && <img data-testid="image-card" src={ cardImage } alt={ cardName } />}
          </div>
          <h3 className="name-card">{cardName}</h3>
          <p className="description-card">{cardDescription}</p>
          <div className="att-div">
            <p className="attributes"><GiCrossedSwords color="red" size={18} /> bloodlust <span>|</span> {cardAttr1}</p>
            <p className="attributes"><GiHood color="#ad60ff" size={18} /> stealth <span>|</span> {cardAttr2}</p>
            <p className="attributes"><GiBrain color="#498dff" size={18} /> intelligence <span>|</span> {cardAttr3}</p>
          </div>
          <p className="rare-card">{cardRare}</p>
          {cardTrunfo && <h4 className="trunfo-card">Top Trump</h4>}
          {/* <div className="cover"></div> */}
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
