import React, { Component, PropTypes } from 'react';
import MemberList from './MemberList';
import Stats from './Stats';
import Navigation from './Navigation';
import update from 'react-addons-update'

const propTypes = {
};
const defaultProps = {
};
class Rollbook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateInfo: '',
      memberData: [{
        name: 'BY Kim',
        checked: true,
      }, {
        name: 'SJ Noh',
        checked: true,
      }, {
        name: 'CH Paik',
        checked: true,
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
    const today = ( d.getMonth() + 1 ) + '/' + d.getDate();
    this.setState({
      dateInfo: today,
    })
  }

  handleCheck(i) {
    console.log(this.state.memberData[i].checked);

    var bool = this.state.memberData[i].checked ? false : true;
    this.setState({
      memberData: update(
          this.state.memberData,
          {
            [i]: {
              checked: { $set: bool },
            }
          }
      ),
    })
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
