import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/layout.css';


const BASE_CLASS_NAME = block('araf-layout');

export default class Layout extends React.Component {

  static CLASS_NAME = BASE_CLASS_NAME;
  static WRAPPER_CLASS_NAME = BASE_CLASS_NAME('wrapper');
  static MAIN_CLASS_NAME = BASE_CLASS_NAME('container');
  static ROOT_ELEMENT_SELECTOR = 'body > div';

  componentDidMount() {
    const dataUseragent = navigator.userAgent;
    const doc = document.documentElement;

    doc.setAttribute('data-useragent', dataUseragent);

    // Apply araf-layout class to first div in document.
    // This assumes that this is where the app lives
    this.layoutRoot = document.querySelector(this.constructor.ROOT_ELEMENT_SELECTOR);
    this.layoutRoot.classList.add(this.constructor.CLASS_NAME);
  }

  componentWillUnmount() {
    this.layoutRoot.classList.remove(this.constructor.CLASS_NAME);
  }

  // Render methods
  render() {
    return (
      <div className={this.constructor.WRAPPER_CLASS_NAME()}>
        {this.props.header}
        <main className={this.constructor.MAIN_CLASS_NAME()}>
          {this.props.children}
        </main>
        {this.props.footer}
      </div>
    );
  }
}


Layout.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node
};

Layout.defaultProps = {
  children: null,
  header: null,
  footer: null
};
