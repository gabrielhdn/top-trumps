import React from 'react';
import PropTypes from 'prop-types';
import { GiCrossedSwords, GiHood, GiBrain } from 'react-icons/gi';
import './DeckCard.css';

class DeckCard extends React.Component {
  render() {
    const { card, removeCard } = this.props;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = card;
    return (
      <section className="card-section">
        <div className="mini-card">
          <div className="mini-img-div">
            {cardImage && <img className="mini-image-card" src={ cardImage } alt={ cardName } />}
          </div>
          <h3 className="mini-name-card">{cardName}</h3>
          <p className="mini-description-card">{cardDescription}</p>
          <div className="mini-att-div">
            <p className="mini-attributes"><GiCrossedSwords color="red" size={15} /> bloodlust <span>|</span> {cardAttr1}</p>
            <p className="mini-attributes"><GiHood color="#ad60ff" size={15} /> stealth <span>|</span> {cardAttr2}</p>
            <p className="mini-attributes"><GiBrain color="#498dff" size={15} /> intelligence <span>|</span> {cardAttr3}</p>
          </div>
          <div className="mini-trunfo-div">
            <p className="mini-rare-card">{cardRare}</p>
            {cardTrunfo && <h4 className="mini-trunfo-card">Top Trump</h4>}
          </div>
        </div>
        <button
          type="button"
          data-testid="delete-button"
          className="remove-button"
          onClick={ () => removeCard(cardName, cardTrunfo) }
        >
          remove
        </button>
      </section>
    );
  }
}

DeckCard.propTypes = {
  removeCard: PropTypes.func.isRequired,
  card: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.number.isRequired,
    cardAttr2: PropTypes.number.isRequired,
    cardAttr3: PropTypes.number.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }).isRequired,
};

export default DeckCard;
