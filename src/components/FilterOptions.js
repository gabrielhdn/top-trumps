import React from 'react';
import PropTypes from 'prop-types';
import { IoStarSharp } from 'react-icons/io5';
import './FilterOptions.css';

class FilterOptions extends React.Component {
  render() {
    const { filters, changeFilter } = this.props;
    const { nameFilter, typeFilter, trunfoFilter } = filters;
    return (
      <div className="filter-container">
        <input
          type="text"
          data-testid="name-filter"
          placeholder="card name"
          name="nameFilter"
          disabled={ trunfoFilter }
          value={ nameFilter }
          onChange={ changeFilter }
        />
        <select
          data-testid="rare-filter"
          name="typeFilter"
          className="select-input"
          value={ typeFilter }
          disabled={ trunfoFilter }
          onChange={ changeFilter }
        >
          <option value="all">all</option>
          <option value="normal">normal</option>
          <option value="rare">rare</option>
          <option value="very rare">very rare</option>
        </select>
        {/* <label htmlFor="trunfo-checkbox" className="label-trunfo">Top Trump
          <input
            type="checkbox"
            id="trunfo-checkbox"
            name="trunfoFilter"
            data-testid="trunfo-filter"
            className="top-trump-filter"
            checked={ trunfoFilter }
            onChange={ changeFilter }
          />
        </label> */}
        <div className="trump-div">
          <input
            type="checkbox"
            id="trunfo-checkbox"
            name="trunfoFilter"
            data-testid="trunfo-filter"
            className="top-trump-filter"
            checked={ trunfoFilter }
            onChange={ changeFilter }
          />
          <label htmlFor="trunfo-checkbox" className="trump-label">
            <p>Top Trump</p>
            <IoStarSharp size={21} className="top-icon" />
          </label>
        </div>
      </div>
    );
  }
}

FilterOptions.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    nameFilter: PropTypes.string.isRequired,
    typeFilter: PropTypes.string.isRequired,
    trunfoFilter: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FilterOptions;
