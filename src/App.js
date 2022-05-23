import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import DeckCard from './components/DeckCard';
import FilterOptions from './components/FilterOptions';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
    this.enableSaveButton = this.enableSaveButton.bind(this);
    this.validateTextInput = this.validateTextInput.bind(this);
    this.validateAttribute = this.validateAttribute.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.selectCards = this.selectCards.bind(this);

    this.state = {
      ...initialState,
      hasTrunfo: false,
      deckCards: [],
      filter: {
        nameFilter: '',
        typeFilter: 'all',
        trunfoFilter: false,
      },
    };
  }

  handleSaveButton() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, deckCards, cardTrunfo } = this.state;
    deckCards.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });
    localStorage.setItem('cards', JSON.stringify(deckCards));
    this.setState({ ...initialState, deckCards });
    if (cardTrunfo) this.setState({ hasTrunfo: true });
    this.setState((prev) => ({
      hasTrunfo: prev.hasTrunfo,
    }));
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [name]: value }), this.enableSaveButton);
  }

  handleFilterChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((prev) => ({
      filter: {
        ...prev.filter,
        [name]: value,
      },
    }));
  }

  removeCard(name, trunfoState) {
    const { deckCards } = this.state;
    const selectedCard = deckCards.find((card) => card.cardName === name);
    deckCards.splice(deckCards.indexOf(selectedCard), 1);

    localStorage.setItem('cards', JSON.stringify(deckCards));

    if (deckCards.length === 0) {
      this.setState({ deckCards, hasTrunfo: false });
    } else {
      this.setState((prev) => ({
        deckCards,
        hasTrunfo: trunfoState ? false : prev.hasTrunfo,
      }));
    }
  }

  validateAttribute() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const [num1, num2, num3] = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const numArr = [num1, num2, num3];
    const minNumber = 0;
    const maxNumber = 90;
    const maxSum = 210;
    const validateSum = (num1 + num2 + num3) <= maxSum; // tem que retornar V
    const validateMax = numArr.every((num) => num <= maxNumber); // tem que retornar V
    const validateMin = numArr.every((num) => num >= minNumber); // tem que retornar V
    return validateSum && validateMax && validateMin; // tem que retornar V
  }

  validateTextInput() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const inputTextContent = [cardName, cardDescription, cardImage, cardRare];
    return inputTextContent.every((input) => input.length > 0); // tem que retornar V
  }

  enableSaveButton() {
    if (this.validateTextInput() && this.validateAttribute()) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  selectCards() {
    const { deckCards, filter } = this.state;
    const { nameFilter, typeFilter, trunfoFilter } = filter;
    const deckCopy = [...deckCards];

    if (trunfoFilter) {
      return deckCopy.filter((card) => card.cardTrunfo);
    }

    if (typeFilter === 'all' && !nameFilter) return deckCopy;

    if (!nameFilter && typeFilter !== 'all') {
      return deckCopy.filter((card) => card.cardRare === typeFilter);
    }

    if (nameFilter && typeFilter !== 'all') {
      const fCards = deckCopy.filter((card) => card.cardRare === typeFilter);
      return fCards.filter((card) => card.cardName.startsWith(nameFilter)
      || card.cardName.toLowerCase().includes(nameFilter.toLowerCase()));
    }

    if (nameFilter) {
      return deckCopy.filter((card) => card.cardName.startsWith(nameFilter)
      || card.cardName.toLowerCase().includes(nameFilter.toLowerCase()));
    }
  }

  componentDidMount() {
    const deck = JSON.parse(localStorage.getItem('cards'));
    this.setState({
      deckCards: deck,
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, hasTrunfo, cardTrunfo, isSaveButtonDisabled,
      filter } = this.state;
    const cards = this.selectCards();
    return (
      <div className="app">
        <Header />
        <main className="main-content">
          <section className="form-preview">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ String(cardAttr1) }
              cardAttr2={ String(cardAttr2) }
              cardAttr3={ String(cardAttr3) }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.handleSaveButton }
            />
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>
          <div className="intertitle">
            <p>nothing is true. everything is permitted.</p>
            <h3>your deck</h3>
          </div>
          <section className="filter-section">
            <FilterOptions
              filters={ filter }
              changeFilter={ this.handleFilterChange }
            />
          </section>
          <div className="deck-div">
            <section className="deck">
              {cards.map((card, index) => (<DeckCard
                card={ card }
                removeCard={ this.removeCard }
                key={ card.cardName + index }
              />))}
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
