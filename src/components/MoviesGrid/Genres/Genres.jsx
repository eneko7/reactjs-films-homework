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
    const { fetchFilmsByGenre, fetchChange } = this.props;
    fetchFilmsByGenre(id);
    fetchChange('Genres');
  }

  render() {
    const { genres } = this.props;
    const genresCol = genres.map(el => (
      <button type="button" key={el.id} id={el.name} className={`${style.moviesGrid_categories_item_block_button}`} elem={el.name} onClick={this.changeTitle.bind(null, el.name, el.id)}>
        {el.name}
      </button>
    ));
    const { isOpen, headerTitle } = this.state;
    const active = isOpen ? `${style.active}` : '';
    const { activeCategory } = this.props;
    const genresActive = activeCategory === 'Genres' ? { borderBottom: '4px solid' } : { borderBottom: 'none' };
    return (
      <div>
        <button type="button" style={genresActive} className={`${style.moviesGrid_categories_item_button}`} onClick={this.openGenresClick} data-filter="Genres" id="Genres">
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
  fetchChange: PropTypes.func.isRequired,
  fetchFilmsByGenre: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  activeCategory: PropTypes.string.isRequired,
};

export default Genres;
