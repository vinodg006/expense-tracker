import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: #fff;
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const ElementStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.div`
  position: absolute;
  bottom: 0;
`;

const FooterIcon = styled.i`
  color: green;
  transform: scale(2);
`;

export const DashboardFooter = props => {
  return (
    <Wrapper className="row">
      <ElementStyle className="col-sm">
        <FooterIcon className="fa fa-money" />
        <FooterText>Transactions</FooterText>
      </ElementStyle>
      <ElementStyle className="col-sm">
        <FooterIcon className="fa fa-pie-chart" />
        <FooterText>Graphs</FooterText>
      </ElementStyle>
      <ElementStyle className="col-sm">
        <FooterIcon className="fa fa-align-justify" />
        <FooterText>Categories</FooterText>
      </ElementStyle>
      <ElementStyle className="col-sm">
        <FooterIcon className="fa fa-wrench" />
        <FooterText>Settings</FooterText>
      </ElementStyle>
    </Wrapper>
  );
};
