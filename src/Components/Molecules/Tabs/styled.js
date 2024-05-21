import { styled, css } from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 24px;
  padding-bottom: 6px;
  border: 1px solid #eeeff2;
  gap: 16px;
`;

export const TabsStyled = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  padding: 0px 8px;
  cursor: pointer;
  color: #718096;
  ${(props) =>
    props.active === "true" &&
    css`
      color: #0caf60;

      &:after {
        position: absolute;
        bottom: -7px;
        left: 0px;
        content: "";
        width: 100%;
        height: 2px;
        background-color: #0caf60;
      }

      &


    `}
`;
