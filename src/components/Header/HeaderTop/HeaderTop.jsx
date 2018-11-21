import React from 'react';
import PropTypes from 'prop-types';
import style from './HeaderTop.scss';

class HeaderTop extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.searchFilms = this.searchFilms.bind(this);
  }

  onChange(e) {
    const { searchFilm, fetchFilmsPopular, saveSearchingWord } = this.props;
    if (e.target.value !== '') {
      searchFilm(e.target.value);
      saveSearchingWord(e.target.value);
    } else {
      fetchFilmsPopular();
    }
  }

  searchFilms() {
    const { searchFilm } = this.props;
    searchFilm(document.getElementById('search_input').value);
  }

  render() {
    const { searchedWord } = this.props;
    return (
      <div className={style.header_top}>
        <span className={style.header_top_span}><a href="/" className={style.header_top_span_a}>FILMS</a></span>
        <div className={style.header_top_search}>
          <input
            type="text"
            id="search_input"
            className={style.header_top_search_input}
            onChange={this.onChange}
            placeholder="Searh..."
            value={searchedWord}
          />
          <button className={style.header_top_search_label} onClick={this.searchFilms} type="button" />
        </div>
      </div>
    );
  }
}
HeaderTop.propTypes = {
  fetchFilmsPopular: PropTypes.func.isRequired,
  searchFilm: PropTypes.func.isRequired,
  saveSearchingWord: PropTypes.func.isRequired,
  searchedWord: PropTypes.string.isRequired,
};
export default HeaderTop;
