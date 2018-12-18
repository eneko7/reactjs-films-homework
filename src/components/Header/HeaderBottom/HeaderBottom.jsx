import React from 'react';
import PropTypes from 'prop-types';
import MovieDescription from './MovieDescription/MovieDescription';
import MovieRate from './MovieRate/MovieRate';
import MovieInfoButtons from './MovieInfoButtons/MovieInfoButtons';
import style from './HeaderBottom.scss';

const HeaderBottom = (props) => {
  const {
    selectedFilm, duration,
  } = props;
  if (selectedFilm && duration) {
    return (
      <div className={style.header_bottom}>
        <div className={`${style.active} ${style.header_bottom_left}`}>
          <MovieDescription
            filmName={selectedFilm.title}
            filmGenres={selectedFilm.genres}
            filmDuration={duration}
          />
          <MovieRate rate={selectedFilm.vote_average} />
        </div>
        <MovieInfoButtons annotation={selectedFilm.overview} filmId={selectedFilm.id} />
      </div>
    );
  }
  return null;
};

HeaderBottom.defaultProps = {
  duration: 0,
  selectedFilm: {
    adult: false,
    backdrop_path: '/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg',
    belongs_to_collection: null,
    budget: 160000000,
    genres: [{ id: 28, name: 'Action' }, { id: 14, name: 'Fantasy' }, { id: 878, name: 'Science Fiction' }, { id: 12, name: 'Adventure' }, { id: 10749, name: 'Romance' }],
    homepage: 'http://www.aquamanmovie.com',
    id: 297802,
    imdb_id: 'tt1477834',
    original_language: 'en',
    original_title: 'Aquaman',
    overview: 'The film reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime—one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be… a king.',
    popularity: 528.904,
    poster_path: '/ydUpl3QkVUCHCq1VWvo2rW4Sf7y.jpg',
    production_companies: [{
      id: 429, logo_path: '/2Tc1P3Ac8M479naPp1kYT3izLS5.png', name: 'DC Comics', origin_country: 'US',
    }, {
      id: 9993, logo_path: '/2Tc1P3Ac8M479naPp1kYT3izLS5.png', name: 'DC Entertainment', origin_country: 'US',
    }, {
      id: 174, logo_path: '/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png', name: 'Warner Bros. Pictures', origin_country: 'US',
    }, {
      id: 11565, logo_path: null, name: 'The Safran Company', origin_country: 'US',
    }],
    production_countries: [{ iso_3166_1: 'AU', name: 'Australia' }, { iso_3166_1: 'US', name: 'United States of America' }],
    release_date: '2018-12-07',
    revenue: 0,
    runtime: 144,
    spoken_languages: [{ iso_639_1: 'en', name: 'English' }],
    status: 'Released',
    tagline: 'Protector of the Deep',
    title: 'Aquaman',
    video: false,
    vote_average: 7.0,
    vote_count: 256,
  },
};

HeaderBottom.propTypes = {
  selectedFilm: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.bool,
      PropTypes.object,
    ]),
  ),
  duration: PropTypes.number,
};

export default HeaderBottom;
