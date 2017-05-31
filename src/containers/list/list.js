import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import FlipMove from 'react-flip-move';

import styles from './styles.css';
import Image from "../../components/image/image";
import { getImages } from '../../selectors/index';
import { decreaseRating, increaseRating } from '../../actions/index';

let cx = classNames.bind(styles);
const LEFT_BUTTON = 1;
const RIGHT_BUTTON = 3;

@connect(
  state => ({
    images: getImages(state),
  }),
  {
    decreaseRating,
    increaseRating
})
class List extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeRating = this.onChangeRating.bind(this);
  }

  onChangeRating(event, id) {
    const button = event.nativeEvent.which;
    const {decreaseRating, increaseRating} = this.props;
    if (button === LEFT_BUTTON) {
      increaseRating(id)
    } else if (button === RIGHT_BUTTON) {
      decreaseRating(id)
    }
  }

  render() {
    const { images = {}} = this.props;

    return (
      <div className={cx('list')}>
        <div className={cx('list-title')}>Images</div>
        <FlipMove duration={450} easing="ease-out">
          { images.map(image => <Image key={image.id} onChangeRating={this.onChangeRating} image={image}/>) }
        </FlipMove>
      </div>
    );
  }

}

export default List;
