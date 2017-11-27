import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/content-data.css';


const BASE_CLASS_NAME = block('content-data');

export default class ContentData extends React.Component {

  static CLASS_NAME = BASE_CLASS_NAME;
  static LABEL_CLASS_NAME = BASE_CLASS_NAME('label');
  static VALUE_CLASS_NAME = BASE_CLASS_NAME('value');

  // when `onClick` param is passed, the component should have some extra attributes/props in order to be accessible
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role
  createProps(onClick, props = {}) {
    if (!onClick) {
      return props;
    }

    return {
      ...props,
      role: 'button',
      tabIndex: 0,
      onClick: () => { onClick(); },
      onKeyPress: (e) => {
        if (e.key === ' ' || e.key.toLowerCase() === 'enter') {
          onClick();
        }
      }
    };
  }

  // Render methods

  render() {
    const {
      label,
      value,
      onClick,
      isSeparated
    } = this.props;

    const classNames = BASE_CLASS_NAME({
      separated: isSeparated,
      clickable: !!onClick
    })();
    const props = this.createProps(onClick);

    return (
      <div className={classNames} {...props}>
        <div className={this.constructor.LABEL_CLASS_NAME()}>{ label }</div>
        <div className={this.constructor.VALUE_CLASS_NAME()}>{ value }</div>
      </div>
    );
  }
}


ContentData.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  isSeparated: PropTypes.bool,
  onClick: PropTypes.func
};

ContentData.defaultProps = {
  isSeparated: false,
  onClick: undefined
};
