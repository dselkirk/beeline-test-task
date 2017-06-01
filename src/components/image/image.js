import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import Rating from "../rating/rating";

let cx = classNames.bind(styles);

class Image extends React.Component {

  render() {
    const {image: {src, rating, id}, onChangeRating} = this.props;
    return (
      <div className={cx('image')}
           style={{'backgroundImage': `url(${src})`}}
           onClick={(event) => onChangeRating(event, id)}
           onContextMenu={(event) => onChangeRating(event, id)}
      >
        <Rating rating={rating}/>
      </div>
    );
  }

}

export default Image;
