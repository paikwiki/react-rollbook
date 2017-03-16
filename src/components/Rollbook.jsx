import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';

import MemberList from './MemberList';
import Stats from './Stats';
import Navigation from './Navigation';

const propTypes = {
};
const defaultProps = {
};
class Rollbook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateInfo: '',
      memberCount: -1,
      checkedMemberCount: -1,
      memberData: [{
        name: 'BY Kim',
        checked: false,
      }, {
        name: 'SJ Noh',
        checked: false,
      }, {
        name: 'CH Paik',
        checked: false,
      }, {
        name: 'SW Sohn',
        checked: false,
      }, {
        name: 'WK Yoo',
        checked: false,
      }, {
        name: 'JS Jeong',
        checked: false,
      }],
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  componentWillMount() {
    const d = new Date();
    const today = `${d.getMonth() + 1} / ${d.getDate()}`;

    const memberData = localStorage.memberData;
    if(memberData) {
      this.setState({
        memberData: JSON.parse(memberData)
      });
    }
    const memberCount = (this.state.memberData).length;
    const checkedMemberCount = (this.state.memberData).filter(
      (member) => { return member.checked }
    ).length;

    this.setState({
      dateInfo: today,
      memberCount,
      checkedMemberCount,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(JSON.stringify(prevState.memberData) !== JSON.stringify(this.state.memberData)) {
      localStorage.memberData = JSON.stringify(this.state.memberData);
    }
  }

  handleCheck(i) {
    const bool = !this.state.memberData[i].checked;
    const checkedMemberCount = (this.state.memberData).filter(
      (member) => { return member.checked; }
    ).length;
    this.setState({
      memberData: update(
        this.state.memberData,
        {
          [i]: {
            checked: { $set: bool },
          },
        },
      ),
      checkedMemberCount: bool ? checkedMemberCount + 1 : checkedMemberCount - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Rollbook</h1>
        <MemberList
          memberData={this.state.memberData}
          onCheck={this.handleCheck}
        />
        <Stats
          memberData={this.state.memberData}
          checkedMemberCount={this.state.checkedMemberCount}
          memberCount={this.state.memberCount}
          onCheck={this.handleStatsCheck}
        />
        <Navigation
          dateInfo={this.state.dateInfo}
        />
      </div>
    );
  }
}
Rollbook.propTypes = propTypes;
Rollbook.defaultProps = defaultProps;
export default Rollbook;
