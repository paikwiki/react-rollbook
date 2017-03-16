import React, { Component, PropTypes } from 'react';

const propTypes = {
  onStatsCheck: React.PropTypes.func,
};

const defaultProps = {
  onStatsCheck: () => { console.error('onStatsCheck is not defined'); }
};

class Stats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.checkedMemberCount} / {this.props.memberCount}
      </div>
    );
  }
}
Stats.propTypes = propTypes;
Stats.defaultProps = defaultProps;
export default Stats;
