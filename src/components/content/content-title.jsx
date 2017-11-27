import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';
import renderHtml from '../util/render-html';

import './styles/content-title.css';


export default class ContentTitle extends React.Component {

  static CLASS_NAME = block('content-title');

  // Render methods

  render() {
    const {
      children,
      safeContent
    } = this.props;

    return (
      <h4 className={this.constructor.CLASS_NAME()}>{ safeContent ? children : renderHtml(children) }</h4>
    );
  }
}

ContentTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  safeContent: PropTypes.bool
};

ContentTitle.defaultProps = {
  safeContent: false
};
