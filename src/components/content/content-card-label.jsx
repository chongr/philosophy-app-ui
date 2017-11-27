import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/content-card-label.css';


export default class ContentCardLabel extends React.Component {

  static CLASS_NAME = block('content-card-label');


  // Render methods

  render() {
    return (
      <h3 className={this.constructor.CLASS_NAME()}>{ this.props.children }</h3>
    );
  }
}


ContentCardLabel.propTypes = {
  children: PropTypes.string
};

ContentCardLabel.defaultProps = {
  children: ''
};
