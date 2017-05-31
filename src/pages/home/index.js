import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import styles from './styles.css';
import List from "../../containers/list/list";
import images from '../../data/images';
import { normalizeData } from '../../utils/normalize-data';
import {fetchImages} from '../../actions/index';

let cx = classNames.bind(styles);

@connect(null, {
  fetchImages
})
class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchImages(normalizeData(images));
  }

  render() {
    return (
      <div className={cx('home')}>
        <List/>
       </div>
    );
  }
}

export default HomePage;
