import React from 'react';
import PropTypes from 'prop-types';
import style from './MoviesCategories.scss';

class MoviesCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'Trending',
    };
    this.fetchFilmsByCategory = this.fetchFilmsByCategory.bind(this);
  }

  fetchFilmsByCategory(e) {
    this.setState(() => ({
      activeCategory: e,
    }));
    const { pushNavigationLink } = this.props;
    pushNavigationLink(e);
  }

  render() {
    const categories = ['Trending', 'Top Rated', 'Coming Soon'];
    const { activeCategory } = this.state;
    return (
      categories.map((el) => {
        if (el === activeCategory) {
          const active = `${style.active}`;
          return (
            <div key={el} className={style.moviesGrid_categories_item}>
              <button type="button" data-filter={el} className={`${active} ${style.moviesGrid_categories_item_button}`} onClick={this.fetchFilmsByCategory}>{el}</button>
            </div>
          );
        }
        return (
          <div key={el} className={style.moviesGrid_categories_item}>
            <button type="button" className={style.moviesGrid_categories_item_button} onClick={this.fetchFilmsByCategory.bind(null, el)}>{el}</button>
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
