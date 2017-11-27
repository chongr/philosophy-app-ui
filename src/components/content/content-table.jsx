import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import ContentTableRow from './content-table-row';
import ContentTableHeader from './content-table-header';
import './styles/content-table.css';

export default class ContentTable extends React.Component {

  static CLASS_NAME = block('content-table');

  static Row = ContentTableRow;
  static Header = ContentTableHeader;

  renderHeader() {
    const header = this.props.header;

    if (header) {
      return <thead>{header}</thead>;
    }
    return null;
  }

  renderRows() {
    const rows = this.props.children;
    return <tbody>{rows}</tbody>;
  }

  render() {
    return (
      <table className={this.constructor.CLASS_NAME()}>
        {this.renderHeader()}
        {this.renderRows()}
      </table>
    );
  }

}

ContentTable.propTypes = {
  header: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

ContentTable.defaultProps = {
  header: null
};
