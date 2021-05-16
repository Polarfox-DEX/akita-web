import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  padding-top: 90px;
  /* background-color: #f9f9ff; */
  background-color: black;
  background: url(images/bg/footer-bg.jpg);
  background-size: cover !important;
  background-repeat: no-repeat !important;
`;

const CopyRightContainer = styled.div``;

const PolarfoxLabsLink = styled.a`
  color: #ffbf66;
  transition: all 0.5s ease 0s;
  text-decoration: none !important;
  outline: none !important; ;
`;

export const Footer: FunctionComponent = () => (
  <StyledFooter>
    <p>
      Built by&nbsp;
      <PolarfoxLabsLink href="https://www.polarfox.io/" target="blank">
        Polarfox labs
      </PolarfoxLabsLink>
    </p>
  </StyledFooter>
);
