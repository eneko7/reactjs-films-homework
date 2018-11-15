import React from 'react';
import PropTypes from 'prop-types';
import style from './HeaderTop.scss';

class HeaderTop extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { searchFilm } = this.props;
    searchFilm(e.target.value);
  }

  render() {
    return (
      <div className={style.header_top}>
        <span className={style.header_top_span}>FILMS</span>
        <div className={style.header_top_search}>
          <input type="text" id="search_input" className={style.header_top_search_input} onChange={this.onChange} placeholder="Searh..." />
        </div>
      </div>
    );
  }
}
HeaderTop.propTypes = {
  searchFilm: PropTypes.func.isRequired,
};
export default HeaderTop;
