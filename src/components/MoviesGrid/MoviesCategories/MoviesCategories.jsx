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
    console.log(sort, pathname);
    if (pathname === '/films') {
      console.log('>', 'fetchFilmsByCategory');
      this.fetchFilmsByCategory(sort);
      // console.log(sort, this.fetchFilmsByCategory(sort));
    }
  }

  fetchFilmsByCategory(el) {
    this.setState(() => ({
      activeCategory: el,
    }));
    if (el !== 'Genres') {
      console.log(el);
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
      {
        route: '/genres',
        query: 'genres',
        name: 'Genres',
        defaultActive: false,
      },
    ];
    const { activeCategory } = this.state;
    const active = `${style.active}`;
    const noactive = `${style.noactive}`;
    return (
      categories.map((el) => {
        if (el.name !== activeCategory && el.name !== 'Genres') {
          return (
            <div key={el.name} className={style.moviesGrid_categories_item}>
              <Link to={el.route}>
                <button type="button" data-filter={el.name} className={`${style.moviesGrid_categories_item_button}`} onClick={this.fetchFilmsByCategory.bind(null, el.name)}>{el.name}</button>
              </Link>
            </div>
          );
        } if (el.name !== activeCategory && el.name === 'Genres') {
          return (
            <div key={el.name} className={style.moviesGrid_categories_item}>
              <GenresContainer title="Genre" activeClass={noactive} fetchChange={this.fetchFilmsByCategory} />
            </div>
          );
        } if (el.name === activeCategory && el.name === 'Genres') {
          return (
            <div key={el.name} className={style.moviesGrid_categories_item}>
              <GenresContainer title="Genres" activeClass={active} fetchChange={this.fetchFilmsByCategory} />
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
      })
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
