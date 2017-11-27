import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/content-record-list.css';


const BASE_CLASS_NAME = block('content-record-list');

export default class ContentRecordList extends React.Component {

  static CLASS_NAME = BASE_CLASS_NAME;
  static ITEM_CLASS_NAME = BASE_CLASS_NAME('item');


  // Render methods

  renderList() {
    const { children, type } = this.props;
    const className = this.constructor.ITEM_CLASS_NAME({ [type]: true })();
    const records = Array.isArray(children) ? children : [children];

    return records.map((record, index) => {
      const key = `content-record-item-${index}`;

      return (
        <li
          key={key}
          className={className}
        >
          {record}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className={this.constructor.CLASS_NAME()}>
        {this.renderList()}
      </ul>
    );
  }
}


ContentRecordList.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['separated', 'shaded'])
};

ContentRecordList.defaultProps = {
  type: 'separated'
};
