import React from 'react';
import PropTypes from 'prop-types';
import style from './MoviesGrid.scss';
import Genres from './Genres/Genres';
// import MovieElement from './MovieElement/MovieElement';

const categories = ['Trending', 'Top Rated', 'Comming Soon'];

const cats = categories.map(el => (
  <div key={el} className={style.moviesGrid_categories_item}>
    <button type="button" className={style.moviesGrid_categories_item_button}>{el}</button>
  </div>
));

class MoviesGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genresList: [],
    };
  }

  componentWillMount() {
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=6a08c0def237c5910708279c9ee78cc5')
      .then(res => res.json())
      .then((data) => {
        this.setState(() => ({
          genresList: data.genres,
        }));
        return data;
      });
  }

  componentDidMount() {
    console.log(this.props);
    const { fetchFilmsPopular } = this.props;
    fetchFilmsPopular();
    global.document.addEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler() {
    const { fetchNextFilms, isFetchingFilms } = this.props;
    if ((global.window.innerHeight + global.window.pageYOffset)
    >= global.document.body.offsetHeight && !isFetchingFilms) {
      fetchNextFilms();
    }
  }

  render() {
    const { genresList } = this.state;
    // const { films, isFetchingFilms } = this.props;
    // const filmsItems = films.map((elem, index) => {
    //   if (index > 1) {
    //     return (
    //       <li key={elem.id} className={style.moviesGrid_wrapper_MovieElement_ul_item}>
    //         <MovieElement film={elem} genresList={genresList} />
    //       </li>
    //     );
    //   }
    //   return false;
    // });
    return (
      <main className={style.moviesGrid}>
        <div className={style.moviesGrid_categories}>
          {cats}
          <div className={style.moviesGrid_categories_item}>
            <Genres genres={genresList} title="Genres" />
          </div>
        </div>
        <div className={style.moviesGrid_wrapper}>
          <ul className={style.moviesGrid_wrapper_MovieElement_ul}>
            {/* {filmsItems} */}
          </ul>
          {/* {isFetchingFilms
            ? (
              <div className={style.moviesGrid_wrapper_loading} id="loading">
                <div className={style.moviesGrid_wrapper_loading} />
                <div className={style.moviesGrid_wrapper_loading} />
                <div className={style.moviesGrid_wrapper_loading} />
              </div>
            )
            : ''
          } */}
          <div className={style.moviesGrid_wrapper_loading} id="loading">
            <div className={style.moviesGrid_wrapper_loading} />
            <div className={style.moviesGrid_wrapper_loading} />
            <div className={style.moviesGrid_wrapper_loading} />
          </div>
          <div className={style.moviesGrid_wrapper_loading_text} id="loading_text">
            <span className={style.moviesGrid_wrapper_loading_text_span}>LOADING</span>
          </div>
        </div>
      </main>
    );
  }
}

MoviesGrid.propTypes = {
  fetchFilmsPopular: PropTypes.func.isRequired,
  fetchNextFilms: PropTypes.func.isRequired,
  isFetchingFilms: PropTypes.bool.isRequired,
  // films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MoviesGrid;
