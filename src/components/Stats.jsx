import React, { Component, PropTypes } from 'react';
const propTypes = {
};
const defaultProps = {
};
class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberCount: (this.props.memberData).length,
      checkedMemberCount: (this.props.memberData).filter((member) => {
        return member.checked;
      }).length,
    };
    console.log(this.state.checkedMemberCount);
  }

  getCheckedMemberCount(member) {
    const checkedMember = this.state.memberCount.filter((member) => {
      return member.checked;
    });
    return checkedMember.length;
  }

  render() {
    return (
      <div>
        {this.state.checkedMemberCount} / {this.state.memberCount}
      </div>
    );
  }
}
Stats.propTypes = propTypes;
Stats.defaultProps = defaultProps;
export default Stats;
