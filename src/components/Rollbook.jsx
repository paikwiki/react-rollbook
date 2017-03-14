import React, { Component, PropTypes } from 'react';
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
      dateInfo: '3/15',
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
  }
  render() {

    return (
      <div>
        <h1>Rollbook</h1>
        <MemberList
          memberData={this.state.memberData}
        />
        <Stats
          memberData={this.state.memberData}
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
