import React from 'react';
import PropTypes from 'prop-types';
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
    const categories = ['Trending', 'Top Rated', 'Coming Soon', 'Genres'];
    const { activeCategory } = this.state;
    const active = `${style.active}`;
    const noactive = `${style.noactive}`;
    return (
      categories.map((el) => {
        if (el !== activeCategory && el !== 'Genres') {
          return (
            <div key={el} className={style.moviesGrid_categories_item}>
              <button type="button" data-filter={el} className={`${style.moviesGrid_categories_item_button}`} onClick={this.fetchFilmsByCategory.bind(null, el)}>{el}</button>
            </div>
          );
        } if (el !== activeCategory && el === 'Genres') {
          return (
            <div key={el} className={style.moviesGrid_categories_item}>
              <GenresContainer title="Genre" activeClass={noactive} fetchChange={this.fetchFilmsByCategory} />
            </div>
          );
        } if (el === activeCategory && el === 'Genres') {
          return (
            <div key={el} className={style.moviesGrid_categories_item}>
              <GenresContainer title="Genres" activeClass={active} fetchChange={this.fetchFilmsByCategory} />
            </div>
          );
        }
        return (
          <div key={el} className={style.moviesGrid_categories_item}>
            <button type="button" data-filter={el} className={`${active} ${style.moviesGrid_categories_item_button}`} onClick={this.fetchFilmsByCategory.bind(null, el)}>{el}</button>
          </div>
        );
      })
    );
  }
}
MoviesCategories.propTypes = {
  pushNavigationLink: PropTypes.func.isRequired,
};
export default MoviesCategories;
