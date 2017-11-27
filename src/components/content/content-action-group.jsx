import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/content-action-group.css';

export default class ContentActionGroup extends React.Component {

  static CLASS_NAME = block('content-action-group');

  render() {
    const className = this.constructor.CLASS_NAME({ separated: this.props.isSeparated })();

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

ContentActionGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired,
  isSeparated: PropTypes.bool
};

ContentActionGroup.defaultProps = {
  isSeparated: true
};
