import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import ContentCardLabel from './content-card-label';

import './styles/content-card.css';


export default class ContentCard extends React.Component {

  static CLASS_NAME = block('content-card');


  // Render methods

  renderLabel() {
    const { label } = this.props;

    if (label) {
      return (
        <ContentCardLabel>
          {label}
        </ContentCardLabel>
      );
    }

    return null;
  }

  render() {
    return (
      <section className={this.constructor.CLASS_NAME()}>
        {this.renderLabel()}
        {this.props.children}
      </section>
    );
  }
}


ContentCard.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node
};

ContentCard.defaultProps = {
  label: null,
  children: null
};
