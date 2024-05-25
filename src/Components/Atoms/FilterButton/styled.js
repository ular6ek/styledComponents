import { styled } from "styled-components";

export const FilterButtonStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  left: 65pc;
  bottom: 4.2pc;
  gap: 10px;
  max-width: max-content;
  background-color: rgba(250, 250, 250, 1);
  padding: 15px;
  border-radius: 12px;
  border: none;
  box-sizing: border-box;
`;

export const FilterIconStyled = styled.div`
  svg {
    path {
      stroke: ${({ active }) => (active ? "green" : "gray")};
    }
  }
`;

export const FilterText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0cap.20000000298023224px;
  text-align: left;
  color: ${({ active }) => (active === "true" ? "green" : "gray")};
`;
