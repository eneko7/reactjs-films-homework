import React from 'react';
import PropTypes from 'prop-types';
import style from './Genres.scss';

class Genres extends React.Component {
  constructor(props) {
    super(props);
    const { title } = this.props;
    this.state = {
      isOpen: false,
      headerTitle: title,
    };
    this.openGenresClick = this.openGenresClick.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }

  componentDidMount() {
    const { fetchGenres } = this.props;
    fetchGenres();
  }

  openGenresClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  }

  changeTitle(el, id) {
    this.setState(() => ({
      headerTitle: el,
      isOpen: false,
    }));
    const { fetchFilmsByGenre } = this.props;
    fetchFilmsByGenre(id);
  }

  render() {
    const { genres } = this.props;
    const genresCol = genres.map(el => (
      <button type="button" key={el.id} className={style.moviesGrid_categories_item_block_button} onClick={this.changeTitle.bind(null, el.name, el.id)}>
        {el.name}
      </button>
    ));
    const { isOpen, headerTitle } = this.state;
    const active = isOpen ? `${style.active}` : '';
    return (
      <div>
        <button type="button" className={style.moviesGrid_categories_item_button} onClick={this.openGenresClick}>
          <span>{headerTitle}</span>
          <span className={`${active} ${style.moviesGrid_categories_item_span_arrow}`} />
        </button>
        <div className={`${active} ${style.moviesGrid_categories_item_block}`} id="genres_list">
          {genresCol}
        </div>
      </div>
    );
  }
}

Genres.propTypes = {
  fetchGenres: PropTypes.func.isRequired,
  fetchFilmsByGenre: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default Genres;
