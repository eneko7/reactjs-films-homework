import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import style from './HeaderTop.scss';

class HeaderTop extends React.Component {
  constructor(props) {
    super(props);
    const { location } = props;
    this.input = React.createRef();
    this.word = queryString.parse(location.search).q;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      searchFilm, fetchFilmsPopular, saveSearchingWord, history,
    } = this.props;
    if (this.input.current.value !== '') {
      history.push(`/search?q=${this.input.current.value}`);
      searchFilm(this.input.current.value);
      saveSearchingWord(this.input.current.value);
    } else {
      history.push('/');
      fetchFilmsPopular();
    }
  }

  render() {
    const {
      location: { search },
    } = this.props;
    const parsed = queryString.parse(search);
    const { q } = parsed;
    return (
      <div className={style.header_top}>
        <span className={style.header_top_span}>
          <Link to="/" className={style.header_top_span_a}>
            FILMS
          </Link>
        </span>
        <form className={style.header_top_search} onSubmit={this.handleSubmit}>
          <input
            type="text"
            defaultValue={q}
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
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.shape({
    params: PropTypes.object,
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};
export default HeaderTop;
