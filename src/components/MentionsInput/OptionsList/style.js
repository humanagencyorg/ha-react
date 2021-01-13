import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 0px;
  left: 0;
  z-index: 2;
`;

export const InnerWrapper = styled.div`
  display: flex;
  color: #727278;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  padding-bottom: 35px;
`;

export const EmptyResultsText = styled.span`
  max-width: 150px;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
`;
