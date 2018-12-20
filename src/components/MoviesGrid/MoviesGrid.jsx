import React from 'react';
import PropTypes from 'prop-types';
import style from './MoviesGrid.scss';
import MovieElement from './MovieElement';
import MoviesCategories from './MoviesCategories';

class MoviesGrid extends React.Component {
  constructor(props) {
    super(props);
    this.onScrollHandler = this.onScrollHandler.bind(this);
  }

  componentDidMount() {
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
    if (films.length === 0) {
      return (
        <main className={style.moviesGrid}>
          <div className={style.moviesGrid_wrapper}>
            <ul className={style.moviesGrid_wrapper_MovieElement_ul}>
              <div className={style.error_search}>
                Unable to find anythig on your request, please change your request and try again...
                <br />
                <br />
                or You can choose one of categories...
              </div>
            </ul>
          </div>
          <MoviesCategories />
        </main>
      );
    }
    const filmsItems = films.map(elem => (
      <li key={elem.id} className={style.moviesGrid_wrapper_MovieElement_ul_item}>
        <MovieElement film={elem} genresList={genres} />
      </li>
    ));
    return (
      <main className={style.moviesGrid}>
        <MoviesCategories />
        <div className={style.moviesGrid_wrapper}>
          <ul className={style.moviesGrid_wrapper_MovieElement_ul}>
            {filmsItems}
          </ul>
          {isFetchingFilms
            && (
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
          }
        </div>
      </main>
    );
  }
}

MoviesGrid.propTypes = {
  fetchNextFilms: PropTypes.func.isRequired,
  isFetchingFilms: PropTypes.bool.isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesGrid;
