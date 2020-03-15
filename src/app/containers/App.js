import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import DashboardContainer from "./dashboard/DashboardContainer";
import { setName } from "../actions/userActions";

const AppWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <DashboardContainer />
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
