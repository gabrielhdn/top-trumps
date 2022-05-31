import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <form className="main-form">

        <label htmlFor="name-input" className="form-label">
          name
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input" className="form-label">
          description
          <textarea
            data-testid="description-input"
            id="description-input"
            name="cardDescription"
            maxLength={120}
            value={ cardDescription }
            onChange={ onInputChange }
            className="description-input"
          />
        </label>

        <label htmlFor="attr1-input" className="form-label">
          bloodlust
          <input
            type="number"
            data-testid="attr1-input"
            id="attr1-input"
            name="cardAttr1"
            placeholder='max: 90'
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input" className="form-label">
          stealth
          <input
            type="number"
            data-testid="attr2-input"
            id="attr2-input"
            name="cardAttr2"
            placeholder='max: 90'
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input" className="form-label">
          intelligence
          <input
            type="number"
            data-testid="attr3-input"
            id="attr3-input"
            name="cardAttr3"
            placeholder='max: 90'
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input" className="form-label">
          image
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            className="image-input"
          />
        </label>

        <label htmlFor="rare-input" className="form-label">
          rarity
          <select
            data-testid="rare-input"
            id="rare-input"
            name="cardRare"
            className="select-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="rare">rare</option>
            <option value="very rare">very rare</option>
          </select>
        </label>

        <label htmlFor="trunfo-input" className="form-label">
          {
            hasTrunfo ? <p>you've already got a Top Trump in your deck!</p> : <input
              id="trunfo-input"
              type="checkbox"
              data-testid="trunfo-input"
              name="cardTrunfo"
              className="checkbox-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          }
        </label>

        <button
          data-testid="save-button"
          className="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          SAVE
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
