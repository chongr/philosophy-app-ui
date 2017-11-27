import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';
import renderHtml from '../util/render-html';

import './styles/content-paragraph.css';


export default class ContentParagraph extends React.Component {

  static CLASS_NAME = block('content-paragraph');

  // Render methods

  render() {
    const {
      children,
      safeContent
    } = this.props;

    return (
      <p className={this.constructor.CLASS_NAME()}>{ safeContent ? children : renderHtml(children) }</p>
    );
  }
}

ContentParagraph.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  safeContent: PropTypes.bool
};

ContentParagraph.defaultProps = {
  safeContent: false
};
