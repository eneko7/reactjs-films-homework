import React from 'react';
import PropTypes from 'prop-types';
import style from './MoviesGrid.scss';
import GenresContainer from './Genres/GenresContainer';
import MovieElement from './MovieElement/MovieElement';
import MoviesCategoriesContainer from './MoviesCategories/MoviesCategoriesContainer';

class MoviesGrid extends React.Component {
  constructor(props) {
    super(props);
    this.onScrollHandler = this.onScrollHandler.bind(this);
  }

  componentDidMount() {
    const { fetchFilmsPopular } = this.props;
    fetchFilmsPopular();
    global.document.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    global.document.removeEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler() {
    const { fetchNextFilms, isFetchingFilms } = this.props;
    if ((global.window.innerHeight + global.window.pageYOffset)
    >= global.document.body.offsetHeight && !isFetchingFilms) {
      fetchNextFilms();
    }
  }

  render() {
    const { films, isFetchingFilms, genres } = this.props;
    const filmsItems = films.map((elem, index) => {
      if (index > 1) {
        return (
          <li key={elem.id} className={style.moviesGrid_wrapper_MovieElement_ul_item}>
            <MovieElement film={elem} genresList={genres} />
          </li>
        );
      }
      return false;
    });
    return (
      <main className={style.moviesGrid}>
        <div className={style.moviesGrid_categories}>
          <MoviesCategoriesContainer />
          <div className={style.moviesGrid_categories_item}>
            <GenresContainer title="Genres" />
          </div>
        </div>
        <div className={style.moviesGrid_wrapper}>
          <ul className={style.moviesGrid_wrapper_MovieElement_ul}>
            {filmsItems}
          </ul>
          {isFetchingFilms
            ? (
              <div>
                <div className={style.moviesGrid_wrapper_loading} id="loading">
                  <div className={style.moviesGrid_wrapper_loading} />
                  <div className={style.moviesGrid_wrapper_loading} />
                  <div className={style.moviesGrid_wrapper_loading} />
                </div>
                <div className={style.moviesGrid_wrapper_loading_text} id="loading_text">
                  <span className={style.moviesGrid_wrapper_loading_text_span}>LOADING</span>
                </div>
              </div>
            )
            : ''
          }
        </div>
      </main>
    );
  }
}

MoviesGrid.propTypes = {
  fetchFilmsPopular: PropTypes.func.isRequired,
  fetchNextFilms: PropTypes.func.isRequired,
  isFetchingFilms: PropTypes.bool.isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesGrid;
