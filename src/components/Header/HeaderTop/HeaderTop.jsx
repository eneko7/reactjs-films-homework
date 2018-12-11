import React from 'react';
import PropTypes from 'prop-types';
import style from './HeaderTop.scss';

class HeaderTop extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { searchFilm, fetchFilmsPopular, saveSearchingWord } = this.props;
    if (this.input.current.value !== '') {
      searchFilm(this.input.current.value);
      saveSearchingWord(this.input.current.value);
    } else {
      fetchFilmsPopular();
    }
  }


  render() {
    return (
      <div className={style.header_top}>
        <span className={style.header_top_span}><a href="/" className={style.header_top_span_a}>FILMS</a></span>
        <form className={style.header_top_search} onSubmit={this.handleSubmit}>
          <input
            type="text"
            defaultValue="search"
            id="search_input"
            className={style.header_top_search_input}
            ref={this.input}
            onChange={this.handleSubmit}
            placeholder="Searh..."
          />
          <button className={style.header_top_search_label} onClick={this.handleSubmit} type="submit" />
        </form>
      </div>
    );
  }
}
HeaderTop.propTypes = {
  fetchFilmsPopular: PropTypes.func.isRequired,
  searchFilm: PropTypes.func.isRequired,
  saveSearchingWord: PropTypes.func.isRequired,
};
export default HeaderTop;
