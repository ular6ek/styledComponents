import { styled } from "styled-components";

export const SidebarStyled = styled.div`
  min-height: 100vh;
  max-width: 256px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position:fixed;
  top:0px;
  left:0px;
  background-color:#fff;
  border-right: 2px solid #F1F2F4;
`;

export const SidebarHead = styled.div``;

export const SidebarFooter = styled.div``;

export const SidebarBlock = styled.div`
  margin-top: 25px;
  padding : 0px 24px;
`;

export const SidebarTitle = styled.div`
font-size: 12px;
font-weight: 500;
text-align: left;
color: #A0AEC0;
`;



 export const SidebarBack = styled.div`
  display: flex;
  border:2px solid #F1F2F4;
  background-color: #fff;
  width: 32px;
  height: 32px;
  position:absolute;
  top:30px;
  left:239px;
  border-radius:50%;
  cursor: pointer;
  align-items:center;
  justify-content: center;


`
