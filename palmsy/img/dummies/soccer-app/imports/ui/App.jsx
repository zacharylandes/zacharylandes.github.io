import React, {Component}  from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TeamList from './Team-lists';
import TeamStats from './Team-stats';
import Player from './Player';
import AppBar from 'material-ui/AppBar';

export default class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title='Soccer Application'
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}/>
          <div className="row">
            <div className="col s12 m7">Player</div>
            <div className="col s12 m5">Team lists</div>
            <div className="col s12 m5">Team Stats</div>
          </div>
        </div>
      </MuiThemeProvider>

    )
  }
}
