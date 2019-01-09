import React from 'react';
import ReactDOM from 'react-dom';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Header from '../Header';

jest.mock('../HeaderBottom', () => () => <div>test</div>);
jest.mock('../HeaderTop', () => () => <div>test</div>);

const data = {
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

const badData = {
  selectedFilm: null,
};

describe('Header', () => {
  it('render correctly ', () => {
    const component = Renderer.create(
      <MemoryRouter initialEntries={['/film?filmId=278']}>
        <Header {...data} location={{ pathname: '/film', search: 'filmId=278' }} receiveMainFilmInfo={() => ('Hello')} />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('render correctly componentDidMount', () => {
    const node = document.createElement('div');
    const receiveMainFilmInfo = jest.fn();
    ReactDOM.render(<Header {...data} location={{ pathname: '/film', search: '' }} receiveMainFilmInfo={receiveMainFilmInfo} />, node);
    expect(receiveMainFilmInfo).toHaveBeenCalledTimes(0);
  });

  it('render correctly componentDidUpdate filmId !== filmId', () => {
    const node = document.createElement('div');
    const receiveMainFilmInfo = jest.fn();
    ReactDOM.render(<Header {...data} location={{ pathname: '/film', search: 'filmId=278' }} receiveMainFilmInfo={receiveMainFilmInfo} />, node);
    ReactDOM.render(<Header {...data} location={{ pathname: '/film', search: 'filmId=504589' }} receiveMainFilmInfo={receiveMainFilmInfo} />, node);
    expect(receiveMainFilmInfo).toHaveBeenCalledTimes(2);
  });

  it('render correctly componentDidUpdate filmId === filmId', () => {
    const node = document.createElement('div');
    const receiveMainFilmInfo = jest.fn();
    ReactDOM.render(<Header {...data} location={{ pathname: '/film', search: 'filmId=278' }} receiveMainFilmInfo={receiveMainFilmInfo} />, node);
    ReactDOM.render(<Header {...data} location={{ pathname: '/film', search: 'filmId=278' }} receiveMainFilmInfo={receiveMainFilmInfo} />, node);
    expect(receiveMainFilmInfo).toHaveBeenCalledTimes(1);
  });

  it('render correctly ', () => {
    const component = Renderer.create(
      <MemoryRouter initialEntries={['/film?filmId=278']}>
        <Header {...badData} location={{ pathname: '/film', search: 'filmId=278' }} receiveMainFilmInfo={() => ('Hello')} />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
