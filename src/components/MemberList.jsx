import React, { Component, PropTypes } from 'react';

const propTypes = {
  onCheck : React.PropTypes.func,
};
const defaultProps = {
  onCheck : () => {
    console.log('handleCheck is not defined');
  }
};
class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    console.log(i);
    this.setState = {
      selectedKey: i,
    };
    this.props.onCheck(i);

    // console.log();
    // console.log(this.props.memberData[i].checked);
    // if(!this.props.memberData[i].checked) {
    //
    // } else {
    //   this.setState({
    //     memberData[i].checked: false,
    //   })
    // }
    // if(!this.props.memberData[i].checked) {
      // this.props.memberData[i].setState({
      //   checked: true,
      // });
    // }
    // console.log(this.props.memberData);
    // if(!this.checked) {
    //   this.setState({
    //     checked: true,
    //   });
    // } else {
    //   this.setState({
    //     checked: false,
    //   });
    // }
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
        return (
          <p
            key={i}
            onClick={()=> this.handleClick(i)}
          >
            <span>{member.name}</span>
            <span>{member.checked ? '√' : ''}</span>
          </p>
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
