import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import style from './MoviesCategories.scss';
import GenresContainer from '../Genres/GenresContainer';

class MoviesCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'Trending',
    };
    this.fetchFilmsByCategory = this.fetchFilmsByCategory.bind(this);
  }

  componentDidMount() {
    const { location: { search, pathname } } = this.props;
    const parsed = queryString.parse(search);
    const { sort } = parsed;
    if (pathname === '/') {
      this.fetchFilmsByCategory('Trending');
    }
    if (pathname === '/films') {
      this.fetchFilmsByCategory(sort);
    }
    if (pathname === '/genres') {
      this.setState(() => ({
        activeCategory: 'Genres',
      }));
    }
  }

  fetchFilmsByCategory(el) {
    this.setState(() => ({
      activeCategory: el,
    }));
    if (el !== 'Genres') {
      const { pushNavigationLink } = this.props;
      pushNavigationLink(el);
    }
  }

  render() {
    const categories = [
      {
        route: '/films?sort=Trending',
        query: 'trending',
        name: 'Trending',
        defaultActive: true,
      },
      {
        route: '/films?sort=Top Rated',
        query: 'top-rated',
        name: 'Top Rated',
        defaultActive: false,
      },
      {
        route: '/films?sort=Coming Soon',
        query: 'coming-soon',
        name: 'Coming Soon',
        defaultActive: false,
      },
    ];
    const { activeCategory } = this.state;
    const active = `${style.active}`;
    const categoritesBlock = categories.map((el) => {
      if (el.name !== activeCategory) {
        return (
          <div key={el.name} className={style.moviesGrid_categories_item}>
            <Link to={el.route}>
              <button type="button" data-filter={el.name} className={`${style.moviesGrid_categories_item_button}`} onClick={this.fetchFilmsByCategory.bind(null, el.name)}>{el.name}</button>
            </Link>
          </div>
        );
      }
      return (
        <div key={el.name} className={style.moviesGrid_categories_item}>
          <Link to={el.route}>
            <button type="button" data-filter={el.name} className={`${active} ${style.moviesGrid_categories_item_button}`} onClick={this.fetchFilmsByCategory.bind(null, el.name)}>{el.name}</button>
          </Link>
        </div>
      );
    });
    return (
      <div className={style.moviesGrid_categories}>
        {categoritesBlock}
        <div className={style.moviesGrid_categories_item}>
          <GenresContainer title="Genres" activeCategory={activeCategory} fetchChange={this.fetchFilmsByCategory} />
        </div>
      </div>
    );
  }
}
MoviesCategories.propTypes = {
  pushNavigationLink: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};
export default MoviesCategories;
