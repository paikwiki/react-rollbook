import React, { Component, PropTypes } from 'react';
const propTypes = {
};
const defaultProps = {
};
class MemberList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter(
        (member) => {
          return member.name;
        },
      );
      // console.log(data);
      return data.map((member, i) => {
        return (<p key={i}>{member.name}</p>
        );
      });
    };
    return (
      <div>{mapToComponents(this.props.memberData)}</div>
    );
  }
}
MemberList.propTypes = propTypes;
MemberList.defaultProps = defaultProps;
export default MemberList;
