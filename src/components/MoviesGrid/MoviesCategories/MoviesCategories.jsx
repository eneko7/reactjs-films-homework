import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import style from './MoviesCategories.scss';
import Genres from '../Genres';

class MoviesCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'Trending',
    };
    this.fetchFilmsByCategory = this.fetchFilmsByCategory.bind(this);
    this.categories = [
      {
        route: '/films?sort=Trending',
        query: 'trending',
        name: 'Trending',
      },
      {
        route: '/films?sort=Top Rated',
        query: 'top-rated',
        name: 'Top Rated',
      },
      {
        route: '/films?sort=Coming Soon',
        query: 'coming-soon',
        name: 'Coming Soon',
      },
    ].map(x => ({
      el: x,
      method: () => {
        this.fetchFilmsByCategory(x.name);
        props.pushNavigationLink(x.name);
      },
    }));
  }

  componentDidMount() {
    const {
      location: { search, pathname },
      pushNavigationLink,
      fetchFilmsBySearch,
      fetchFilmsByGenre,
      receiveMainFilmInfo,
    } = this.props;
    const parsed = queryString.parse(search);
    const {
      sort,
      q,
      filmId,
      genreId,
      category,
    } = parsed;
    if (pathname === '/') {
      this.fetchFilmsByCategory('Trending');
      pushNavigationLink('Trending');
    }
    if (pathname === '/films') {
      this.fetchFilmsByCategory(sort);
      pushNavigationLink(sort);
    }
    if (pathname === '/search') {
      fetchFilmsBySearch(q);
    }
    if (pathname === '/genres') {
      this.setState(() => ({
        activeCategory: 'Genres',
      }));
    }
    if (pathname === '/film') {
      if (category === '') {
        this.fetchFilmsByCategory('Trending');
        pushNavigationLink('Trending');
        setTimeout(receiveMainFilmInfo(filmId), 0);
      }
      if (category === 'search') {
        fetchFilmsBySearch(q);
        setTimeout(receiveMainFilmInfo(filmId), 0);
      }
      if (category === 'genres') {
        this.setState(() => ({
          activeCategory: 'Genres',
        }));
        fetchFilmsByGenre(genreId);
        setTimeout(receiveMainFilmInfo(filmId), 0);
      }
      if (category === 'categories') {
        this.fetchFilmsByCategory(sort);
        pushNavigationLink(sort);
        setTimeout(receiveMainFilmInfo(filmId), 0);
      }
      if (!category && !sort) {
        this.fetchFilmsByCategory('Trending');
        pushNavigationLink('Trending');
        setTimeout(receiveMainFilmInfo(filmId), 0);
      }
    }
  }

  fetchFilmsByCategory(el) {
    this.setState(() => ({
      activeCategory: el,
    }));
  }

  render() {
    const { activeCategory } = this.state;
    const active = `${style.active}`;
    const categoritesBlock = this.categories.map(({ el, method }) => (
      <div key={el.name} className={style.moviesGrid_categories_item}>
        <Link to={el.route}>
          <button type="button" data-filter={el.name} className={`${el.name !== activeCategory ? '' : active} ${style.moviesGrid_categories_item_button}`} onClick={method}>{el.name}</button>
        </Link>
      </div>
    ));
    return (
      <React.Fragment>
        <div className={style.moviesGrid_categories}>
          {categoritesBlock}
          <div className={style.moviesGrid_categories_item}>
            <Genres title="Genres" activeCategory={activeCategory} fetchChange={this.fetchFilmsByCategory} />
          </div>
        </div>
        <div className={style.underLine} />
      </React.Fragment>
    );
  }
}
MoviesCategories.propTypes = {
  pushNavigationLink: PropTypes.func.isRequired,
  fetchFilmsBySearch: PropTypes.func.isRequired,
  fetchFilmsByGenre: PropTypes.func.isRequired,
  receiveMainFilmInfo: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};
export default MoviesCategories;
