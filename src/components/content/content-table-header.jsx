import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/content-table.css';


const CLASS_NAME = block('content-table');

export default class ContentTableHeader extends React.Component {

  static HEADER_CLASS_NAME = CLASS_NAME('header');
  static CELL_CLASS_NAME = CLASS_NAME('cell');

  renderCell(column) {
    return (
      <td
        className={ContentTableHeader.CELL_CLASS_NAME()}
        key={column}
      >
        {column}
      </td>
    );
  }

  render() {
    const { columns } = this.props;

    return (
      <tr className={ContentTableHeader.HEADER_CLASS_NAME()}>
        {
          columns.map((column) => this.renderCell(column))
        }
      </tr>
    );
  }
}

ContentTableHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired
};
