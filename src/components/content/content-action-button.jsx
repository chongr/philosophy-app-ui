import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/content-action-button.css';

export default class ContentActionButton extends React.Component {

  static CLASS_NAME = block('content-action-button');

  render() {
    const { label, onClick } = this.props;

    return (
      <button
        className={this.constructor.CLASS_NAME()}
        onClick={() => onClick()}
        type="button"
      >
        {label}
      </button>
    );
  }
}

ContentActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string
};

ContentActionButton.defaultProps = {
  label: ''
};
