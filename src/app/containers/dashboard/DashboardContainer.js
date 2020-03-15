import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";
import DashboardHeader from "./components/DashboardHeader";
import { DashboardFooter } from "./components/DashboardFooter";

const Container = styled.div``;

const ContentLayout = styled.div`
  background-color: #e4e4e4;
  margin: auto;
  max-width: 100vw;
  height: calc(100vh - 100px - 64px);
`;

class DashboardContainer extends React.Component {
  render() {
    return (
      <Container>
        <DashboardHeader />
        <ContentLayout></ContentLayout>
        <DashboardFooter />
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
