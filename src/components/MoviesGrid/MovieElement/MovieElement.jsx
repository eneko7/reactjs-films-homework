import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import style from './MovieElement.scss';
import ModalWindowFilmContainer from './ModalWindowFilm/ModalWindowFilmContainer';

const errorImg = '../../../images/error_video.jpg';

class MovieElement extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShownInfo: false,
      isShownFilm: false,
    };
    this.showInfo = this.showInfo.bind(this);
    this.watchFilm = this.watchFilm.bind(this);
  }

  showInfo() {
    this.setState(prevState => ({
      isShownInfo: !prevState.isShownInfo,
    }));
  }

  watchFilm() {
    this.setState(prevState => ({
      isShownFilm: !prevState.isShownFilm,
    }));
    const { isShownFilm } = this.state;
    if (isShownFilm) {
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    } else {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
  }

  render() {
    const { film, genresList, location: { search } } = this.props;
    const { isShownInfo, isShownFilm } = this.state;
    let title = '';
    if (film.title.length > 15) {
      title = `${film.title.substr(0, 12)}...`;
    } else {
      title = `${film.title}`;
    }
    const filmVoteAverage = parseFloat(film.vote_average).toFixed(1);
    const genres = [];
    film.genre_ids.forEach((elem) => {
      genresList.forEach((el) => {
        if (elem === el.id && !genres.includes(el.name)) {
          genres.push(el.name);
        }
      });
    });
    const filmGenres = genres.map(elem => (
      <span
        key={elem.toString()}
        className={style.moviesGrid_wrapper_MovieElement_ul_item_wrap_description_genres_gen}
      >
        {elem}
      </span>
    ));
    const active = isShownInfo ? `${style.active}` : '';
    let topPicture = {};
    if (film.backdrop_path !== null) {
      topPicture = {
        backgroundImage: `url(//image.tmdb.org/t/p/w1280${film.backdrop_path})`,
      };
    } else {
      topPicture = {
        backgroundImage: `url(${errorImg})`,
      };
    }
    let posterPicture = {};
    if (film.poster_path !== null) {
      posterPicture = {
        backgroundImage: `url(//image.tmdb.org/t/p/w1280${film.poster_path})`,
      };
    } else {
      posterPicture = {
        backgroundImage: `url(${errorImg})`,
      };
    }
    const parsed = queryString.parse(search);
    parsed.filmId = film.id;
    const newSearch = queryString.stringify(parsed);
    return (
      <Link to={`/film?${newSearch}`} className={`${style.moviesGrid_wrapper_MovieElement_ul_item_wrap}`}>
        <div style={topPicture} className={style.moviesGrid_wrapper_MovieElement_top_picture} />
        <div className={style.moviesGrid_wrapper_MovieElement_ul_item_wrap_description}>
          <div className={style.moviesGrid_wrapper_MovieElement_ul_item_wrap_description_n_r}>
            <span className={style.moviesGrid_wrapper_MovieElement_ul_item_wrap_description_Name}>
              {title.toUpperCase()}
            </span>
            <span className={style.moviesGrid_wrapper_MovieElement_ul_item_wrap_description_Rate}>
              {filmVoteAverage}
            </span>
          </div>
          <div className={style.moviesGrid_wrapper_MovieElement_ul_item_wrap_description_genres}>
            {filmGenres}
          </div>
        </div>
        <div className={`${style.descriptionFilmLayer}`}>
          <div className={style.descriptionFilmLayer_overlay}>
            <div className={style.descriptionFilmLayer_overlay_description}>
              <button
                type="button"
                className={`${style.descriptionFilmLayer_overlay_description_play} ${style.circle_blue}`}
                onClick={this.watchFilm}
              >
                <div className={style.circle_blue_play} />
              </button>
              <span className={style.button_watch_now}>Watch Now</span>
              <button
                className={style.button_show_info}
                onClick={this.showInfo}
                type="button"
              >
                View info
              </button>
            </div>
          </div>
        </div>
        <div className={`${active} ${style.descriptionFilmLayer_info}`} style={posterPicture}>
          <div className={style.descriptionFilmLayer_info_overlay}>
            <button className={style.descriptionFilmLayer_info_close} onClick={this.showInfo} type="button">
              &times;
            </button>
            <div className={style.descriptionFilmLayer_info_overlay_description}>
              <div className={style.descriptionFilmLayer_info_overlay_description_Name_and_Rate}>
                <span className={style.descriptionFilmLayer_info_overlay_description_name}>
                  {film.title.toUpperCase()}
                </span>
                <span className={style.descriptionFilmLayer_info_overlay_description_rate}>
                  {film.vote_average}
                </span>
              </div>
              <div className={style.descriptionFilmLayer_info_overlay_description_genres}>
                {filmGenres}
              </div>
              <div className={style.descriptionFilmLayer_info_overlay_description_overview}>
                {film.overview}
              </div>
              <button
                className={style.descriptionFilmLayer_info_overlay_description_watch_now}
                onClick={this.watchFilm}
                type="button"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
        {isShownFilm
          ? <ModalWindowFilmContainer onChange={this.watchFilm} filmId={film.id} />
          : ''
        }
      </Link>
    );
  }
}

MovieElement.propTypes = {
  film: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.bool,
    ]),
  ).isRequired,
  genresList: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.shape({
    params: PropTypes.object,
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};

export default MovieElement;
