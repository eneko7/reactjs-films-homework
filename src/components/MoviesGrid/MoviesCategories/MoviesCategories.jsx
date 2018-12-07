import React from 'react';
import PropTypes from 'prop-types';
import style from './MoviesCategories.scss';
import Genres from '../Genres';

class MoviesCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'Trending',
    };
    this.fetchFilmsByCategory = this.fetchFilmsByCategory.bind(this);
    this.categories = ['Trending', 'Top Rated', 'Coming Soon']
      .map(x => ({
        el: x,
        method: () => {
          this.fetchFilmsByCategory(x);
          props.pushNavigationLink(x);
        },
      }));
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
      <div key={el} className={style.moviesGrid_categories_item}>
        <button type="button" data-filter={el} className={`${el !== activeCategory ? '' : active} ${style.moviesGrid_categories_item_button}`} onClick={method}>{el}</button>
      </div>
    ));
    return (
      <div className={style.moviesGrid_categories}>
        {categoritesBlock}
        <div className={style.moviesGrid_categories_item}>
          <Genres title="Genres" activeCategory={activeCategory} fetchChange={this.fetchFilmsByCategory} />
        </div>
      </div>
    );
  }
}
MoviesCategories.propTypes = {
  pushNavigationLink: PropTypes.func.isRequired,
};
export default MoviesCategories;
