import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/content-cover.css';


const BASE_CLASS_NAME = block('content-cover');

export default class ContentCover extends React.Component {

  static CLASS_NAME = BASE_CLASS_NAME;
  static HEADER_CLASS_NAME = BASE_CLASS_NAME('header')


  // Render methods

  renderTitle() {
    const { title } = this.props;

    if (title) {
      return (
        <h2 className={this.constructor.HEADER_CLASS_NAME()}>{ title }</h2>
      );
    }

    return null;
  }

  render() {
    const { imageUrl, children } = this.props;
    const styles = imageUrl ? { backgroundImage: `url(${imageUrl})` } : {};

    return (
      <header className={this.constructor.CLASS_NAME()} style={styles}>
        {this.renderTitle()}
        {children}
      </header>
    );
  }
}


ContentCover.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  children: PropTypes.node
};

ContentCover.defaultProps = {
  title: '',
  imageUrl: null,
  children: null
};
