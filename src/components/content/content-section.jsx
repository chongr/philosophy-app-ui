import React from 'react';
import PropTypes from 'prop-types';
import block from '../util/block';

import './styles/content-section.css';

export default class ContentSection extends React.Component {

  static CLASS_NAME = block('content-section');
  static EXPAND_BUTTON = ContentSection.CLASS_NAME('expand-button');
  static EXPANDED_CONTENT = ContentSection.CLASS_NAME('expanded-content');

  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  renderExpandButton() {
    const onExpandClick = () => this.setState({ expanded: !this.state.expanded });
    const classNames = ContentSection.EXPAND_BUTTON({ expanded: this.state.expanded })();

    return (
      <button
        className={classNames}
        onClick={onExpandClick}
      />
    );
  }

  render() {
    const { expandedContent } = this.props;
    const { expanded } = this.state;

    const mainContainerClasses = ContentSection.CLASS_NAME({ separated: this.props.isSeparated })();
    const expandedContentClasses = ContentSection.EXPANDED_CONTENT({ visible: expanded })();

    return (
      <div className={mainContainerClasses}>
        {this.props.children}
        {!!expandedContent && (this.renderExpandButton())}
        <div className={expandedContentClasses}>
          {expandedContent}
        </div>
      </div>
    );
  }
}

ContentSection.propTypes = {
  children: PropTypes.node.isRequired,
  isSeparated: PropTypes.bool,
  expandedContent: PropTypes.node
};

ContentSection.defaultProps = {
  isSeparated: true,
  expandedContent: null
};
