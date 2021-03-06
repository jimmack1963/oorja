import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { FocusStyleManager } from '@blueprintjs/core';

import './app.scss';


FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <div>
        <div className="versionTag">
          <a href="https://github.com/akshayKMR/oorja" target="_blank">
            <strong>ALPHA</strong>
          </a>
        </div>
        <CSSTransitionGroup
          transitionName="page"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionEnter={true}
          transitionLeave={false}>
          {React.cloneElement(this.props.children, { key: path })}
        </CSSTransitionGroup>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
  location: React.PropTypes.object,
};

export default App;
