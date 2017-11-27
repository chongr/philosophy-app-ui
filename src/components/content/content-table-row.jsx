import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/content-table.css';


const CLASS_NAME = block('content-table');

export default class ContentTableRow extends React.Component {

  static ROW_CLASS_NAME = CLASS_NAME('row');
  static CELL_CLASS_NAME = CLASS_NAME('cell');

  renderCell(column, index) {
    return (
      <td
        className={ContentTableRow.CELL_CLASS_NAME()}
        key={`${column}#${index}`}
      >
        {column}
      </td>
    );
  }

  render() {
    const { columns, type } = this.props;
    const classes = this.constructor.ROW_CLASS_NAME({ type })();
    return (
      <tr className={classes}>
        { columns.map((column, index) => this.renderCell(column, index)) }
      </tr>
    );
  }
}

ContentTableRow.propTypes = {
  type: PropTypes.oneOf(['bold', 'body']),
  columns: PropTypes.arrayOf(PropTypes.string).isRequired
};

ContentTableRow.defaultProps = {
  type: 'body'
};
