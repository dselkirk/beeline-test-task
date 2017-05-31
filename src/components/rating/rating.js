import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';

let cx = classNames.bind(styles);

class Rating extends React.Component {

  render() {
    return (
      <div className={cx('rating')}>
        {this.props.rating}
      </div>
    );
  }

}

export default Rating;
