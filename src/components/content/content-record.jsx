import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import block from '../util/block';

import './styles/content-record.css';


const BASE_CLASS_NAME = block('content-record');

export default class ContentRecord extends React.Component {

  static CLASS_NAME = BASE_CLASS_NAME;
  static ICON_CLASS_NAME = BASE_CLASS_NAME('icon');
  static TITLE_CLASS_NAME = BASE_CLASS_NAME('title');
  static CAPTION_CLASS_NAME = BASE_CLASS_NAME('caption');
  static CAPTION_VALUE_CLASS_NAME = BASE_CLASS_NAME('caption-value');
  static ACTION_CLASS_NAME = BASE_CLASS_NAME('action');
  static DISCLOSURE_CLASS_NAME = BASE_CLASS_NAME('disclosure');
  static HEADER_CLASS_NAME = BASE_CLASS_NAME('header');
  static SPECIAL_CLASS_NAME = BASE_CLASS_NAME('special');
  static TEXT_ITEMS_CLASS_NAME = BASE_CLASS_NAME('text-items');


  // Render methods

  renderTitle() {
    const { title } = this.props;

    if (title) {
      return (
        <h4 className={this.constructor.TITLE_CLASS_NAME()}>{title}</h4>
      );
    }

    return null;
  }

  renderIcon() {
    const { iconUrl, title } = this.props;

    if (!iconUrl) {
      return null;
    }

    return (
      <img className={this.constructor.ICON_CLASS_NAME()} src={iconUrl} alt={title} />
    );
  }

  renderCaption() {
    const { caption } = this.props;
    const captionValueClassName = this.constructor.CAPTION_VALUE_CLASS_NAME({ main: true })();

    if (!caption) {
      return null;
    }

    return (
      <div className={this.constructor.CAPTION_CLASS_NAME()}>
        <div className={captionValueClassName}>{caption}</div>
        {this.renderSubCaption()}
      </div>
    );
  }

  renderSubCaption() {
    const { subCaption } = this.props;
    const captionValueClassName = this.constructor.CAPTION_VALUE_CLASS_NAME({ sub: true })();

    if (!subCaption) {
      return null;
    }

    return (
      <div className={captionValueClassName}>{subCaption}</div>
    );
  }

  renderActionButton() {
    const action = this.props.action;

    if (!action || !action.onClick || !action.label) {
      return null;
    }

    return (
      <button
        className={this.constructor.ACTION_CLASS_NAME()}
        onClick={(event) => {
          event.preventDefault();
          action.onClick();
        }}
        type="button"
      >
        {action.label}
      </button>
    );
  }

  renderDisclosure() {
    const { onClick, action } = this.props;

    if (onClick && !action) {
      return (
        <div className={this.constructor.DISCLOSURE_CLASS_NAME()} />
      );
    }

    return null;
  }

  renderHeader() {
    const { header } = this.props;

    if (header) {
      return (
        <div className={this.constructor.HEADER_CLASS_NAME()}>{ header }</div>
      );
    }

    return null;
  }

  renderSpecial() {
    const { special } = this.props;

    if (special) {
      return (
        <div className={this.constructor.SPECIAL_CLASS_NAME()}>{special}
        </div>
      );
    }

    return null;
  }

  renderTextItems() {
    return (
      <div className={this.constructor.TEXT_ITEMS_CLASS_NAME()}>
        {this.renderSpecial()}
        {this.renderTitle()}
        {this.renderHeader()}
        {this.renderCaption()}
      </div>
    );
  }

  renderRecord() {
    let type = 'no-action';
    if (this.props.onClick) {
      type = 'on-click';
    } else if (this.props.to) {
      type = 'link';
    } else if (this.props.href) {
      type = 'external-link';
    }

    return (
      <div
        className={this.constructor.CLASS_NAME({ [type]: true })()}
        onClick={this.props.onClick}
        role="button"
        tabIndex={0}
      >
        {this.renderDisclosure()}
        {this.renderActionButton()}
        {this.renderIcon()}
        {this.renderTextItems()}
      </div>
    );
  }


  render() {
    if (this.props.to) {
      return (
        <NavLink exact to={this.props.to}>
          {this.renderRecord()}
        </NavLink>
      );
    } if (this.props.href) {
      return (
        <a href={this.props.href}>
          {this.renderRecord()}
        </a>
      );
    }

    return this.renderRecord();
  }
}


ContentRecord.propTypes = {
  action: PropTypes.object,
  caption: PropTypes.string,
  iconUrl: PropTypes.string,
  subCaption: PropTypes.string,
  title: PropTypes.string,
  header: PropTypes.string,
  special: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  href: PropTypes.string
};

ContentRecord.defaultProps = {
  action: null,
  caption: null,
  iconUrl: null,
  subCaption: null,
  title: null,
  header: null,
  special: null,
  onClick: null,
  to: null,
  href: null
};
