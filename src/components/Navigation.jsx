import React, { Component, PropTypes } from 'react';
const propTypes = {
};
const defaultProps = {
};
class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>◀</span>
        <span>{this.props.dateInfo}</span>
        <span>▶</span>
      </div>
    );
  }
}
Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
export default Navigation;
