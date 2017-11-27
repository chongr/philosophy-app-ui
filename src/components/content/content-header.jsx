import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/content-header.css';


const BASE_CLASS_NAME = block('content-header');

export default class ContentHeader extends React.Component {

  static CLASS_NAME = BASE_CLASS_NAME;
  static TITLE_CLASS_NAME = BASE_CLASS_NAME('title');
  static BODY_CLASS_NAME = BASE_CLASS_NAME('body');
  static ICON_CLASS_NAME = BASE_CLASS_NAME('icon');
  static TEXT_ITEMS_CLASS_NAME = BASE_CLASS_NAME('text-items');
  static PRE_HEADER_CLASS_NAME = BASE_CLASS_NAME('pre-header');

  // Render methods

  renderIcon() {
    const { iconUrl, title } = this.props;

    if (iconUrl) {
      return (
        <img className={this.constructor.ICON_CLASS_NAME()} src={iconUrl} alt={title} />
      );
    }

    return null;
  }

  renderBody() {
    if (this.props.body) {
      return (
        <p className={this.constructor.BODY_CLASS_NAME()}>{this.props.body}</p>
      );
    }

    return null;
  }

  renderTitle() {
    if (this.props.title || this.props.children) {
      return (
        <h3 className={this.constructor.TITLE_CLASS_NAME()}>{ this.props.title || this.props.children }</h3>
      );
    }

    return null;
  }

  renderPreHeader() {
    if (this.props.preHeader) {
      return (
        <span className={this.constructor.PRE_HEADER_CLASS_NAME()}>{this.props.preHeader}</span>
      );
    }

    return null;
  }

  renderTextItems() {
    if (this.props.title || this.props.body || this.props.children) {
      return (
        <div className={this.constructor.TEXT_ITEMS_CLASS_NAME()}>
          {this.renderPreHeader()}
          {this.renderTitle()}
          {this.renderBody()}
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <div className={this.constructor.CLASS_NAME()}>
        {this.renderTextItems()}
        {this.renderIcon()}
      </div>
    );
  }
}


ContentHeader.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  iconUrl: PropTypes.string,
  preHeader: PropTypes.string,
  children: PropTypes.string
};

ContentHeader.defaultProps = {
  title: '',
  body: null,
  iconUrl: null,
  preHeader: null,
  children: null
};
