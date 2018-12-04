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
    if (el === 'Trending' || el === 'Top Rated' || el === 'Coming Soon') {
      const { pushNavigationLink } = this.props;
      pushNavigationLink(el);
    }
  }

  render() {
    const categories = ['Trending', 'Top Rated', 'Coming Soon'];
    const { activeCategory } = this.state;
    const active = `${style.active}`;
    // const noactive = `${style.noactive}`;
    const categoritesBlock = categories.map((el) => {
      if (el !== activeCategory) {
        return (
          <div key={el} className={style.moviesGrid_categories_item}>
            <button type="button" data-filter={el} className={`${style.moviesGrid_categories_item_button}`} onClick={this.fetchFilmsByCategory.bind(null, el)}>{el}</button>
          </div>
        );
      }
      return (
        <div key={el} className={style.moviesGrid_categories_item}>
          <button type="button" data-filter={el} className={`${active} ${style.moviesGrid_categories_item_button}`} onClick={this.fetchFilmsByCategory.bind(null, el)}>{el}</button>
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
};
export default MoviesCategories;
